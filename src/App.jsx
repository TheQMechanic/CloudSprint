import {
  createElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Check,
  CheckCircle2,
  ChevronDown,
  Cloud,
  CloudOff,
  ExternalLink,
  Gauge,
  LogIn,
  LogOut,
  NotebookPen,
  RotateCcw,
  Save,
  Settings,
  Target,
  Trash2,
  User,
} from 'lucide-react';
import { firebaseReady, loadFirebase, getFirebaseSync } from './firebase';
import {
  ROADMAP_ID,
  flattenDays,
  flattenTasks,
  roadmap,
  strategyCards,
} from './data/roadmap';

/** Maximum notes + activity events to write per batch (Firestore limit is 500). */
const MAX_BATCH_NOTES = 200;
const MAX_BATCH_ACTIVITY = 25;

const LOCAL_STATE_KEY = 'career-tracker-state-v1';

const DEFAULT_GOALS = {
  targetRole: 'Cloud Support Associate',
  certificationDate: '',
  dailyStudyGoal: '60',
};

const DEFAULT_SETTINGS = {
  localOnly: false,
};

const EMPTY_APP_STATE = {
  checkedTaskIds: [],
  notes: {},
  goals: DEFAULT_GOALS,
  settings: DEFAULT_SETTINGS,
  activity: [],
  updatedAt: null,
};

const colorClasses = {
  indigo: {
    header: 'bg-slate-900',
    accentText: 'text-indigo-300',
    border: 'border-indigo-500',
    pale: 'bg-indigo-50',
    text: 'text-indigo-900',
    link: 'text-indigo-700 hover:text-indigo-900',
    check: 'border-indigo-500 bg-indigo-600',
  },
  emerald: {
    header: 'bg-emerald-950',
    accentText: 'text-emerald-300',
    border: 'border-emerald-500',
    pale: 'bg-emerald-50',
    text: 'text-emerald-900',
    link: 'text-emerald-700 hover:text-emerald-900',
    check: 'border-emerald-500 bg-emerald-600',
  },
  orange: {
    header: 'bg-orange-950',
    accentText: 'text-orange-300',
    border: 'border-orange-500',
    pale: 'bg-orange-50',
    text: 'text-orange-900',
    link: 'text-orange-700 hover:text-orange-900',
    check: 'border-orange-500 bg-orange-600',
  },
  red: {
    header: 'bg-red-950',
    accentText: 'text-red-300',
    border: 'border-red-500',
    pale: 'bg-red-50',
    text: 'text-red-900',
    link: 'text-red-700 hover:text-red-900',
    check: 'border-red-500 bg-red-600',
  },
};

const strategyColorClasses = {
  indigo: 'border-indigo-500 text-indigo-700',
  emerald: 'border-emerald-500 text-emerald-700',
  orange: 'border-orange-500 text-orange-700',
};

function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

function normalizeState(value) {
  return {
    checkedTaskIds: unique(value?.checkedTaskIds || []),
    notes: value?.notes && typeof value.notes === 'object' ? value.notes : {},
    goals: {
      ...DEFAULT_GOALS,
      ...(value?.goals || {}),
    },
    settings: {
      ...DEFAULT_SETTINGS,
      ...(value?.settings || {}),
    },
    activity: Array.isArray(value?.activity) ? value.activity.slice(0, 50) : [],
    updatedAt: value?.updatedAt || null,
  };
}

function loadLocalState() {
  try {
    const rawState = window.localStorage.getItem(LOCAL_STATE_KEY);
    return normalizeState(rawState ? JSON.parse(rawState) : EMPTY_APP_STATE);
  } catch {
    return normalizeState(EMPTY_APP_STATE);
  }
}

function saveLocalState(state) {
  window.localStorage.setItem(
    LOCAL_STATE_KEY,
    JSON.stringify({ ...state, updatedAt: new Date().toISOString() }),
  );
}

function goalsChangedLocally(localGoals) {
  return JSON.stringify(localGoals) !== JSON.stringify(DEFAULT_GOALS);
}

