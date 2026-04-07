interface SectionTitleProps {
  title: string
  subtitle?: string
  subtitleClassName?: string
}

export default function SectionTitle({ title, subtitle, subtitleClassName }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${subtitleClassName ?? "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
