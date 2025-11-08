import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "/src/assets/testimonials/1.avif";
import img2 from "/src/assets/testimonials/2.jpg";
import img3 from "/src/assets/testimonials/3.jpg";
import img4 from "/src/assets/testimonials/4.jpg";

export default function Testimonials() {
  const testimonials = [
    {
      text: "My phone had charging issues that two other shops couldn’t fix. Kimuyu TechWorks diagnosed a board fault and repaired it within 24 hours. The precision and professionalism were unmatched. Charging stability fully restored — verified through two weeks of testing.",
      author: "Brian Otieno — Samsung S22",
      img: img1,
    },
    {
      text: "My laptop was overheating and shutting down every few minutes. After service, it runs quietly and stays cool even during long sessions. They also cleaned and optimized the system without me asking. Temperature reduced by 22°C under load.",
      author: "Grace Mwikali — HP Laptop",
      img: img2,
    },
    {
      text: "They provided a detailed diagnostic report before repair, explaining each issue and solution clearly. No hidden charges, no guesswork — just structured service. Complete restoration with transparent process documentation.",
      author: "Kevin Njoroge — iPhone 13 Pro",
      img: img3,
    },
    {
      text: "I lost critical business data after a system crash. Kimuyu TechWorks recovered 98% of my files within two days. Their process was organized and well-documented. Recovered 98% of data with verified integrity report.",
      author: "Ruth Achieng — Lenovo ThinkPad",
      img: img4,
    },
  ];

  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  const fadeVariants = {
    enter: { opacity: 0, x: 60 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 },
  };

  return (
    <section
      id="testimonials"
      className="relative py-20 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Testimonial Content */}
        <div className="lg:col-span-7 relative">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-100 via-gray-400 to-slate-200 bg-clip-text text-transparent tracking-tight mb-6">
            What Clients Say About Us
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={fadeVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="space-y-6"
            >
              <blockquote className="border-l-4 border-slate-600 pl-5">
                <p className="text-gray-300 leading-relaxed text-lg">
                  “{testimonials[index].text}”
                </p>
                <footer className="text-sm text-gray-500 mt-3">{testimonials[index].author}</footer>
              </blockquote>

              <p className="text-gray-400 italic text-sm">
                “Every client, every device, every detail — verified precision.”
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-gray-300" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-gray-700 hover:border-gray-500 hover:bg-gray-800 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Right: Image */}
        <motion.div
          key={`img-${index}`}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-gray-800/60 transform transition-transform duration-500 hover:scale-105">
            <img
              src={testimonials[index].img}
              alt={`Client testimonial image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute -bottom-24 right-8 w-64 h-64 bg-slate-400/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
}
