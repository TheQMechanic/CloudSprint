import { Check, ExternalLink } from 'lucide-react';
import InlineText from './InlineText';

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

export default TaskRow;
