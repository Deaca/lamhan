import { FadeInSection } from "@/components/fade-in-section"

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <FadeInSection>
        <h2 className="text-4xl font-bold text-custom-dark-gray mb-4">{title}</h2>
      </FadeInSection>

      {subtitle && (
        <FadeInSection delay={0.2}>
          <p className="text-lg text-custom-dark-gray/80 max-w-2xl mx-auto">{subtitle}</p>
        </FadeInSection>
      )}
    </div>
  )
}

