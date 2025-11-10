import { useState } from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaChevronDown } from "react-icons/fa";
import logo from "/src/assets/logo/logo.png";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const footerLinks = [
    {
      title: "Our Products",
      links: ["The Support Suite", "The Sales Suite", "Support", "Guide"],
    },
    {
      title: "Top Features",
      links: ["Ticketing System", "Knowledge Base", "Community Forums", "Help Desk Software"],
    },
    {
      title: "Resources",
      links: ["Product Support", "Request Demo", "Library", "Peoplepower Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Press", "Investors", "Events"],
    },
    {
      title: "Favourite Things",
      links: ["For Enterprise", "For Startups", "For Benchmark", "For Small Business"],
    },
  ];

  return (
    <footer
      className="relative w-full px-6 md:px-16 lg:px-24 py-16
      border-t border-[#D0D0D0]/60 dark:border-[#3D3D3D]/70
      bg-gradient-to-b from-[#F0F0F0] via-[#FAFAFA] to-[#F0F0F0]
      dark:from-[#1E1E1E] dark:via-[#2C2C2C] dark:to-[#1E1E1E]
      text-[#1E1E1E] dark:text-[#F1F1F1] transition-colors duration-500 overflow-hidden"
    >
      {/* Glow Accent */}
      <div
        className="absolute -top-20 right-10 w-64 h-64 
        bg-gradient-to-tr from-[#3A9BD9]/15 to-[#1DE9B6]/15 
        dark:from-[#3A9BD9]/10 dark:to-[#1DE9B6]/10 
        blur-[120px] rounded-full pointer-events-none"
      ></div>

      {/* Header: Logo + Socials */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Kimuyu TechWorks logo"
            className="w-10 h-10 object-contain opacity-90 drop-shadow-[0_0_10px_rgba(61,217,200,0.2)]"
          />
          <h2 className="text-lg font-semibold tracking-wide">Kimuyu TechWorks</h2>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-3 rounded-full bg-[#2A2A2A]/30 hover:bg-[#3A9BD9]/20 transition">
            <FaInstagram className="text-[#F1F1F1] w-4 h-4" />
          </a>
          <a href="#" className="p-3 rounded-full bg-[#2A2A2A]/30 hover:bg-[#3A9BD9]/20 transition">
            <FaFacebookF className="text-[#F1F1F1] w-4 h-4" />
          </a>
          <a href="#" className="p-3 rounded-full bg-[#2A2A2A]/30 hover:bg-[#3A9BD9]/20 transition">
            <FaTwitter className="text-[#F1F1F1] w-4 h-4" />
          </a>
          <a href="#" className="p-3 rounded-full bg-[#2A2A2A]/30 hover:bg-[#3A9BD9]/20 transition">
            <FaGithub className="text-[#F1F1F1] w-4 h-4" />
          </a>
        </div>
      </div>

      <hr className="border-[#3D3D3D]/30 mb-10" />

      {/* Columns with accordion on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {footerLinks.map((section, index) => (
          <div key={index} className="border-b border-transparent sm:border-none">
            {/* Mobile Accordion Header */}
            <button
              className="w-full flex items-center justify-between sm:justify-start text-left mb-3 sm:mb-4 font-semibold text-[#B5B5B5] sm:cursor-default"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              <FaChevronDown
                className={`w-3 h-3 sm:hidden transition-transform duration-300 ${
                  openSection === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Links */}
            <ul
              className={`overflow-hidden transition-all duration-300 space-y-2 text-[#CFCFCF]/90 text-sm md:text-base
              ${openSection === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"}`}
            >
              {section.links.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div
        className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
      >
        <p className="text-xs md:text-sm text-[#A0A0A0]">
          © 2025{" "}
          <span
            className="bg-gradient-to-r from-[#3A9BD9] via-[#1DE9B6] to-[#3A9BD9]
            bg-clip-text text-transparent font-semibold"
          >
            Kimuyu TechWorks
          </span>{" "}
          - All Rights Reserved
        </p>

        <a
          href="https://wa.me/254720648214"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-4 py-2 border rounded-full
          border-[#C0C0C0]/60 dark:border-[#3D3D3D]/70
          hover:border-transparent
          hover:bg-gradient-to-r hover:from-[#3A9BD9]/20 hover:to-[#1DE9B6]/20
          dark:hover:from-[#3A9BD9]/25 dark:hover:to-[#1DE9B6]/25
          transition-all duration-300 backdrop-blur-sm"
        >
          <FaWhatsapp className="text-[#3A9BD9] dark:text-[#1DE9B6] w-5 h-5" />
          <span className="text-sm md:text-base font-medium tracking-wide">
            +254 720 648 214
          </span>
        </a>
      </div>
    </footer>
  );
}
