import { useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaChevronDown,
} from "react-icons/fa";

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
      links: [
        "Ticketing System",
        "Knowledge Base",
        "Community Forums",
        "Help Desk Software",
      ],
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
      links: [
        "For Enterprise",
        "For Startups",
        "For Benchmark",
        "For Small Business",
      ],
    },
  ];

  return (
    <footer
      id="footer"
      className="relative w-full px-6 md:px-16 lg:px-24 py-16
      bg-[#F8F9FB] text-[#3A3A3A] 
      dark:bg-[#1E1E1E] dark:text-[#B5B5B5]
      border-t border-[#D0D0D0]/60 dark:border-[#3D3D3D]/70
      transition-colors duration-500"
    >
      {/* Header: Logo + Socials */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 group">
        <div className="flex items-center gap-2 transition-transform duration-300 group-hover:scale-105">
          <h2 className="text-xl font-semibold tracking-wide text-[#3A9BD9] dark:text-[#1DE9B6]">
            Kimuyu TechWorks
          </h2>
        </div>

        <div className="flex items-center gap-4">
          {[
            {
              icon: <FaWhatsapp />,
              href: "https://wa.me/254720648214",
            },
            { icon: <FaInstagram />, href: "#" },
            {
              icon: <FaFacebookF />,
              href: "https://web.facebook.com/carlos.kimuyu.9",
            },
            { icon: <FaTwitter />, href: "https://twitter.com/@KimuyuCarlos" },
            {
              icon: <FaGithub />,
              href: "https://github.com/kimuyuboh-blip",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="p-3 rounded-full bg-[#E5E5E5]/60 dark:bg-[#2A2A2A]/70
              hover:bg-[#3A9BD9]/80 dark:hover:bg-[#1DE9B6]/70 
              transition duration-300"
            >
              <div className="text-[#1E1E1E] dark:text-[#F1F1F1] w-4 h-4">
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </div>

      <hr className="border-[#D0D0D0]/60 dark:border-[#3D3D3D]/30 mb-10" />

      {/* Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {footerLinks.map((section, index) => (
          <div key={index} className="border-b border-transparent sm:border-none">
            {/* Accordion Header */}
            <button
              className="w-full flex items-center justify-between sm:justify-start text-left mb-3 sm:mb-4 
              font-semibold text-[#3A3A3A] dark:text-[#B5B5B5] sm:cursor-default"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              <FaChevronDown
                className={`w-3 h-3 sm:hidden transition-transform duration-300
                text-[#3A3A3A] dark:text-[#B5B5B5]
                ${openSection === index ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {/* Links */}
            <ul
              className={`text-left space-y-2 text-[#3A3A3A]/90 dark:text-[#B5B5B5]/90 text-sm md:text-base
              ${openSection === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"}
              transition-all duration-300 overflow-hidden`}
            >
              {section.links.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-[#3A9BD9] dark:hover:text-[#1DE9B6] cursor-pointer transition-colors duration-300"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
        <p className="text-xs md:text-sm text-[#3A3A3A]/90 dark:text-[#B5B5B5]/90">
          © 2025{" "}
          <span className="bg-gradient-to-r from-[#3A9BD9] via-[#1DE9B6] to-[#3A9BD9] bg-clip-text text-transparent font-semibold">
            Kimuyu TechWorks
          </span>{" "}
          - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
