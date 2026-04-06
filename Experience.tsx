"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, CheckCircle, Calendar } from "lucide-react";

const achievements = [
  "Engineered and delivered 10+ production REST APIs consumed by frontend clients",
  "Designed and implemented a complete JWT authentication system with role-based access control",
  "Delivered features iteratively within Agile sprint cycles — story points, standups, retrospectives",
  "Improved frontend responsiveness and UX across multiple product modules",
  "Collaborated with cross-functional teams on API contract design and integration",
  "Wrote clean, documented code following industry-standard best practices",
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="relative py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div
        className="ambient-blob"
        style={{
          width: 400,
          height: 400,
          background: "#06b6d4",
          top: "20%",
          left: "5%",
          opacity: 0.05,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="section-tag">Work Experience</div>
            <h2
              className="text-4xl font-black mt-2 mb-16"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Professional{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Journey
              </span>
            </h2>
          </motion.div>

          <div className="flex gap-8">
            {/* Timeline line */}
            <div className="flex flex-col items-center pt-2">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                className="timeline-dot"
              />
              <motion.div
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="timeline-line flex-1 mt-3"
                style={{ minHeight: 360, transformOrigin: "top" }}
              />
            </div>

            {/* Content card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="flex-1 pb-8"
            >
              <div
                className="glass-card p-8"
                style={{
                  borderColor: "rgba(59,130,246,0.15)",
                  boxShadow: "0 0 40px rgba(59,130,246,0.05)",
                }}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{
                          background: "rgba(59,130,246,0.15)",
                          border: "1px solid rgba(59,130,246,0.3)",
                        }}
                      >
                        <Briefcase size={15} style={{ color: "#60a5fa" }} />
                      </div>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(16,185,129,0.1)",
                          color: "#34d399",
                          border: "1px solid rgba(16,185,129,0.2)",
                        }}
                      >
                        Internship
                      </span>
                    </div>
                    <h3
                      className="text-xl font-black text-white"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      MERN Stack Developer Intern
                    </h3>
                    <p
                      className="text-base font-semibold mt-1"
                      style={{
                        background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Brainybeam Technologies
                    </p>
                  </div>

                  <div
                    className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-lg"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#64748b",
                    }}
                  >
                    <Calendar size={13} />
                    2026
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
                  Worked as a full-stack MERN developer within a product team building scalable
                  web applications. Contributed to backend API architecture, authentication
                  systems, and frontend responsiveness improvements across multiple sprint cycles.
                </p>

                {/* Achievement list */}
                <div className="space-y-3">
                  {achievements.map((achv, i) => (
                    <motion.div
                      key={achv}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        size={15}
                        style={{ color: "#3b82f6", marginTop: 2, flexShrink: 0 }}
                      />
                      <span className="text-sm" style={{ color: "#94a3b8" }}>
                        {achv}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Tech used */}
                <div className="mt-6 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-xs font-semibold mb-3" style={{ color: "#475569" }}>
                    STACK USED
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Node.js", "Express", "MongoDB", "JWT", "REST APIs", "Agile"].map(
                      (t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
