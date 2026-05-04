function InlineText({ text }) {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.78rem] font-semibold text-slate-900"
          key={`${part}-${index}`}
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export default InlineText;
