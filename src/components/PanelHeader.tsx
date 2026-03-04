export function PanelHeader({
  overLine,
  title,
}: {
  overLine: string;
  title: string;
}) {
  return (
    <div className="border-b pb-5 mb-5">
      <p className="text-sm tracking-wide">{overLine}</p>
      <h2 className="text-4xl font-bold">{title}</h2>
    </div>
  );
}
