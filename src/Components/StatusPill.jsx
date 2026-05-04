import { createElement } from 'react';

function StatusPill({ icon, label }) {
  return (
    <span className="inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
      {createElement(icon, { className: 'h-4 w-4', 'aria-hidden': true })}
      {label}
    </span>
  );
}

export default StatusPill;
