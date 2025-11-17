import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import logo from "/logo/logo.webp";

function CTA() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
  };

  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-center md:justify-between w-full
      bg-linear-to-r from-[#3A9BD9] via-[#1DE9B6] to-[#3A9BD9]
      dark:from-[#1E1E1E] dark:via-[#2C2C2C] dark:to-[#1E1E1E]
      text-[#1E1E1E] dark:text-[#F1F1F1]
      py-20 px-8 md:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Left Logo */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0"
      >
        <img
          src={logo}
          alt="Kimuyu TechWorks logo"
          className="w-3/4 md:w-[70%] h-auto object-contain filter drop-shadow-xl"
        />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3 text-[#1E1E1E] dark:text-[#F1F1F1]">
          Unlock exclusive discounts on  <br />
          <span className="text-[#2C2C2C]/80 dark:text-[#B5B5B5]/90">
          phone services and repairs!
          </span>
        </h2>

        <p className="text-[#1E1E1E] dark:text-[#B5B5B5]/80 mb-8 text-lg">
          Join our{" "}
          <span>
            mailing list
          </span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="w-full sm:w-[65%] px-5 py-3 rounded-lg mr-5
            text-[#1E1E1E] placeholder-[#1E1E1E]
            focus:outline-none focus:ring-2
            focus:ring-[#F1F1F1] dark:focus:ring-[#F1F1F1]
            dark:bg-[#2C2C2C] dark:text-[#F1F1F1] transition-all duration-300 bg-[#F1F1F1]"
          />

          <button
            type="submit"
            className="w-full sm:w-[35%] bg-[#1E1E1E] dark:bg-[#F1F1F1]
            hover:bg-[#1DE9B6] dark:hover:bg-[#3A9BD9]
            text-white font-semibold py-3
            rounded-lg  transition-all duration-300"
          >
            Shop Now
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default React.memo(CTA);
