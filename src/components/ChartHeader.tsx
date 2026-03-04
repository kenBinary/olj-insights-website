export function ChartHeader({
  overLine,
  title,
  description,
}: {
  overLine: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-4">
      <p className="text-xs uppercase tracking-widest mb-1">{overLine}</p>
      <h4 className="text-xl font-semibold mb-1">{title}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
