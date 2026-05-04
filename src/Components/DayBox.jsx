import TaskRow from './TaskRow';

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

export default DayBox;
