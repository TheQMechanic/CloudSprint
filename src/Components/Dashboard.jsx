import { createElement, useState } from 'react';
import {
  CheckCircle2,
  Cloud,
  CloudOff,
  Gauge,
  LogIn,
  LogOut,
  NotebookPen,
  Save,
  Settings,
  Target,
  Trash2,
  User,
} from 'lucide-react';
import { firebaseReady } from '../firebase';
import ActivityList from './ActivityList';
import Metric from './Metric';
import StatusPill from './StatusPill';

function Dashboard({
  activeNoteDayId,
  allDays,
  authLoading,
  cloudStatus,
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

export default Dashboard;
