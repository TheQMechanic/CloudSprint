import { ChevronDown } from 'lucide-react';
import DayBox from './DayBox';
import ResourceLine from './ResourceLine';

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

export default WeekPanel;
