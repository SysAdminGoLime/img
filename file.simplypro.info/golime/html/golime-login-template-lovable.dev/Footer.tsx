
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src="https://shop.golime.com/cdn/shop/files/golime_logo_x180.png"
              alt="Golime"
              className="h-8 w-auto"
            />
            <p className="text-sm">
              Golime - Your trusted partner in digital solutions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/features" className="text-sm hover:text-primary transition-colors">Features</a></li>
              <li><a href="/pricing" className="text-sm hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="/contact" className="text-sm hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/cookies" className="text-sm hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-sm text-center">
            © {new Date().getFullYear()} Golime. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
