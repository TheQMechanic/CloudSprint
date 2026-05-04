import { roadmap } from '../data/roadmap';

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

export default ProgressFooter;
