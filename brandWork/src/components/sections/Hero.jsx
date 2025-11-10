import { motion } from "framer-motion";
import heroBg from "/src/assets/background.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen w-full bg-cover bg-center bg-no-repeat transition-colors duration-500 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundAttachment: "fixed",
      }}
    >

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Headings */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#3A9BD9] via-[#1DE9B6] to-[#3A9BD9] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(29,233,182,0.3)]">
          Fix it Fast.
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-[#1DE9B6] via-[#3A9BD9] to-[#1DE9B6] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(58,155,217,0.3)]">
          Fix it Right.
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 dark:text-[#F1F1F1]/80 text-xl md:text-2xl font-semibold mb-10 leading-relaxed">
          Expert Techs. Faster Fixes. Longer Lifespans. Quality repairs.
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 20px rgba(29,233,182,0.5)",
          }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-4 rounded-full font-semibold text-lg tracking-wide transition-all duration-300
            bg-gradient-to-r from-[#3A9BD9] to-[#1DE9B6] text-[#1E1E1E]
            dark:from-[#00B8C9] dark:to-[#1DE9B6]
            hover:from-[#1DE9B6] hover:to-[#3A9BD9]
            border border-white/20 shadow-md"
        >
          Book Repair
        </motion.button>
      </motion.div>

      {/* Feature Grid - Single Box with Separators */}
      <motion.div
        className="absolute bottom-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div
          className="bg-white/10 dark:bg-[#2C2C2C]/60 backdrop-blur-md rounded-2xl border border-white/20 dark:border-[#3D3D3D] shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          role="list"
          aria-label="Service statistics"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20 dark:divide-[#3D3D3D]">
            {[
              { title: "9", subtitle: "Year Experince" },
              { title: "0$", subtitle: "Free Diagnostics" },
              { title: "1000+", subtitle: "Devices repaired" },
              { title: "24H", subtitle: "Same Day Repair" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 text-center hover:bg-white/5 dark:hover:bg-[#3D3D3D]/40 transition-colors duration-300"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-[#3A9BD9] dark:text-[#1DE9B6]">
                  {item.title}
                </div>
                <div className="mt-2 text-xs md:text-sm text-gray-300 dark:text-[#B5B5B5] uppercase tracking-wide">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className="section-glow section-glow-blue -bottom-32 left-10"></div>
      <div className="section-glow section-glow-blue top-20 right-20"></div>

    </section>
  );
}

export default Hero;
