export function PanelHeader({
  overLine,
  title,
}: {
  overLine: string;
  title: string;
}) {
  return (
    <div className="border-b lg:pb-5 lg:mb-5">
      <p className="text-sm tracking-wide">{overLine}</p>
      <h2 className="lg:text-4xl text-2xl font-bold">{title}</h2>
    </div>
  );
}
