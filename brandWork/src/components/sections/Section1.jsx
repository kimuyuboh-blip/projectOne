// here is sliding images of feature set.

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Zap, Clock } from "lucide-react";

function section1() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-slate-300" />,
      title: "Trusted Expertise",
      description:
        "Certified technicians with years of verified experience in advanced component-level repair.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-slate-300" />,
      title: "Cutting-Edge Tools",
      description:
        "Precision diagnostic and rework equipment ensuring factory-grade performance restoration.",
    },
    {
      icon: <Zap className="w-8 h-8 text-slate-300" />,
      title: "High Efficiency",
      description:
        "Optimized repair workflow designed for minimal downtime and maximum reliability.",
    },
    {
      icon: <Clock className="w-8 h-8 text-slate-300" />,
      title: "Same-Day Solutions",
      description:
        "Fast turnaround times without compromising accuracy or quality standards.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-black via-gray-950 to-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-slate-100 via-gray-400 to-slate-200 bg-clip-text text-transparent tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Why Choose Kimuyu TechWorks
        </motion.h2>
        <motion.p
          className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Where advanced engineering meets trust. Our philosophy: performance
          without compromise.
        </motion.p>
      </div>

      {/* Feature Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-white/5 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 text-center transition-all duration-300 hover:border-gray-600 hover:shadow-[0_0_25px_rgba(192,192,192,0.2)] hover:scale-105"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-slate-200 to-gray-400 bg-clip-text text-transparent">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute -top-24 left-10 w-72 h-72 bg-slate-400/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-slate-300/10 blur-[130px] rounded-full pointer-events-none"></div>
    </section>
  );
}

export default section1;
