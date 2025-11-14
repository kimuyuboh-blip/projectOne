import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, UserPlus, LogIn } from "lucide-react";

function CTA() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  const endpoint = isLogin ? "login" : "register";
  const url = `http://localhost:3000/api/${endpoint}`;

  // validation
  if (!formData.email || !formData.password) {
    alert("Email and password are required");
    return;
  }
  if (!isLogin && formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || data.error || "Request failed");
      return;
    }
 
    if (isLogin) {
      // store JWT in localStorage
      localStorage.setItem("auth_token", data.token);
      alert("Login successful — token stored");
      window.location.href = "/dashboard";
    } else {
      alert("Registration successful — you can now log in");
      setIsLogin(true);
    }
  } catch (err) {
    console.error(err);
    alert("Network or server error");
  }
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full px-6 md:px-16 lg:px-24 py-20
      bg-[#FAFAFA] text-[#1E1E1E]
      dark:bg-[#1E1E1E] dark:text-[#F1F1F1]
      border-t border-[#D8D8D8]/70 dark:border-[#3D3D3D]/70
      transition-colors duration-500 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#3A9BD9]/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B8C9]/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg mx-auto backdrop-blur-xl 
      bg-[#F0F0F0]/80 dark:bg-[#2C2C2C]/80 
      border border-[#D8D8D8]/60 dark:border-[#3D3D3D]/60 
      rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            {isLogin ? (
              <LogIn className="w-10 h-10 text-[#3A9BD9]" />
            ) : (
              <UserPlus className="w-10 h-10 text-[#3A9BD9]" />
            )}
          </div>

          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#3A9BD9] via-[#00B8C9] to-[#1DE9B6] bg-clip-text text-transparent mb-3">
            {isLogin ? "Welcome Back" : "Join Kimuyu TechWorks"}
          </h2>
          <p className="text-[#505050] dark:text-[#B5B5B5] text-sm">
            {isLogin
              ? "Access your dashboard and manage device repairs."
              : "Create an account to track and schedule your repairs."}
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#505050] dark:text-[#B5B5B5] mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 bg-[#F0F0F0] dark:bg-[#1E1E1E] border border-[#D8D8D8]/70 dark:border-[#3D3D3D] rounded-xl focus:ring-2 focus:ring-[#00B8C9] focus:outline-none text-[#1E1E1E] dark:text-[#F1F1F1] placeholder-[#505050]/60 dark:placeholder-[#B5B5B5]/50"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-[#505050] dark:text-[#B5B5B5] mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 bg-[#F0F0F0] dark:bg-[#1E1E1E] border border-[#D8D8D8]/70 dark:border-[#3D3D3D] rounded-xl focus:ring-2 focus:ring-[#00B8C9] focus:outline-none text-[#1E1E1E] dark:text-[#F1F1F1] placeholder-[#505050]/60 dark:placeholder-[#B5B5B5]/50"
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-[#505050] dark:text-[#B5B5B5] mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full px-4 py-2.5 bg-[#F0F0F0] dark:bg-[#1E1E1E] border border-[#D8D8D8]/70 dark:border-[#3D3D3D] rounded-xl focus:ring-2 focus:ring-[#00B8C9] focus:outline-none text-[#1E1E1E] dark:text-[#F1F1F1] placeholder-[#505050]/60 dark:placeholder-[#B5B5B5]/50"
                placeholder="Re-enter your password"
                required
              />
            </div>
          )}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 25px rgba(29,233,182,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#1DE9B6] hover:bg-[#00B8C9] text-[#1E1E1E] font-semibold py-3 px-4 rounded-full transition-all duration-300 shadow-md"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </motion.button>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#3A9BD9] hover:text-[#00B8C9] font-medium transition-all duration-200"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </button>
          </div>
        </motion.form>

        {/* Footer */}
        <p className="mt-10 text-center text-xs text-[#505050]/80 dark:text-[#B5B5B5]/60 italic">
          <Lock className="inline-block w-4 h-4 mr-1 text-[#00B8C9]" />
          Secure access powered by Kimuyu TechWorks Systems.
        </p>
      </div>
    </section>
  );
}

export default React.memo(CTA);