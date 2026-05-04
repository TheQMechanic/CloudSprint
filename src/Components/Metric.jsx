import { createElement } from 'react';

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

export default Metric;
