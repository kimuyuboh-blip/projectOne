import { motion } from "framer-motion";
import featureImg from "../../assets/feature.jpg";

function Feature() {
  return (
    <section
      id="features"
      className="relative w-full flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-24 py-20 
      bg-gradient-to-b from-[#F0F0F0] via-[#FAFAFA] to-[#F0F0F0] 
      dark:from-[#1E1E1E] dark:via-[#2C2C2C] dark:to-[#1E1E1E] 
      text-[#1E1E1E] dark:text-[#F1F1F1] transition-colors duration-500 overflow-hidden"
    >
      {/* Image Section */}
      <motion.div
        className="relative w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="relative group">
          <img
            src={featureImg}
            alt="Glowing advert of Mobile Phone Repair"
            className="rounded-3xl shadow-2xl w-full max-w-sm object-cover 
            border border-[#C0C0C0]/40 dark:border-[#3D3D3D]/70 
            group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-3xl 
          bg-gradient-to-tr from-[#3A9BD9]/10 to-[#1DE9B6]/10 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="w-full md:w-1/2 text-left space-y-6 flex flex-col justify-start"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold 
        bg-gradient-to-r from-[#3A9BD9] via-[#1DE9B6] to-[#3A9BD9] 
        bg-clip-text text-transparent tracking-tight">
          Our Services
        </h2>

        <p className="text-[#505050] dark:text-[#B5B5B5] text-lg leading-relaxed">
          We provide comprehensive repair solutions tailored to restore your devices to peak performance. From phones to laptops, we handle every repair with precision and care.
        </p>

        <div className="space-y-4">
          {/* Phone Repair */}
          <div className="flex gap-4 group hover:bg-white/5 dark:hover:bg-[#3D3D3D]/20 p-3 rounded-lg transition-colors duration-300">
            <div className="text-2xl text-[#1DE9B6] flex-shrink-0">✓</div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Phone Repair</h3>
              <p className="text-[#505050] dark:text-[#B5B5B5] mt-2">
                We fix screens, batteries, charging ports, and slow performance. 
                Expert solutions for all mobile issues.
              </p>
            </div>
          </div>

          {/* Laptop Repair */}
          <div className="flex gap-4 group hover:bg-white/5 dark:hover:bg-[#3D3D3D]/20 p-3 rounded-lg transition-colors duration-300">
            <div className="text-2xl text-[#1DE9B6] flex-shrink-0">✓</div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Laptop Repair</h3>
              <p className="text-[#505050] dark:text-[#B5B5B5] mt-2">
                Complete laptop care: hardware repairs, system fixes, and data recovery. 
                We bring your laptop back to life.
              </p>
            </div>
          </div>

          {/* Diagnostics & Optimization */}
          <div className="flex gap-4 group hover:bg-white/5 dark:hover:bg-[#3D3D3D]/20 p-3 rounded-lg transition-colors duration-300">
            <div className="text-2xl text-[#1DE9B6] flex-shrink-0">✓</div>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">Diagnostics & Optimization</h3>
              <p className="text-[#505050] dark:text-[#B5B5B5] mt-2">
                Advanced diagnostics, system cleaning, and performance tuning for 
                long-term device reliability.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-20 -right-10 w-72 h-72 
      bg-gradient-to-tr from-[#3A9BD9]/20 to-[#1DE9B6]/20 
      dark:from-[#3A9BD9]/10 dark:to-[#1DE9B6]/10 
      blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
}

export default Feature;
