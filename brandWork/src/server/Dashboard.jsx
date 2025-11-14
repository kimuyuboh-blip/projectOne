import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";

function Dashboard() {
  const [user, setUser] = useState(null);

  // Fetch protected user info
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) window.location.href = "/";

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) {
          localStorage.removeItem("auth_token");
          window.location.href = "/";
          return;
        }

        setUser(data.user); // { Id, email }
      } catch {
        localStorage.removeItem("auth_token");
        window.location.href = "/";
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("auth_token");
    window.location.href = "/";
  };

  if (!user)
    return (
      <div className="text-center mt-32 text-xl font-semibold text-[#3A9BD9]">
        Loading...
      </div>
    );

  return (
    <section
      className="relative w-full px-6 md:px-16 lg:px-24 py-32
      bg-[#FAFAFA] text-[#1E1E1E]
      dark:bg-[#1E1E1E] dark:text-[#F1F1F1]
      min-h-screen overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#3A9BD9]/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B8C9]/10 blur-[120px] rounded-full"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl mx-auto bg-[#F0F0F0]/80 dark:bg-[#2C2C2C]/80 
        border border-[#D8D8D8]/60 dark:border-[#3D3D3D]/60
        rounded-3xl p-16 shadow-xl text-center"
      >
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-[#3A9BD9] via-[#00B8C9] to-[#1DE9B6] bg-clip-text text-transparent">
          Welcome, {user.email.split("@")[0]}  
        </h1>

        <p className="text-[#505050] dark:text-[#B5B5B5] text-lg mb-12">
          You are now accessing your secure dashboard.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(29,233,182,0.4)",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={logout}
          className="bg-[#1DE9B6] hover:bg-[#00B8C9] text-[#1E1E1E] 
          font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md flex items-center gap-2 mx-auto"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </motion.button>
      </motion.div>
    </section>
  );
}

export default React.memo(Dashboard);