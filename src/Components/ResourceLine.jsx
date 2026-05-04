function ResourceLine({ resources }) {
  return (
    <p className="text-xs font-bold uppercase text-slate-500">
      Resources:{' '}
      {resources.map((resource, index) => (
        <span key={resource.href}>
          {index > 0 && <span className="text-slate-300"> | </span>}
          <a
            className="text-indigo-700 hover:text-indigo-950 hover:underline"
            href={resource.href}
            rel="noreferrer"
            target="_blank"
          >
            {resource.label}
          </a>
        </span>
      ))}
    </p>
  );
}

export default ResourceLine;
