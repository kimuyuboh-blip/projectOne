import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="flex items-center gap-2 group"
        >
          <img
            src="./src/assets/logo/logo.png"
            alt="Logo of Kimuyu TechWorks."
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xl font-semibold tracking-wide text-blue-600">
            Kimuyu TechWorks
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <a href="#hero" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="relative group">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="relative group">
            About Us
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white/95 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start p-6 space-y-6 text-gray-800 font-semibold text-lg">
          <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

