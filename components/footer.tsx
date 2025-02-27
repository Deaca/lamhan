import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-custom-dark-gray text-custom-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Phở Delights</h3>
            <p className="text-custom-white/80">Authentic Vietnamese cuisine in the heart of Vancouver.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-custom-white/80 hover:text-custom-orange">
                  Menu
                </a>
              </li>
              <li>
                <a href="#order" className="text-custom-white/80 hover:text-custom-orange">
                  Order Online
                </a>
              </li>
              <li>
                <a href="#about" className="text-custom-white/80 hover:text-custom-orange">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-custom-white/80 hover:text-custom-orange">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <ul className="space-y-2 text-custom-white/80">
              <li>Monday - Friday</li>
              <li>11:00 AM - 9:00 PM</li>
              <li>Saturday - Sunday</li>
              <li>11:00 AM - 10:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-custom-white/80 hover:text-custom-orange" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-custom-white/80 hover:text-custom-orange" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-custom-white/80 hover:text-custom-orange" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-custom-white/20 mt-8 pt-8 text-center text-custom-white/60">
          <p>© 2025 Phở Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