function mergeAppState(localState, cloudState) {
  const localGoalsChanged = goalsChangedLocally(localState.goals);
  const notes = { ...cloudState.notes };

  Object.entries(localState.notes || {}).forEach(([dayId, note]) => {
    if (typeof note === 'string' && note.trim()) {
      notes[dayId] = note;
    }
  });

  const activityById = new Map();
  [...(cloudState.activity || []), ...(localState.activity || [])].forEach(
    (event) => {
      if (event?.id) {
        activityById.set(event.id, event);
      }
    },
  );

  return normalizeState({
    checkedTaskIds: unique([
      ...(cloudState.checkedTaskIds || []),
      ...(localState.checkedTaskIds || []),
    ]),
    notes,
    goals: localGoalsChanged
      ? { ...DEFAULT_GOALS, ...(cloudState.goals || {}), ...localState.goals }
      : { ...DEFAULT_GOALS, ...(cloudState.goals || {}) },
    settings: {
      ...DEFAULT_SETTINGS,
      ...(cloudState.settings || {}),
      localOnly: localState.settings.localOnly,
    },
    activity: [...activityById.values()]
      .sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''))
      .slice(0, 50),
  });
}

async function loadCloudState(user, db) {
  if (!db) {
    return normalizeState(EMPTY_APP_STATE);
  }

  const {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
  } = await import('firebase/firestore');

  const userRef = doc(db, 'users', user.uid);
  const progressRef = doc(db, 'users', user.uid, 'progress', ROADMAP_ID);
  const notesRef = collection(db, 'users', user.uid, 'notes');
  const activityRef = collection(db, 'users', user.uid, 'activity');

  const [userSnap, progressSnap, notesSnap, activitySnap] = await Promise.all([
    getDoc(userRef),
    getDoc(progressRef),
    getDocs(notesRef),
    getDocs(query(activityRef, orderBy('createdAt', 'desc'), limit(50))),
  ]);

  const notes = {};
  notesSnap.forEach((noteDoc) => {
    const note = noteDoc.data();
    notes[noteDoc.id] = note.text || '';
  });

  const activity = [];
  activitySnap.forEach((activityDoc) => {
    activity.push({ id: activityDoc.id, ...activityDoc.data() });
  });

  return normalizeState({
    checkedTaskIds: progressSnap.exists()
      ? progressSnap.data().checkedTaskIds || []
      : [],
    notes,
    goals: userSnap.exists() ? userSnap.data().goals || DEFAULT_GOALS : {},
    settings: userSnap.exists()
      ? userSnap.data().settings || DEFAULT_SETTINGS
      : {},
    activity,
  });
}

