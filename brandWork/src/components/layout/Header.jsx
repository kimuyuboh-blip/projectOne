import React from "react";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
  const onScroll = () => {
    if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          setShowBackground(y < lastY.current && y > 30);
          lastY.current = y;
          ticking.current = false;
  });
  }
};
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showBackground
          ? "bg-white/80 dark:bg-[#1E1E1E]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-xl font-semibold tracking-wide text-[#3A9BD9] dark:text-[#1DE9B6] h-10 w-auto transition-transform duration-300 group-hover:scale-105">
            Kimuyu TechWorks
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-[#3A9BD9] dark:text-[#1DE9B6]">
          {["Home", "Services", "About Us", "Contact"].map((item, index) => {
            const href =
              item === "Home"
                ? "#hero"
                : item === "Services"
                ? "#features"
                : item === "About Us"
                ? "#about"
                : "#footer";
            return (
              <a key={index} href={href} className="relative group">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#3A9BD9] dark:bg-[#1DE9B6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#3A9BD9] dark:text-[#1DE9B6]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white/95 dark:bg-[#2C2C2C]/95 backdrop-blur-lg shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-start p-6 space-y-6 font-semibold text-lg bg-gradient-to-r from-[#1DE9B6] via-[#3A9BD9] to-[#1DE9B6]">
          <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#footer" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default React.memo(Header);
