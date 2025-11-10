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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
      className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-slate-400/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg mx-auto backdrop-blur-xl bg-white/10 border border-gray-700/40 rounded-3xl p-10 shadow-2xl hover:shadow-gray-800/50 transition-all duration-500">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            {isLogin ? (
              <LogIn className="w-10 h-10 text-gray-300" />
            ) : (
              <UserPlus className="w-10 h-10 text-gray-300" />
            )}
          </div>

          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-slate-100 via-gray-300 to-slate-200 bg-clip-text text-transparent mb-3">
            {isLogin ? "Welcome Back" : "Join Kimuyu TechWorks"}
          </h2>
          <p className="text-gray-400 text-sm">
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
              className="block text-sm font-semibold text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 bg-black/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-slate-400 focus:outline-none text-gray-100 placeholder-gray-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full px-4 py-2.5 bg-black/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-slate-400 focus:outline-none text-gray-100 placeholder-gray-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-300 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="block w-full px-4 py-2.5 bg-black/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-slate-400 focus:outline-none text-gray-100 placeholder-gray-400"
                placeholder="Re-enter your password"
                required
              />
            </div>
          )}

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(192,192,192,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 border border-gray-500/40 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </motion.button>

          <div className="text-center mt-6">
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-slate-300 hover:text-white font-medium transition-all duration-200"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Log in"}
            </button>
          </div>
        </motion.form>

        {/* Footer */}
        <p className="mt-10 text-center text-xs text-gray-500 italic">
          <Lock className="inline-block w-4 h-4 mr-1 text-gray-500" />
          Secure access powered by Kimuyu TechWorks Systems.
        </p>
      </div>
    </section>
  );
}

export default CTA;
