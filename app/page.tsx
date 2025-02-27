import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedItems from "@/components/featured-items"
import OnlineOrdering from "@/components/online-ordering"
import AboutUs from "@/components/about-us"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-custom-white">
      <Navbar />
      <Hero />
      <FeaturedItems />
      <OnlineOrdering />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

