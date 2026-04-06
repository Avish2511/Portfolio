"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User, Rocket, Shield, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Production Engineer",
    desc: "Ships real-world systems with clean architecture, not just side projects. Every feature is built for scale.",
    color: "#3b82f6",
  },
  {
    icon: Shield,
    title: "Security-First API Design",
    desc: "JWT with refresh token rotation, role-based access control, input sanitization — security is never an afterthought.",
    color: "#8b5cf6",
  },
  {
    icon: Cpu,
    title: "Real-Time Systems",
    desc: "Built Socket.io systems handling 50+ concurrent users with sub-100ms latency. Optimized for live state sync.",
    color: "#06b6d4",
  },
  {
    icon: User,
    title: "Agile Practitioner",
    desc: "Internship-tested with Brainybeam Technologies — sprint planning, code reviews, and team delivery cycles.",
    color: "#10b981",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Ambient */}
      <div
        className="ambient-blob"
        style={{
          width: 500,
          height: 500,
          background: "#3b82f6",
          top: "10%",
          left: "-10%",
          opacity: 0.07,
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="section-tag">About Me</div>
              <h2
                className="text-4xl font-black mt-2 mb-6 leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Engineered for{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Impact
                </span>
              </h2>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#94a3b8" }}>
                <p>
                  I&apos;m a{" "}
                  <span className="text-white font-semibold">
                    production-level MERN Stack developer
                  </span>{" "}
                  who has shipped systems that real users depend on — not just
                  toy projects. I think in terms of scale, latency, and
                  maintainability.
                </p>
                <p>
                  I built{" "}
                  <span style={{ color: "#60a5fa" }} className="font-semibold">
                    DealHub
                  </span>
                  , a multi-vendor marketplace with a real-time bidding system,
                  Razorpay payments, and optimized MongoDB queries averaging{" "}
                  <span className="text-white font-semibold">&lt;200ms response times</span>.
                </p>
                <p>
                  My{" "}
                  <span style={{ color: "#a78bfa" }} className="font-semibold">
                    real-time chat system
                  </span>{" "}
                  handles 50+ concurrent users via Socket.io with sub-100ms
                  message delivery — built with persistent history, JWT auth,
                  and graceful reconnection handling.
                </p>
                <p>
                  Strong foundation in{" "}
                  <span className="text-white font-semibold">
                    REST API design, JWT security
                  </span>
                  , MongoDB performance tuning, and Agile delivery. I don&apos;t
                  just write code — I architect solutions.
                </p>
              </div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-8 p-5 rounded-xl"
                style={{
                  background: "rgba(59,130,246,0.06)",
                  border: "1px solid rgba(59,130,246,0.15)",
                  borderLeft: "3px solid #3b82f6",
                }}
              >
                <p className="text-white italic font-medium">
                  &ldquo;I build scalable, real-time full-stack applications with
                  production-grade architecture.&rdquo;
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Highlight cards */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="glass-card p-5 group hover:scale-[1.02] transition-all duration-300"
                  whileHover={{
                    boxShadow: `0 0 30px ${item.color}20`,
                    borderColor: `${item.color}30`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "#64748b" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
