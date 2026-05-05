/** Maximum notes + activity events to write per batch (Firestore limit is 500). */
export const MAX_BATCH_NOTES = 200;
export const MAX_BATCH_ACTIVITY = 25;

export const LOCAL_STATE_KEY = 'career-tracker-state-v1';

export const DEFAULT_GOALS = {
  targetRole: 'Cloud Support Associate',
  certificationDate: '',
  dailyStudyGoal: '60',
};

export const DEFAULT_SETTINGS = {
  localOnly: false,
};

export const EMPTY_APP_STATE = {
  checkedTaskIds: [],
  notes: {},
  goals: DEFAULT_GOALS,
  settings: DEFAULT_SETTINGS,
  activity: [],
  updatedAt: null,
};

export const colorClasses = {
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
  violet: {
    header: 'bg-violet-950',
    accentText: 'text-violet-300',
    border: 'border-violet-500',
    pale: 'bg-violet-50',
    text: 'text-violet-900',
    link: 'text-violet-700 hover:text-violet-900',
    check: 'border-violet-500 bg-violet-600',
  },
  amber: {
    header: 'bg-amber-950',
    accentText: 'text-amber-300',
    border: 'border-amber-500',
    pale: 'bg-amber-50',
    text: 'text-amber-900',
    link: 'text-amber-700 hover:text-amber-900',
    check: 'border-amber-500 bg-amber-600',
  },
  gold: {
    header: 'bg-yellow-950',
    accentText: 'text-yellow-300',
    border: 'border-yellow-500',
    pale: 'bg-yellow-50',
    text: 'text-yellow-900',
    link: 'text-yellow-700 hover:text-yellow-900',
    check: 'border-yellow-500 bg-yellow-600',
  },
};

export const strategyColorClasses = {
  indigo: 'border-indigo-500 text-indigo-700',
  emerald: 'border-emerald-500 text-emerald-700',
  orange: 'border-orange-500 text-orange-700',
  violet: 'border-violet-500 text-violet-700',
  amber: 'border-amber-500 text-amber-700',
  gold: 'border-yellow-500 text-yellow-700',
};
