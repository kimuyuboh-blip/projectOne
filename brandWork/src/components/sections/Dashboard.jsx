import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useAuth } from "/src/contexts/AuthContext";

function Dashboard() {
  const { user, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/";
    }
  }, [loading, user]);

  if (loading || !user)
    return (
      <div className="
        text-center mt-32 text-xl font-semibold
        text-[#3A9BD9] 
        dark:text-[#00B8C9]
      ">
        Loading...
      </div>
    );

  return (
    <section
      className="
        relative w-full px-6 md:px-16 lg:px-24 py-32

        /* Light Mode */
        bg-[#FAFAFA] text-[#1E1E1E]

        /* Dark Mode */
        dark:bg-[#1E1E1E] dark:text-[#F1F1F1]

        transition-colors duration-500
      "
    >
      {/* Background Accents */}
      <div className="absolute -top-10 -left-10 w-72 h-72 
        bg-[#3A9BD9]/10 dark:bg-[#00B8C9]/10 
        blur-[100px] rounded-full pointer-events-none"
      ></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 
        bg-[#1DE9B6]/10 dark:bg-[#1DE9B6]/10
        blur-[140px] rounded-full pointer-events-none"
      ></div>

      {/* Core UI */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative max-w-3xl mx-auto p-10 rounded-2xl

          /* Light Mode Card */
          bg-[#FFFFFF] text-[#1E1E1E] border border-[#D8D8D8]

          /* Dark Mode Card */
          dark:bg-[#2C2C2C] dark:text-[#F1F1F1] dark:border-[#3D3D3D]

          shadow-xl
        "
      >
        <h1
          className="
            text-4xl font-bold mb-2

            /* Light Mode Accent */
            text-[#1E1E1E]

            /* Dark Mode Accent */
            dark:text-[#F1F1F1]
          "
        >
          Welcome, {user.email.split("@")[0]}
        </h1>

        <p
          className="
            text-lg mb-10

            /* Light */
            text-[#505050]

            /* Dark */
            dark:text-[#B5B5B5]
          "
        >
          You are now accessing your secure dashboard.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 16px rgba(29,233,182,0.35)"
          }}
          whileTap={{ scale: 0.96 }}
          onClick={logout}
          className="
            flex items-center gap-2 px-6 py-3 font-semibold rounded-xl

            /* CTA (Shared) */
            bg-[#1DE9B6] text-[#1E1E1E]

            hover:opacity-90
            transition-all duration-300
          "
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </motion.button>
      </motion.div>
    </section>
  );
}

export default React.memo(Dashboard);
