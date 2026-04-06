"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, Globe, Database, Layers, TrendingUp, Shield } from "lucide-react";

const skillGroups = [
  {
    icon: Globe,
    label: "Frontend",
    color: "#3b82f6",
    glow: "rgba(59,130,246,0.15)",
    skills: ["React.js", "HTML", "Tailwind CSS", "Responsive UI", "Javascript"],
  },
  {
    icon: Terminal,
    label: "Backend",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.15)",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Socket.io"],
  },
  {
    icon: Database,
    label: "Database",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.15)",
    skills: ["MongoDB", "Schema Design", "Indexing", "MySQL", "Aggregation", "Supabase"],
  },
  {
    icon: Layers,
    label: "DevTools",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.15)",
    skills: ["Git & GitHub", "Postman", "Agile/Scrum", "VS Code", "Linux CLI", "Antigravity"],
  },
  {
    icon: TrendingUp,
    label: "Performance",
    color: "#10b981",
    glow: "rgba(16,185,129,0.15)",
    skills: ["Query Optimization", "Caching", "Load Testing", "Profiling", "Sub-200ms APIs"],
  },
  {
    icon: Shield,
    label: "Security",
    color: "#ef4444",
    glow: "rgba(239,68,68,0.15)",
    skills: ["JWT / Refresh Tokens", "Role-Based Auth", "Input Validation", "CORS", "Rate Limiting"],
  },
];

function SkillCard({
  group,
  index,
}: {
  group: (typeof skillGroups)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = group.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="glass-card p-6 group hover:scale-[1.02] transition-all duration-300"
      style={{
        borderColor: `${group.color}20`,
      }}
      whileHover={{
        boxShadow: `0 0 40px ${group.glow}, 0 0 80px ${group.glow.replace("0.15", "0.05")}`,
        borderColor: `${group.color}40`,
      }}
    >
      {/* Icon + label */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: `${group.color}15`,
            border: `1px solid ${group.color}30`,
          }}
        >
          <Icon size={18} style={{ color: group.color }} />
        </div>
        <h3 className="font-bold text-white text-lg">{group.label}</h3>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.1 + i * 0.06, duration: 0.4 }}
            className="skill-badge"
            style={{
              background: `${group.color}10`,
              borderColor: `${group.color}25`,
              color: group.color,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      className="relative py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Background accent */}
      <div
        className="ambient-blob"
        style={{
          width: 400,
          height: 400,
          background: "#8b5cf6",
          top: "20%",
          right: "5%",
          opacity: 0.06,
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="section-tag">Tech Arsenal</div>
            <h2
              className="text-4xl font-black mt-2 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Skills &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Expertise
              </span>
            </h2>
            <p className="text-lg max-w-xl" style={{ color: "#64748b" }}>
              A production-proven stack built for performance, security, and scale.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} index={i} />
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-12 glass-card p-6 flex flex-wrap items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-bold text-lg">Production mindset, always.</p>
            <p style={{ color: "#64748b" }} className="text-sm mt-1">
              Every system I build is designed for real-world load, maintainability, and security.
            </p>
          </div>
          <div className="flex gap-8">
            {[
              { label: "APIs Shipped", value: "10+" },
              { label: "Real-Time Users", value: "50+" },
              { label: "Avg Response", value: "<200ms" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-2xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "#475569" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
