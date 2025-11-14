import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "/src/assets/testimonials/1.webp";
import img2 from "/src/assets/testimonials/2.webp";
import img3 from "/src/assets/testimonials/3.webp";
import img4 from "/src/assets/testimonials/4.webp";

function Testimonials() {
  const testimonials = [
    {
      author: "Brian Otieno — Samsung S22",
      text: "My phone had charging issues that two other shops couldn’t fix. Kimuyu TechWorks diagnosed a board fault and repaired it within 24 hours. The precision and professionalism were unmatched. Charging stability fully restored — verified through two weeks of testing.",
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
      className="relative w-full py-20 px-6 md:px-16 lg:px-24 
      bg-linear-to-b from-[#F0F0F0] via-[#FAFAFA] to-[#F0F0F0]
      dark:from-[#1E1E1E] dark:via-[#2C2C2C] dark:to-[#1E1E1E]
      text-[#1E1E1E] dark:text-[#F1F1F1] overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Testimonial Content */}
        <div className="lg:col-span-7 flex flex-col justify-start relative">
          <h2
            className="text-3xl md:text-4xl font-extrabold 
            bg-linear-to-r from-[#3A9BD9] via-[#1DE9B6] to-[#3A9BD9] 
            bg-clip-text text-transparent tracking-tight mb-6"
          >
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
              <blockquote>
                {/* === ADDED SECTION START === */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonials[index].img}
                    alt={testimonials[index].author}
                    className="w-12 h-12 rounded-full object-cover border border-[#C0C0C0]/50 dark:border-[#3D3D3D]/70 shadow-md"
                  />
                  <span className="text-sm md:text-base font-semibold text-[#3A9BD9] dark:text-[#1DE9B6]">
                    {testimonials[index].author}
                  </span>
                </div>
                {/* === ADDED SECTION END === */}

                <p className="text-[#505050] dark:text-[#B5B5B5] leading-relaxed text-lg text-justify">
                  "{testimonials[index].text}"
                </p>
              </blockquote>

              <p className="text-[#505050] dark:text-[#B5B5B5] italic text-sm text-justify">
                "Every client, every device, every detail — verified precision."
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-[#D0D0D0] dark:border-[#3D3D3D] 
              hover:border-[#3A9BD9] dark:hover:border-[#1DE9B6] 
              hover:bg-[#F5F5F5] dark:hover:bg-[#3D3D3D]/40 
              transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-[#3A9BD9] dark:text-[#1DE9B6]" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full border border-[#D0D0D0] dark:border-[#3D3D3D] 
              hover:border-[#3A9BD9] dark:hover:border-[#1DE9B6] 
              hover:bg-[#F5F5F5] dark:hover:bg-[#3D3D3D]/40 
              transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-[#3A9BD9] dark:text-[#1DE9B6]" />
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
          className="lg:col-span-5 flex justify-center lg:justify-end self-start"
        >
          <div className="w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden 
          shadow-2xl border border-[#C0C0C0]/40 dark:border-[#3D3D3D]/70 
          transform transition-transform duration-500 hover:scale-[1.03]">
            <img
              src={testimonials[index].img}
              alt={`Client testimonial image ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute -bottom-24 right-8 w-64 h-64 
        bg-linear-to-tr from-[#3A9BD9]/20 to-[#1DE9B6]/20 
        dark:from-[#3A9BD9]/10 dark:to-[#1DE9B6]/10 
        blur-[100px] rounded-full pointer-events-none"
      ></div>
    </section>
  );
}

export default React.memo(Testimonials);