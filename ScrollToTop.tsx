"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollTop}
          className="fixed bottom-8 right-6 z-50 w-11 h-11 rounded-full flex items-center justify-center transition-all"
          style={{
            background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
            boxShadow: "0 4px 20px rgba(59,130,246,0.4)",
          }}
          aria-label="Scroll to top"
          id="scroll-to-top"
        >
          <ChevronUp size={18} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
