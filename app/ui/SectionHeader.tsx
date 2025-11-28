export default function SectionHeader({
  title,
  subtitle,
  highlightedWord,
  children,
}: {
  title: string;
  subtitle: string;
  highlightedWord: string;
  children?: React.ReactElement;
}) {
  return (
    <div className="flex flex-col items-center mb-24">
      <p className="font-semibold text-paragraph mb-5">{subtitle}</p>
      <h2 className="font-bold text-3xl text-heading mb-3">
        {title} <span className="text-primary">{highlightedWord}</span>
      </h2>
      {children}
    </div>
  );
}
