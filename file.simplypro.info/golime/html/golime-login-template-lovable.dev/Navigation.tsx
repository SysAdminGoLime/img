
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                src="https://shop.golime.com/cdn/shop/files/golime_logo_x180.png"
                alt="Golime"
                className="h-8 w-auto"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/about" className="text-[#222222] hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="/features" className="text-[#222222] hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="/pricing" className="text-[#222222] hover:text-primary transition-colors font-medium">
              Pricing
            </a>
            <a 
              href="/login" 
              className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors font-medium"
            >
              Login
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
            >
              <div className="flex flex-col py-4 px-4 space-y-4">
                <a href="/about" className="text-[#222222] hover:text-primary transition-colors font-medium">
                  About
                </a>
                <a href="/features" className="text-[#222222] hover:text-primary transition-colors font-medium">
                  Features
                </a>
                <a href="/pricing" className="text-[#222222] hover:text-primary transition-colors font-medium">
                  Pricing
                </a>
                <a 
                  href="/login" 
                  className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors text-center font-medium"
                >
                  Login
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
