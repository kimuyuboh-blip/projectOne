import { motion } from "framer-motion";
import sectionImg from "/src/assets/section.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-20 px-6 md:px-16 lg:px-24 
      bg-gradient-to-b from-[#F0F0F0] via-[#FAFAFA] to-[#F0F0F0] 
      dark:from-[#1E1E1E] dark:via-[#2C2C2C] dark:to-[#1E1E1E] 
      text-[#1E1E1E] dark:text-[#F1F1F1] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Text */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold 
            bg-gradient-to-r from-cyan-300 via-blue-400 to-teal-400 
            dark:from-slate-100 dark:via-gray-400 dark:to-slate-200 
            bg-clip-text text-transparent tracking-tight">
            About Us
          </h2>

          <p className="text-[#505050] dark:text-[#B5B5B5] text-lg leading-relaxed text-justify">
            Kimuyu TechWorks was founded to deliver device repair solutions with transparency 
            and engineering precision — bridging the gap between trust and technology at 
            pocket-conscious rates. Every fix follows a documented diagnostic framework 
            designed for consistency, reliability, and repeatable quality.
          </p>

          <p className="text-cyan-400/90 dark:text-teal-400/80 italic">
            “Where craftsmanship meets engineering discipline.”
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-sm lg:max-w-md rounded-3xl overflow-hidden 
            shadow-2xl border border-gray-800/60 dark:border-gray-700/50 
            bg-gradient-to-br from-gray-900/80 via-gray-950/90 to-black/95 
            dark:from-gray-900/80 dark:via-gray-950/90 dark:to-black/95 
            group transform transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={sectionImg}
              alt="An open Samsung s10 phone."
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
           
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -top-24 left-8 w-56 h-56 bg-cyan-400/10 blur-[90px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-12 w-64 h-64 bg-teal-400/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
}
