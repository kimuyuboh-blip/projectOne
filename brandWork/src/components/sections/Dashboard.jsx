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
      <div className="text-center mt-32 text-xl font-semibold text-[#3A9BD9]">
        Loading...
      </div>
    );

  return (
    <section className="relative w-full px-6 md:px-16 lg:px-24 py-32 ...">
      {/* preserve your whole UI exactly */}
      <motion.div>
        <h1>
          Welcome, {user.email.split("@")[0]}
        </h1>
        <p> You are now accessing your secure dashboard.</p>

        <motion.button onClick={logout}>
          <LogOut className="w-5 h-5" />
          Log Out
        </motion.button>
      </motion.div>
    </section>
  );
}

export default React.memo(Dashboard);
