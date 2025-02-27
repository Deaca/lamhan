import { Button } from "@/components/ui/button"
import { FadeInSection } from "@/components/fade-in-section"

export default function AboutUs() {
  return (
    <section className="py-20 bg-custom-light-gray" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <FadeInSection>
              <h2 className="text-4xl font-bold text-custom-dark-gray">Our Story</h2>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-custom-dark-gray/80">
                Founded with a passion for authentic Vietnamese street food, we bring the vibrant flavors of Vietnam to
                your neighborhood. Our bánh mì combines traditional Vietnamese ingredients with freshly baked baguettes,
                creating the perfect fusion of East and West.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <p className="text-custom-dark-gray/80">
                Every morning, our bakers prepare fresh baguettes, while our chefs marinate meats and prepare pickled
                vegetables using family recipes. Our bao buns are steamed throughout the day, ensuring each one is soft
                and fluffy, perfect for our flavorful fillings.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div>
                  <h3 className="text-2xl font-bold text-custom-orange mb-2">1000+</h3>
                  <p className="text-custom-dark-gray">Bánh Mì Served Weekly</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-custom-orange mb-2">100%</h3>
                  <p className="text-custom-dark-gray">Fresh Daily</p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <Button className="bg-custom-orange hover:bg-custom-orange-dark text-custom-white">
                Learn More About Us
              </Button>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FadeInSection delay={0.3}>
              <div className="space-y-4">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Fresh baked baguettes"
                  className="rounded-lg w-full h-48 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Banh mi preparation"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="space-y-4 pt-8">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Steaming bao buns"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Fresh ingredients"
                  className="rounded-lg w-full h-48 object-cover"
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}

