import { motion } from "framer-motion";
import heroBg from "/src/assets/logo/logo.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 backdrop-blur-sm"></div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 py-20 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-100 via-gray-300 to-slate-100 bg-clip-text text-transparent drop-shadow-lg">
          Fix it Fast.
        </h1>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-slate-100 via-gray-300 to-slate-100 bg-clip-text text-transparent drop-shadow-lg">
          Fix it Right.
        </h1>


        <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed">
          Expert Techs. Faster Fixes. Longer Lifespans. Quality repairs.
        </p>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 15px rgba(192,192,192,0.6)",
          }}
          whileTap={{ scale: 0.96 }}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white font-semibold text-lg tracking-wide transition-all duration-300 border border-gray-400/30 hover:from-gray-700 hover:to-gray-800"
        >
          Book Repair
        </motion.button>
      </motion.div>

      {/* Feature Grid Fixed at Bottom */}
      <motion.div
        className="absolute bottom-10 w-full max-w-5xl px-6 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6 justify-center"
          role="list"
          aria-label="Service statistics"
        >
          {[
            { title: "Tech", subtitle: "Pros" },
            { title: "Free", subtitle: "Diagnostics" },
            { title: "Pocket", subtitle: "Friendly" },
            { title: "Trusted", subtitle: "By Thousands" },
            { title: "Same Day", subtitle: "Repair" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="text-xl md:text-2xl font-extrabold text-white">
                {item.title}
              </div>
              <div className="mt-1 text-xs text-gray-300 uppercase tracking-wide">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
