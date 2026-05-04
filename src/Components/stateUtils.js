import {
  DEFAULT_GOALS,
  DEFAULT_SETTINGS,
  EMPTY_APP_STATE,
  LOCAL_STATE_KEY,
  MAX_BATCH_ACTIVITY,
  MAX_BATCH_NOTES,
} from './constants';
import { ROADMAP_ID } from '../data/roadmap';

export function unique(values) {
  return [...new Set(values.filter(Boolean))];
}

export function normalizeState(value) {
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

export function loadLocalState() {
  try {
    const rawState = window.localStorage.getItem(LOCAL_STATE_KEY);
    return normalizeState(rawState ? JSON.parse(rawState) : EMPTY_APP_STATE);
  } catch {
    return normalizeState(EMPTY_APP_STATE);
  }
}

export function saveLocalState(state) {
  window.localStorage.setItem(
    LOCAL_STATE_KEY,
    JSON.stringify({ ...state, updatedAt: new Date().toISOString() }),
  );
}

function goalsChangedLocally(localGoals) {
  return JSON.stringify(localGoals) !== JSON.stringify(DEFAULT_GOALS);
}

export function mergeAppState(localState, cloudState) {
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

export async function loadCloudState(user, db) {
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

export async function saveCloudState(user, state, summary, db) {
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

export function makeActivityEvent(task, completed) {
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