async function saveCloudState(user, state, summary, db) {
  if (!db || !user) {
    return;
  }

  const {
    doc,
    serverTimestamp,
    writeBatch,
  } = await import('firebase/firestore');

  const batch = writeBatch(db);
  const userRef = doc(db, 'users', user.uid);
  const progressRef = doc(db, 'users', user.uid, 'progress', ROADMAP_ID);

  batch.set(
    userRef,
    {
      displayName: user.displayName || '',
      email: user.email || '',
      photoURL: user.photoURL || '',
      goals: state.goals,
      settings: state.settings,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  batch.set(
    progressRef,
    {
      roadmapId: ROADMAP_ID,
      checkedTaskIds: state.checkedTaskIds,
      completedTaskCount: summary.completedTaskCount,
      completedDayCount: summary.completedDayCount,
      totalTaskCount: summary.totalTaskCount,
      totalDayCount: summary.totalDayCount,
      percentage: summary.percentage,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );

  // Cap notes to avoid exceeding Firestore's 500-operation batch limit.
  Object.entries(state.notes).slice(0, MAX_BATCH_NOTES).forEach(([dayId, text]) => {
    batch.set(
      doc(db, 'users', user.uid, 'notes', dayId),
      {
        dayId,
        text,
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );
  });

  state.activity.slice(0, MAX_BATCH_ACTIVITY).forEach((event) => {
    batch.set(
      doc(db, 'users', user.uid, 'activity', event.id),
      event,
      { merge: true },
    );
  });

  await batch.commit();
}

function makeActivityEvent(task, completed) {
  const createdAt = new Date().toISOString();
  return {
    id: `${Date.now()}-${task.id}`,
    type: completed ? 'task_checked' : 'task_unchecked',
    completed,
    taskId: task.id,
    taskTitle: `${task.kind}: ${task.text}`,
    dayId: task.dayId,
    dayTitle: task.dayTitle,
    weekTitle: task.weekTitle,
    phaseTitle: task.phaseTitle,
    createdAt,
  };
}

function InlineText({ text }) {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.78rem] font-semibold text-slate-900"
          key={`${part}-${index}`}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function App() {
  const allTasks = useMemo(() => flattenTasks(roadmap), []);
  const allDays = useMemo(() => flattenDays(roadmap), []);
  const taskById = useMemo(
    () => new Map(allTasks.map((task) => [task.id, task])),
    [allTasks],
  );

  const [state, setState] = useState(loadLocalState);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(firebaseReady);
  const [cloudReady, setCloudReady] = useState(false);
  const [cloudStatus, setCloudStatus] = useState(
    firebaseReady ? 'Ready' : 'Firebase config needed',
  );
  const [lastSyncedAt, setLastSyncedAt] = useState(null);
  const [activeNoteDayId, setActiveNoteDayId] = useState(allDays[0]?.id || '');

  const stateRef = useRef(state);
  const cloudBootstrappedUidRef = useRef(null);

  const checkedSet = useMemo(
    () => new Set(state.checkedTaskIds),
    [state.checkedTaskIds],
  );

  const summary = useMemo(() => {
    const completedTaskCount = allTasks.filter((task) =>
      checkedSet.has(task.id),
    ).length;
    const completedDays = allDays.filter((day) =>
      day.tasks.every((task) => checkedSet.has(task.id)),
    );
    const currentTask = allTasks.find((task) => !checkedSet.has(task.id));
    const percentage =
      allTasks.length === 0
        ? 0
        : Math.round((completedTaskCount / allTasks.length) * 100);

    return {
      completedTaskCount,
      completedDayCount: completedDays.length,
      totalTaskCount: allTasks.length,
      totalDayCount: allDays.length,
      percentage,
      currentTask,
    };
  }, [allDays, allTasks, checkedSet]);

  const bootstrapCloud = useCallback(
    async (signedInUser, localSnapshot) => {
      if (!signedInUser || !firebaseReady) {
        return;
      }

      if (localSnapshot.settings.localOnly) {
        setCloudReady(false);
        setCloudStatus('Local only');
        return;
      }

      if (cloudBootstrappedUidRef.current === signedInUser.uid) {
        return;
      }

      cloudBootstrappedUidRef.current = signedInUser.uid;
      setCloudStatus('Loading cloud progress');

      try {
        const { db } = getFirebaseSync();
        const cloudState = await loadCloudState(signedInUser, db);
        const mergedState = mergeAppState(localSnapshot, cloudState);
        setState(mergedState);
        setCloudReady(true);
        setCloudStatus('Synced');
      } catch (error) {
        cloudBootstrappedUidRef.current = null;
        setCloudReady(false);
        setCloudStatus(error.message || 'Cloud sync failed');
      }
    },
    [],
  );

  useEffect(() => {
    stateRef.current = state;
    saveLocalState(state);
  }, [state]);

  // Lazily load Firebase and listen for auth state.
  useEffect(() => {
    if (!firebaseReady) {
      setAuthLoading(false);
      return;
    }

    let unsubscribe = null;

    loadFirebase().then(({ auth: fbAuth }) => {
      if (!fbAuth) {
        setAuthLoading(false);
        return;
      }

      // Dynamic import for auth helpers.
      import('firebase/auth').then(
        ({ onAuthStateChanged, getRedirectResult }) => {
          // Detect sign-in from a redirect flow (Bug #1 fix).
          getRedirectResult(fbAuth).catch(() => {});

          unsubscribe = onAuthStateChanged(fbAuth, async (nextUser) => {
            setUser(nextUser);
            setAuthLoading(false);

            if (!nextUser) {
              cloudBootstrappedUidRef.current = null;
              setCloudReady(false);
              setCloudStatus('Signed out');
              return;
            }

            await bootstrapCloud(nextUser, stateRef.current);
          });
        },
      );
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [bootstrapCloud]);

  useEffect(() => {
    if (user && !state.settings.localOnly && !cloudReady) {
      bootstrapCloud(user, stateRef.current);
    }

    if (state.settings.localOnly) {
      setCloudReady(false);
      setCloudStatus('Local only');
    }
  }, [bootstrapCloud, cloudReady, state.settings.localOnly, user]);

  useEffect(() => {
    if (!user || !firebaseReady || !cloudReady || state.settings.localOnly) {
      return;
    }

    setCloudStatus('Saving');
    const timeoutId = window.setTimeout(async () => {
      try {
        const { db } = getFirebaseSync();
        await saveCloudState(user, state, summary, db);
        setLastSyncedAt(new Date().toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit',
        }));
        setCloudStatus('Synced');
      } catch (error) {
        setCloudStatus(error.message || 'Cloud sync failed');
      }
    }, 650);

    return () => window.clearTimeout(timeoutId);
  }, [cloudReady, state, summary, user]);

  const handleGoogleSignIn = async () => {
    if (!firebaseReady) {
      setCloudStatus('Firebase config needed');
      return;
    }

    try {
      setCloudStatus('Loading…');
      const { auth: fbAuth, googleProvider: provider } = await loadFirebase();

      if (!fbAuth || !provider) {
        setCloudStatus('Firebase config needed');
        return;
      }

      const { signInWithPopup } = await import(
        'firebase/auth'
      );

      setCloudStatus('Opening Google');
      await signInWithPopup(fbAuth, provider);
    } catch (error) {
      if (
        error.code === 'auth/popup-blocked' ||
        error.code === 'auth/cancelled-popup-request'
      ) {
        const { auth: fbAuth, googleProvider: provider } = getFirebaseSync();
        const { signInWithRedirect } = await import('firebase/auth');
        await signInWithRedirect(fbAuth, provider);
        return;
      }

      setCloudStatus(error.message || 'Sign in failed');
    }
  };

  const handleSignOut = async () => {
    const { auth: fbAuth } = getFirebaseSync();
    if (!fbAuth) {
      return;
    }

    try {
      const { signOut } = await import('firebase/auth');
      await signOut(fbAuth);
    } catch (error) {
      setCloudStatus(error.message || 'Sign out failed');
    }
  };

  const toggleTask = (taskId) => {
    const task = taskById.get(taskId);

    setState((current) => {
      const currentSet = new Set(current.checkedTaskIds);
      const completed = !currentSet.has(taskId);

      if (completed) {
        currentSet.add(taskId);
      } else {
        currentSet.delete(taskId);
      }

      const event = task ? makeActivityEvent(task, completed) : null;

      return normalizeState({
        ...current,
        checkedTaskIds: [...currentSet],
        activity: event
          ? [event, ...current.activity].slice(0, 50)
          : current.activity,
      });
    });
  };

  const updateNote = (dayId, text) => {
    setState((current) =>
      normalizeState({
        ...current,
        notes: {
          ...current.notes,
          [dayId]: text,
        },
      }),
    );
  };

  const updateGoal = (key, value) => {
    setState((current) =>
      normalizeState({
        ...current,
        goals: {
          ...current.goals,
          [key]: value,
        },
      }),
    );
  };

  const updateLocalOnly = (localOnly) => {
    if (!localOnly) {
      cloudBootstrappedUidRef.current = null;
    }

    setState((current) =>
      normalizeState({
        ...current,
        settings: {
          ...current.settings,
          localOnly,
        },
      }),
    );
  };

  const resetLocalProgress = () => {
    const confirmed = window.confirm(
      'Reset checked tasks, notes, and activity for this device?',
    );

    if (!confirmed) {
      return;
    }

    setState((current) =>
      normalizeState({
        ...current,
        checkedTaskIds: [],
        notes: {},
        activity: [],
      }),
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-28 text-slate-900">
      <header className="bg-indigo-900 px-6 py-12 text-white shadow-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase text-indigo-200">
              {roadmap.commitment}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              {roadmap.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg font-medium text-indigo-100">
              {roadmap.subtitle}
            </p>
          </div>
          <div className="w-full max-w-sm border border-indigo-300/30 bg-indigo-950/40 p-5 md:w-80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase text-indigo-200">
                  Progress
                </p>
                <p className="mt-1 text-4xl font-black">
                  {summary.percentage}%
                </p>
              </div>
              <Gauge className="h-10 w-10 text-emerald-300" aria-hidden />
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded bg-indigo-950">
              <div
                className="h-full bg-emerald-400 transition-all duration-500"
                style={{ width: `${summary.percentage}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-indigo-100">
              {summary.completedTaskCount} of {summary.totalTaskCount} tasks
              checked
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="-mt-7 grid gap-4 md:grid-cols-3">
          {strategyCards.map((card) => (
            <article
              className={`glass border-t-4 p-5 shadow-lg ${strategyColorClasses[card.accent]}`}
              key={card.id}
            >
              <h2 className="text-base font-bold">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {card.body}
              </p>
            </article>
          ))}
        </section>

        <Dashboard
          activeNoteDayId={activeNoteDayId}
          allDays={allDays}
          authLoading={authLoading}
          cloudStatus={cloudStatus}
          firebaseReady={firebaseReady}
          lastSyncedAt={lastSyncedAt}
          onGoalChange={updateGoal}
          onLocalOnlyChange={updateLocalOnly}
          onNoteChange={updateNote}
          onResetLocalProgress={resetLocalProgress}
          onSelectNoteDay={setActiveNoteDayId}
          onSignIn={handleGoogleSignIn}
          onSignOut={handleSignOut}
          state={state}
          summary={summary}
          user={user}
        />

        <section className="mt-10 space-y-7">
          {roadmap.phases.map((phase) => (
            <PhaseSection
              checkedSet={checkedSet}
              key={phase.id}
              onToggleTask={toggleTask}
              phase={phase}
            />
          ))}
        </section>
      </main>

      <ProgressFooter summary={summary} />
    </div>
  );
}

function Dashboard({
  activeNoteDayId,
  allDays,
  authLoading,
  cloudStatus,
  firebaseReady,
  lastSyncedAt,
  onGoalChange,
  onLocalOnlyChange,
  onNoteChange,
  onResetLocalProgress,
  onSelectNoteDay,
  onSignIn,
  onSignOut,
  state,
  summary,
  user,
}) {
  const [activePanel, setActivePanel] = useState('overview');
  const activeNoteDay = allDays.find((day) => day.id === activeNoteDayId);
  const syncIcon = state.settings.localOnly || !firebaseReady ? CloudOff : Cloud;

  return (
    <section className="mt-8 border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 p-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center border border-slate-200 bg-slate-50">
            <User className="h-5 w-5 text-slate-700" aria-hidden />
          </div>
          <div>
            <h2 className="text-lg font-bold">Cloud Dashboard</h2>
            <p className="text-sm text-slate-600">
              {user ? user.email : 'Guest progress is saved on this device'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <StatusPill icon={syncIcon} label={cloudStatus} />
          {lastSyncedAt && (
            <StatusPill icon={Save} label={`Saved ${lastSyncedAt}`} />
          )}
          {user ? (
            <button className="button-secondary" onClick={onSignOut} type="button">
              <LogOut className="h-4 w-4" aria-hidden />
              Sign out
            </button>
          ) : (
            <button
              className="button-primary"
              disabled={authLoading || !firebaseReady}
              onClick={onSignIn}
              type="button"
            >
              <LogIn className="h-4 w-4" aria-hidden />
              Google sign-in
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-slate-200 px-5 py-3">
        {[
          ['overview', 'Overview', Gauge],
          ['notes', 'Notes', NotebookPen],
          ['settings', 'Settings', Settings],
        ].map(([panel, label, PanelIcon]) => (
          <button
            className={`tab-button ${activePanel === panel ? 'tab-button-active' : ''}`}
            key={panel}
            onClick={() => setActivePanel(panel)}
            type="button"
          >
            {createElement(PanelIcon, {
              className: 'h-4 w-4',
              'aria-hidden': true,
            })}
            {label}
          </button>
        ))}
      </div>

      {activePanel === 'overview' && (
        <div className="grid gap-5 p-5 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Metric
              icon={CheckCircle2}
              label="Tasks"
              value={`${summary.completedTaskCount}/${summary.totalTaskCount}`}
            />
            <Metric
              icon={Target}
              label="Days"
              value={`${summary.completedDayCount}/${summary.totalDayCount}`}
            />
            <Metric
              icon={Gauge}
              label="Current Week"
              value={summary.currentTask?.weekTitle.replace('Week ', 'W') || 'Done'}
            />
            <Metric
              icon={Cloud}
              label="Target Role"
              value={state.goals.targetRole || 'Not set'}
            />
          </div>

          <ActivityList activity={state.activity} />
        </div>
      )}

      {activePanel === 'notes' && (
        <div className="grid gap-5 p-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <label className="form-label" htmlFor="note-day">
              Day
            </label>
            <select
              className="form-field"
              id="note-day"
              onChange={(event) => onSelectNoteDay(event.target.value)}
              value={activeNoteDayId}
            >
              {allDays.map((day) => (
                <option key={day.id} value={day.id}>
                  {day.weekTitle} - {day.title}
                </option>
              ))}
            </select>

            <div className="border-l-4 border-indigo-500 bg-indigo-50 p-4">
              <p className="text-sm font-bold text-indigo-950">
                {activeNoteDay?.title}
              </p>
              <p className="mt-1 text-sm text-indigo-900">
                {activeNoteDay?.weekTitle}
              </p>
            </div>
          </div>

          <div>
            <label className="form-label" htmlFor="day-note">
              Note
            </label>
            <textarea
              className="form-field min-h-44 resize-y"
              id="day-note"
              onChange={(event) =>
                onNoteChange(activeNoteDayId, event.target.value)
              }
              value={state.notes[activeNoteDayId] || ''}
            />
          </div>
        </div>
      )}

      {activePanel === 'settings' && (
        <div className="grid gap-6 p-5 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-3 lg:col-span-2">
            <label className="block">
              <span className="form-label">Target role</span>
              <input
                className="form-field"
                onChange={(event) =>
                  onGoalChange('targetRole', event.target.value)
                }
                type="text"
                value={state.goals.targetRole}
              />
            </label>
            <label className="block">
              <span className="form-label">Certification date</span>
              <input
                className="form-field"
                onChange={(event) =>
                  onGoalChange('certificationDate', event.target.value)
                }
                type="date"
                value={state.goals.certificationDate}
              />
            </label>
            <label className="block">
              <span className="form-label">Daily study minutes</span>
              <input
                className="form-field"
                min="15"
                onChange={(event) =>
                  onGoalChange('dailyStudyGoal', event.target.value)
                }
                step="5"
                type="number"
                value={state.goals.dailyStudyGoal}
              />
            </label>
          </div>

          <label className="flex items-center gap-3 border border-slate-200 bg-slate-50 p-4">
            <input
              checked={state.settings.localOnly}
              className="h-5 w-5 accent-slate-900"
              onChange={(event) => onLocalOnlyChange(event.target.checked)}
              type="checkbox"
            />
            <span>
              <span className="block text-sm font-bold">Local only</span>
              <span className="block text-sm text-slate-600">
                Keep this device out of cloud sync
              </span>
            </span>
          </label>

          <div className="flex flex-wrap items-center gap-2 border border-slate-200 bg-slate-50 p-4">
            <button
              className="button-danger"
              onClick={onResetLocalProgress}
              type="button"
            >
              <Trash2 className="h-4 w-4" aria-hidden />
              Reset local progress
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function StatusPill({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
      {createElement(icon, { className: 'h-4 w-4', 'aria-hidden': true })}
      {label}
    </span>
  );
}

function Metric({ icon, label, value }) {
  return (
    <div className="border border-slate-200 bg-slate-50 p-4">
      {createElement(icon, {
        className: 'mb-4 h-5 w-5 text-slate-600',
        'aria-hidden': true,
      })}
      <p className="text-xs font-bold uppercase text-slate-500">{label}</p>
      <p className="mt-1 truncate text-lg font-black text-slate-950" title={value}>
        {value}
      </p>
    </div>
  );
}

function ActivityList({ activity }) {
  return (
    <div className="border border-slate-200 p-4">
      <h3 className="text-sm font-bold uppercase text-slate-500">
        Recent Activity
      </h3>
      <div className="mt-4 space-y-3">
        {activity.length === 0 ? (
          <p className="text-sm text-slate-600">No task changes yet.</p>
        ) : (
          activity.slice(0, 6).map((event) => (
            <div className="flex gap-3" key={event.id}>
              <div className="mt-0.5">
                {event.completed ? (
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-600"
                    aria-hidden
                  />
                ) : (
                  <RotateCcw className="h-4 w-4 text-slate-500" aria-hidden />
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {event.dayTitle}
                </p>
                <p className="text-xs text-slate-600">
                  {new Date(event.createdAt).toLocaleString([], {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function PhaseSection({ checkedSet, onToggleTask, phase }) {
  const colors = colorClasses[phase.color];

  return (
    <section className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div
        className={`${colors.header} flex flex-col gap-4 p-6 text-white md:flex-row md:items-center md:justify-between`}
      >
        <div>
          <p className={`text-lg font-bold italic ${colors.accentText}`}>
            {phase.label}
          </p>
          <h2 className="text-2xl font-bold">{phase.title}</h2>
        </div>
        <span className="w-fit border border-white/20 bg-white/10 px-3 py-1 text-sm font-bold">
          {phase.range}
        </span>
      </div>
      <div className="space-y-4 p-5">
        {phase.resources && <ResourceLine resources={phase.resources} />}
        {phase.weeks.map((week) => (
          <WeekPanel
            checkedSet={checkedSet}
            colors={colors}
            key={week.id}
            onToggleTask={onToggleTask}
            week={week}
          />
        ))}
      </div>
    </section>
  );
}

function WeekPanel({ checkedSet, colors, onToggleTask, week }) {
  return (
    <details className="group border border-slate-200" open={week.defaultOpen}>
      <summary
        className={`flex cursor-pointer items-center justify-between gap-4 p-4 transition-colors ${week.featured ? colors.pale : 'bg-slate-50 hover:bg-slate-100'}`}
      >
        <span className="font-bold">{week.title}</span>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-slate-600 transition-transform group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className={`grid gap-3 p-4 ${week.featured ? colors.pale : ''}`}>
        {week.intro && (
          <p className="text-sm font-semibold italic text-slate-600">
            {week.intro}
          </p>
        )}
        {week.resources && <ResourceLine resources={week.resources} />}
        {week.days.map((day) => (
          <DayBox
            checkedSet={checkedSet}
            colors={colors}
            day={day}
            key={day.id}
            onToggleTask={onToggleTask}
          />
        ))}
      </div>
    </details>
  );
}

function ResourceLine({ resources }) {
  return (
    <p className="text-xs font-bold uppercase text-slate-500">
      Resources:{' '}
      {resources.map((resource, index) => (
        <span key={resource.href}>
          {index > 0 && <span className="text-slate-300"> | </span>}
          <a
            className="text-indigo-700 hover:text-indigo-950 hover:underline"
            href={resource.href}
            rel="noreferrer"
            target="_blank"
          >
            {resource.label}
          </a>
        </span>
      ))}
    </p>
  );
}

function DayBox({ checkedSet, colors, day, onToggleTask }) {
  const completed = day.tasks.every((task) => checkedSet.has(task.id));
  const completedCount = day.tasks.filter((task) => checkedSet.has(task.id))
    .length;

  return (
    <article
      className={`day-box ${completed ? `day-box-complete ${colors.pale}` : ''}`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3
            className={`text-base font-bold ${completed ? 'text-slate-500 line-through' : colors.text}`}
          >
            {day.title}
          </h3>
          {day.note && (
            <p className="mt-1 text-sm italic text-slate-500">{day.note}</p>
          )}
        </div>
        <span
          className={`w-fit border px-2 py-1 text-xs font-bold ${completed ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-white text-slate-600'}`}
        >
          {completedCount}/{day.tasks.length}
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {day.tasks.map((task) => (
          <TaskRow
            checked={checkedSet.has(task.id)}
            colors={colors}
            key={task.id}
            onToggle={() => onToggleTask(task.id)}
            task={task}
          />
        ))}
      </div>
    </article>
  );
}

function TaskRow({ checked, colors, onToggle, task }) {
  return (
    <label
      className={`task-row ${checked ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'}`}
    >
      <input
        checked={checked}
        className="sr-only"
        onChange={onToggle}
        type="checkbox"
      />
      <span
        className={`task-check ${checked ? colors.check : 'border-slate-300 bg-white'}`}
        aria-hidden
      >
        {checked && <Check className="h-3.5 w-3.5 text-white" />}
      </span>
      <span className="min-w-0 flex-1 text-sm leading-6 text-slate-700">
        <span className="font-bold text-slate-900">
          [{task.duration}] {task.kind}:{' '}
        </span>
        <span className={checked ? 'text-slate-500 line-through' : ''}>
          <InlineText text={task.text} />
        </span>
      </span>
      {task.href && (
        <a
          className={`inline-flex shrink-0 items-center gap-1 text-sm font-bold ${colors.link}`}
          href={task.href}
          onClick={(event) => event.stopPropagation()}
          rel="noreferrer"
          target="_blank"
        >
          <ExternalLink className="h-4 w-4" aria-hidden />
          Open
        </a>
      )}
    </label>
  );
}

function ProgressFooter({ summary }) {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-full max-w-xl -translate-x-1/2 px-6">
      <div className="border border-slate-700 bg-slate-950 p-4 text-white shadow-footer">
        <div className="flex items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase">
            Target: {roadmap.target}
          </span>
          <span className="text-xs font-bold text-emerald-300">
            {summary.percentage}%
          </span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded bg-slate-700">
          <div
            className="h-full bg-emerald-400 transition-all duration-500"
            style={{ width: `${summary.percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
