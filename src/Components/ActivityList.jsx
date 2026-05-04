import { CheckCircle2, RotateCcw } from 'lucide-react';

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

export default ActivityList;
