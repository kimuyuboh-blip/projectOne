import { motion } from "framer-motion";
import featureImg from "../../assets/feature.jpg";

function Feature() {
  return (
    <section
      id="features"
      className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Image Section */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="relative group">
          <img
            src={featureImg}
            alt="Glowing advert of Mobile Phone Repair"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover border border-gray-800/50 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-gray-700/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full md:w-1/2 text-left space-y-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-100 via-gray-400 to-slate-200 bg-clip-text text-transparent tracking-tight">
          Our Services
        </h2>

        <div className="space-y-6">
          {/* Phone Repair */}
          <div className="border-l-4 border-gray-500 pl-4 hover:border-slate-300 transition-colors duration-300">
            <h3 className="text-xl md:text-2xl font-semibold">Phone Repair</h3>
            <p className="text-gray-300 mt-2">
              We Fix Screens, Batteries, Charging Ports, and Slow Performance. Expert Solutions for All Mobile Issues
            </p>
          </div>

          {/* Laptop Repair */}
          <div className="border-l-4 border-gray-500 pl-4 hover:border-slate-300 transition-colors duration-300">
            <h3 className="text-xl md:text-2xl font-semibold">Laptop Repair</h3>
            <p className="text-gray-300 mt-2">
              Complete Laptop Care: Hardware Repairs, System Fixes, and Data Recovery. We bring your laptop back to life.
            </p>
          </div>

          {/* Diagnostics & Optimization */}
          <div className="border-l-4 border-gray-500 pl-4 hover:border-slate-300 transition-colors duration-300">
            <h3 className="text-xl md:text-2xl font-semibold">
              Diagnostics & Optimization
            </h3>
            <p className="text-gray-300 mt-2">
              Advanced diagnostics, system cleaning, and performance tuning for
              long-term device reliability.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Subtle Decorative Glow */}
      <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-slate-400/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
}

export default Feature;
