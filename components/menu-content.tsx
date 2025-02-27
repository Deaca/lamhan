"use client"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FadeInSection } from "@/components/fade-in-section"
import { Flame, Leaf } from "lucide-react"

const menuCategories = [
  {
    id: "banh-mi",
    name: "Bánh Mì",
    description: "Fresh-baked Vietnamese sandwiches with crispy baguette",
    items: [
      {
        id: 1,
        name: "Bánh Mì Thịt Nguội",
        price: 9.99,
        description: "Classic cold cuts with pâté, pickled vegetables, cilantro, and jalapeños",
        image: "/placeholder.svg?height=300&width=400",
        spicy: true,
      },
      {
        id: 2,
        name: "Bánh Mì Gà Nướng",
        price: 9.99,
        description: "Grilled lemongrass chicken with pickled vegetables and fresh herbs",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 3,
        name: "Bánh Mì Chay",
        price: 9.49,
        description: "Vegetarian option with tofu, mushrooms, and pickled vegetables",
        image: "/placeholder.svg?height=300&width=400",
        vegetarian: true,
      },
      {
        id: 4,
        name: "Bánh Mì Xíu Mại",
        price: 10.49,
        description: "Vietnamese meatballs with special sauce and fresh vegetables",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "bao",
    name: "Bao",
    description: "Soft and fluffy steamed buns with savory fillings",
    items: [
      {
        id: 5,
        name: "Pork Belly Bao",
        price: 6.99,
        description: "Braised pork belly, pickled mustard greens, crushed peanuts",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 6,
        name: "Crispy Chicken Bao",
        price: 6.99,
        description: "Crispy fried chicken, sriracha mayo, pickled daikon",
        image: "/placeholder.svg?height=300&width=400",
        spicy: true,
      },
      {
        id: 7,
        name: "Mushroom Bao",
        price: 6.49,
        description: "Soy glazed mushrooms, crispy shallots, green onions",
        image: "/placeholder.svg?height=300&width=400",
        vegetarian: true,
      },
      {
        id: 8,
        name: "Five Spice Duck Bao",
        price: 7.49,
        description: "Five spice duck, hoisin sauce, cucumber",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
  {
    id: "vermicelli",
    name: "Vermicelli Bowls",
    description: "Fresh rice noodles with grilled toppings and vegetables",
    items: [
      {
        id: 9,
        name: "Bún Thịt Nướng",
        price: 13.99,
        description: "Grilled pork, spring rolls, fresh herbs, fish sauce",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 10,
        name: "Bún Gà Nướng",
        price: 13.99,
        description: "Grilled lemongrass chicken, fresh vegetables, peanuts",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        id: 11,
        name: "Bún Chay",
        price: 12.99,
        description: "Lemongrass tofu, vegetable spring rolls, mushrooms",
        image: "/placeholder.svg?height=300&width=400",
        vegetarian: true,
      },
      {
        id: 12,
        name: "Bún Tôm Nướng",
        price: 14.99,
        description: "Grilled shrimp, fresh herbs, fish sauce, crushed peanuts",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
  },
]

export default function MenuContent() {
  return (
    <Tabs defaultValue="banh-mi" className="w-full">
      <FadeInSection delay={0.2}>
        <TabsList className="w-full justify-center mb-8 bg-custom-white">
          {menuCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-lg">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </FadeInSection>

      {menuCategories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          <FadeInSection delay={0.1}>
            <p className="text-center text-custom-dark-gray/80 mb-8 max-w-2xl mx-auto">{category.description}</p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {category.items.map((item, index) => (
              <FadeInSection key={index} delay={0.1 * index}>
                <Card className="flex overflow-hidden h-[200px] bg-custom-white">
                  <div className="w-1/3 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-custom-dark-gray">{item.name}</h3>
                          <div className="flex gap-1">
                            {item.vegetarian && <Leaf className="h-4 w-4 text-green-500" />}
                            {item.spicy && <Flame className="h-4 w-4 text-red-500" />}
                          </div>
                        </div>
                        <span className="font-bold text-custom-orange whitespace-nowrap">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="text-sm text-custom-dark-gray/80 line-clamp-3">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

