import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-custom-dark-gray/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center text-custom-white">
        <FadeInSection>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Bánh Mì & More</h1>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
            Experience the perfect blend of Vietnamese and French cuisine. Fresh baked banh mi, steamed bao, and
            flavorful vermicelli bowls.
          </p>
        </FadeInSection>

        <FadeInSection delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-custom-orange hover:bg-custom-orange-dark text-custom-white">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-custom-white text-custom-white hover:bg-custom-white hover:text-custom-dark-gray"
            >
              View Menu
            </Button>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

