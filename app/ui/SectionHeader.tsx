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
    <div className="flex flex-col items-center mb-12 md:mb-16 lg:mb-24">
      <p className="font-semibold text-paragraph mb-3 md:mb-4 lg:mb-5 text-sm md:text-base">{title}</p>
      <h2 className="font-bold text-2xl md:text-3xl text-heading mb-2 md:mb-3 text-center px-4">
        {subtitle} <span className="text-primary">{highlightedWord}</span>
      </h2>
      {children}
    </div>
  );
}
