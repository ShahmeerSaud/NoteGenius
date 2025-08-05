import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/90 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            <a href="#" className="hover:text-indigo-600 transition-colors duration-300">
              Alex Johnson
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">
              Skills
            </a>
            <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium">
              Experience
            </a>
            <Button
              asChild
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg hover:shadow-xl"
            >
              <a href="#contact">Contact</a>
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-lg p-2"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100">
          <div className="px-6 py-4 space-y-3">
            <a 
              href="#about" 
              className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
              onClick={closeMobileMenu}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
              onClick={closeMobileMenu}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
              onClick={closeMobileMenu}
            >
              Experience
            </a>
            <a 
              href="#contact" 
              className="block py-2 text-indigo-600 font-semibold"
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
