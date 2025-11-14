import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

function AllProducts() {
  const products = [
    { name: "Internal Battery", price: "Ksh 1500", oldPrice: "Ksh 1800", img: "/src/assets/products/battery.webp" },
    { name: "Camera Glass", price: "Ksh 300", oldPrice: "Ksh 500", img: "/src/assets/products/camera-glass.webp" },
    { name: "Camera", price: "Ksh 1000", oldPrice: "Ksh 1500", img: "/src/assets/products/camera.webp" },
    { name: "Charging Plate", price: "Ksh 800", oldPrice: "Ksh 1000", img: "/src/assets/products/charging-plate.webp" },
    { name: "Earpiece", price: "Ksh 400", oldPrice: "Ksh 600", img: "/src/assets/products/earpiece.webp" },
    { name: "Sim Tray", price: "Ksh 300", oldPrice: "Ksh 500", img: "/src/assets/products/simtray.webp" },
    { name: "Complete Screen", price: "Ksh 2000", oldPrice: "Ksh 2500", img: "/src/assets/products/screen.webp" },
    { name: "Keypad Screen", price: "Ksh 300", oldPrice: "Ksh 500", img: "/src/assets/products/tululu.webp" },
  ];

  return (
    <section
      id="products"
      className="relative w-full py-20 px-6 md:px-16 lg:px-24 
      bg-gradient-to-b from-[#F0F0F0] via-[#FAFAFA] to-[#F0F0F0] 
      dark:from-[#1E1E1E] dark:via-[#2C2C2C] dark:to-[#1E1E1E] 
      text-[#1E1E1E] dark:text-[#F1F1F1] transition-colors duration-500 overflow-hidden"
    >
      {/* Soft gradient lighting */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3A9BD9]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#1DE9B6]/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h2 
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-[#3A9BD9] via-[#1DE9B6] to-[#3A9BD9] bg-clip-text text-transparent">
          Our Products
        </h2>
        <p className="text-[#505050] dark:text-[#B5B5B5] max-w-sm leading-relaxed mx-auto">
          We work to provide high quality repairs at pocket friendly prices. <br /> We can fix more than these.
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative bg-[#111111]/70 backdrop-blur-xl rounded-2xl border border-[#2B2B2B]/60 shadow-lg hover:shadow-[0_0_20px_#1DE9B650] overflow-hidden group"
          >
            {/* Product Image */}
            <div className="w-full aspect-square flex items-center justify-center bg-[#1A1A1A]/60">
              <img
                src={product.img}
                alt={product.name}
                className="w-2/3 h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Add Button */}
            <button
              className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-[#3A9BD9] to-[#1DE9B6] 
              text-black font-semibold hover:opacity-80 
              transition-all duration-300 shadow-md"
              aria-label="Add to Cart"
            >
              <Plus className="w-4 h-4" />
            </button>

            {/* Product Info */}
            <div className="p-5 text-center">
              <h3 className="font-semibold text-gray-100 text-lg truncate">
                {product.name}
              </h3>
              <div className="flex items-center justify-center gap-2 mt-2">
                <span className="text-[#1DE9B6] font-bold">{product.price}</span>
                <span className="text-gray-500 line-through text-sm">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center items-center gap-6 mt-16"
      >
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3A9BD9]/50 hover:bg-[#3A9BD9]/20 transition-all">
          <span className="text-lg text-[#505050]">←</span>
        </button>
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 bg-gradient-to-r from-[#3A9BD9] to-[#1DE9B6] rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#505050]/30 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#505050]/30 rounded-full"></span>
          <span className="w-2.5 h-2.5 bg-[#505050]/30 rounded-full"></span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#3A9BD9]/50 hover:bg-[#3A9BD9]/20 transition-all">
          <span className="text-lg text-[#505050]">→</span>
        </button>
      </motion.div>
    </section>
  );
}

export default React.memo(AllProducts);