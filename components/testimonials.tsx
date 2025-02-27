import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { FadeInSection } from "@/components/fade-in-section"
import { SectionHeader } from "@/components/section-header"

// This would normally come from the Google Reviews API
const reviews = [
  {
    id: 1,
    author: "John D.",
    rating: 5,
    text: "Best phở in town! The broth is incredibly flavorful and the service is excellent.",
    date: "2 days ago",
  },
  {
    id: 2,
    author: "Sarah M.",
    rating: 5,
    text: "Authentic Vietnamese cuisine. The spring rolls are amazing and the phở is perfect for cold days.",
    date: "1 week ago",
  },
  {
    id: 3,
    author: "Mike R.",
    rating: 4,
    text: "Great food and friendly staff. The portions are generous and prices are reasonable.",
    date: "2 weeks ago",
  },
]

export default function Testimonials() {
  return (
    <FadeInSection>
      <section className="py-20 bg-custom-white" id="testimonials">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="What Our Customers Say"
            subtitle="Don't just take our word for it - hear what our valued customers have to say"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-custom-yellow fill-custom-yellow" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-custom-dark-gray mb-4">{review.text}</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-custom-dark-gray">{review.author}</span>
                  <span className="text-sm text-custom-dark-gray/60">{review.date}</span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="text-custom-blue hover:text-custom-orange transition-colors">
              See more reviews on Google
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}

