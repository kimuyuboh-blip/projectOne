import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Section1() {
  const items = [
    { title: "Smartphone and Iphone Repair", img: "/src/assets/store/smartphone.webp" },
    { title: "Screen Replacement", img: "/src/assets/store/screen.webp" },
    { title: "Laptop Repair", img: "/src/assets/store/2.webp" },
    { title: "Windows Installation", img: "/src/assets/store/install.webp" },
  ];

  return (
    <section
      className="relative w-full flex flex-col md:flex-row items-start justify-between px-6 md:px-16 lg:px-24 py-20 
      bg-gradient-to-b from-[#F0F0F0] via-[#FAFAFA] to-[#F0F0F0] 
      dark:from-[#1E1E1E] dark:via-[#2C2C2C] dark:to-[#1E1E1E] 
      text-[#1E1E1E] dark:text-[#F1F1F1] transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* LEFT TEXT */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span className="block bg-gradient-to-r from-[#3A9BD9] via-[#1DE9B6] to-[#3A9BD9] bg-clip-text text-transparent">
              Why Choose
            </span>
            <span className="block text-[#1E1E1E] dark:text-[#F1F1F1]">
              Kimuyu TechWorks
            </span>
          </h2>

          <p className="text-[#505050] dark:text-[#B5B5B5] max-w-sm leading-relaxed">
            We focus on quality repairs, transparent pricing, and exceptional customer service to ensure your devices are in the best hands.
            <br />
            Your trust is our priority.
          </p>

          <div id="products">
            <a href="#products" onClick={() => setIsOpen(false)}><button 
            className="flex items-center gap-2 text-[#1E1E1E] dark:text-[#F1F1F1 hover:text-[#3A9BD9] transition-colors">
            <span className="underline underline-offset-4">Check All</span>
            <ArrowRight className="w-5 h-5" />
          </button></a>
            
          </div>
          


        </div>

        {/* RIGHT SLIDER */}
        <div className="lg:col-span-8 relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...items, ...items].map((item, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 w-[250px] h-[350px] rounded-3xl overflow-hidden border
                border-[#D0D0D0]/50 dark:border-[#3D3D3D]/70 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h3 className="absolute bottom-6 left-6 text-lg font-semibold text-white drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* DECORATIVE GLOW */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-[#3A9BD9]/20 dark:bg-[#1DE9B6]/15 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
}

export default React.memo(Section1);