import { motion } from "framer-motion";
import sectionImg from "/src/assets/section2.jpeg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left: Text */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-100 via-gray-400 to-slate-200 bg-clip-text text-transparent tracking-tight">
            About Us
          </h2>

          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            Kimuyu TechWorks was founded to deliver device repair solutions with transparency and engineering discipline,
            closing the trust gap at pocket-friendly rates. We prioritize measurable results and documented process over guesswork.
          </p>

          <h3 className="text-xl font-semibold">Founder Statement</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Behind Kimuyu TechWorks is <strong>Carlos Kimuyu</strong>, a certified phone and laptop technician with a background
            in electronics, systems repair, and programming. He applies systems thinking and disciplined methods to every repair.
          </p>

          <h3 className="text-xl font-semibold">Core Philosophy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.div
              className="group bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-lg font-extrabold">Precision</div>
              <div className="mt-2 text-sm text-gray-400">
                Each repair is treated as an engineering task — measurable, traceable, and verifiable.
              </div>
            </motion.div>

            <motion.div
              className="group bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              viewport={{ once: true }}
            >
              <div className="text-lg font-extrabold">Integrity</div>
              <div className="mt-2 text-sm text-gray-400">
                No speculative fixes, no unnecessary replacements — recommendations backed by diagnostics.
              </div>
            </motion.div>

            <motion.div
              className="group bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-4 transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              viewport={{ once: true }}
            >
              <div className="text-lg font-extrabold">Restoration</div>
              <div className="mt-2 text-sm text-gray-400">
                Objective: restore full system functionality and extend performance lifespan.
              </div>
            </motion.div>
          </div>

          <h3 className="text-xl font-semibold mt-1">Mission Statement</h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            To redefine local repair standards by delivering professional-grade service with transparency, structure,
            and consistent technical excellence.
          </p>

          <p className="text-gray-400 italic">“Where craftsmanship meets engineering discipline.”</p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-sm lg:max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-800/60 transform transition-transform duration-500 hover:scale-102">
            <img
              src={sectionImg}
              alt="An open Samsung A14 phone."
              className="w-full h-full object-cover block"
            />
            <div className="p-4 bg-gradient-to-t from-black/50 to-transparent text-gray-200">
              <div className="text-sm font-semibold">Device Focus</div>
              <div className="text-xs text-gray-400 mt-1">Component-level rework & diagnostics</div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute -top-24 left-8 w-56 h-56 bg-slate-400/6 blur-[80px] rounded-full pointer-events-none"></div>
    </section>
  );
}
