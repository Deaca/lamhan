import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const deliveryPlatforms = [
  {
    name: "UberEats",
    logo: "/placeholder.svg?height=100&width=100",
    link: "#",
  },
  {
    name: "DoorDash",
    logo: "/placeholder.svg?height=100&width=100",
    link: "#",
  },
  {
    name: "Ritual",
    logo: "/placeholder.svg?height=100&width=100",
    link: "#",
  },
]

export default function OnlineOrdering() {
  return (
    <section className="py-20 bg-custom-white" id="order">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-custom-dark-gray mb-4">Order Online</h2>
          <p className="text-lg text-custom-dark-gray/80 max-w-2xl mx-auto">
            Enjoy our delicious Vietnamese cuisine from the comfort of your home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deliveryPlatforms.map((platform, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <img src={platform.logo || "/placeholder.svg"} alt={platform.name} className="w-24 h-24 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-custom-dark-gray mb-4">{platform.name}</h3>
              <Button asChild className="w-full bg-custom-orange hover:bg-custom-orange-dark text-custom-white">
                <a href={platform.link} target="_blank" rel="noopener noreferrer">
                  Order on {platform.name}
                </a>
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-custom-yellow/20 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-custom-dark-gray mb-4">Want to pick up your order?</h3>
          <p className="text-custom-dark-gray/80 mb-6">Call us directly to place your takeout order</p>
          <Button size="lg" className="bg-custom-blue hover:bg-blue-700 text-custom-white">
            Call (123) 456-7890
          </Button>
        </div>
      </div>
    </section>
  )
}

