interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-semibold text-[#2C2C2C]">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-lg text-zinc-500">{subtitle}</p>
      )}
    </div>
  );
}
