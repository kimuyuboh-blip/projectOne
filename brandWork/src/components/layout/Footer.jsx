import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="relative w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-8 px-6 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 via-silver-400 to-violet-600"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      {/* Left section: logo + text */}
      <div className="flex items-center gap-4 group">
        <motion.img
          src="./src/assets/logo/logo.png"
          alt="Kimuyu TechWorks logo"
          className="h-12 w-auto transition-transform duration-500 group-hover:scale-110"
          whileHover={{ filter: "drop-shadow(0 0 10px #C0C0C0)" }}
        />
        <div>
          <p className="text-sm md:text-base font-semibold text-gray-100 tracking-wide">
            Kimuyu TechWorks
          </p>
          <p className="text-xs text-gray-400 uppercase tracking-wider">
            Precision. Integrity. Restoration.
          </p>
        </div>
      </div>

      {/* Right section: WhatsApp + copyright */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-6 md:mt-0">
        <motion.a
          href="https://wa.me/254720648214"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-600/10 hover:bg-green-600/20 px-4 py-2 rounded-full transition duration-300 border border-green-600/30"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 12px rgba(0,255,0,0.5)",
          }}
        >
          <FaWhatsapp className="text-green-500 text-xl" />
          <span className="text-sm font-medium text-gray-200">Chat on WhatsApp</span>
        </motion.a>

        <p className="text-xs text-gray-500 text-center md:text-right">
          © 2024 Kimuyu TechWorks. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
