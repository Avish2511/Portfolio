"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
              className="relative"
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 0 60px rgba(59,130,246,0.5)",
                }}
              >
                AP
              </div>
              {/* Spinning ring */}
              <motion.div
                className="absolute -inset-3 rounded-3xl border-2 border-transparent"
                style={{
                  borderTopColor: "#3b82f6",
                  borderRightColor: "transparent",
                  borderBottomColor: "#8b5cf6",
                  borderLeftColor: "transparent",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <h1
                className="text-2xl font-bold mb-1"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Avishkumar Patel
              </h1>
              <p className="text-sm" style={{ color: "#475569" }}>
                Full Stack Engineer
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-48"
            >
              <div
                className="h-1 rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                    width: `${progress}%`,
                  }}
                  transition={{ duration: 0.1 }}
                />
              </div>
              <p
                className="text-center text-xs mt-2"
                style={{ color: "#334155" }}
              >
                {progress}%
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
