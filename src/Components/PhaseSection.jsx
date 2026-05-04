import { colorClasses } from './constants';
import ResourceLine from './ResourceLine';
import WeekPanel from './WeekPanel';

function PhaseSection({ checkedSet, onToggleTask, phase }) {
  const colors = colorClasses[phase.color];

  return (
    <section className="overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div
        className={`${colors.header} flex flex-col gap-4 p-6 text-white md:flex-row md:items-center md:justify-between`}
      >
        <div>
          <p className={`text-lg font-bold italic ${colors.accentText}`}>
            {phase.label}
          </p>
          <h2 className="text-2xl font-bold">{phase.title}</h2>
        </div>
        <span className="w-fit border border-white/20 bg-white/10 px-3 py-1 text-sm font-bold">
          {phase.range}
        </span>
      </div>
      <div className="space-y-4 p-5">
        {phase.resources && <ResourceLine resources={phase.resources} />}
        {phase.weeks.map((week) => (
          <WeekPanel
            checkedSet={checkedSet}
            colors={colors}
            key={week.id}
            onToggleTask={onToggleTask}
            week={week}
          />
        ))}
      </div>
    </section>
  );
}

export default PhaseSection;
