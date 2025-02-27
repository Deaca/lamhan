import { FadeInSection } from "@/components/fade-in-section"
import { SectionHeader } from "@/components/section-header"
import MenuContent from "@/components/menu-content"

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-custom-light-gray pt-20">
      <div className="container mx-auto px-4 py-12">
        <FadeInSection>
          <SectionHeader title="Our Menu" subtitle="Fresh ingredients, authentic flavors, made with love" />
        </FadeInSection>
        <MenuContent />
      </div>
    </main>
  )
}

