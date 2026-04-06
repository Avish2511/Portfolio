"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Zap, Star, ShoppingCart, MessageSquare, Eye } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const projects = [
  {
    id: "dealhub",
    title: "DealHub",
    badge: "🏆 Flagship",
    badgeColor: "#f59e0b",
    description:
      "Production-grade multi-vendor marketplace with a real-time bidding engine, Razorpay payment integration, and JWT role-based access for buyers, sellers, and admins.",
    highlights: [
      "Real-time bidding with Socket.io",
      "Razorpay payment integration",
      "JWT RBAC — buyer/seller/admin",
      "MongoDB <200ms response time",
      "RESTful API with 10+ endpoints",
    ],
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Razorpay"],
    icon: ShoppingCart,
    gradient: "from-blue-600 via-blue-700 to-indigo-800",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.25)",
    github: "https://github.com/Avish2511",
    demo: "#",
    stat: "<200ms",
    statLabel: "API Latency",
  },
  {
    id: "chat",
    title: "Real-Time Chat App",
    badge: "⚡ Live System",
    badgeColor: "#8b5cf6",
    description:
      "Scalable real-time messaging platform built on Socket.io supporting 50+ concurrent users with sub-100ms delivery, persistent chat history, and JWT-secured sessions.",
    highlights: [
      "50+ concurrent users supported",
      "Sub-100ms message delivery",
      "Persistent MongoDB chat history",
      "JWT auth + room management",
      "Graceful reconnect handling",
    ],
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "JWT", "Express"],
    icon: MessageSquare,
    gradient: "from-purple-600 via-violet-700 to-purple-900",
    accent: "#8b5cf6",
    glow: "rgba(139,92,246,0.25)",
    github: "https://github.com/Avish2511",
    demo: "#",
    stat: "<100ms",
    statLabel: "Message Latency",
  },
  {
    id: "currency",
    title: "Fake Currency Detector",
    badge: "🤖 AI/ML",
    badgeColor: "#10b981",
    description:
      "Deep learning system using MobileNetV2 CNN to detect counterfeit currency with 95%+ accuracy. Deployed as a Flask REST API with a React frontend for real-time analysis.",
    highlights: [
      "MobileNetV2 CNN architecture",
      "95%+ detection accuracy",
      "Flask REST API deployment",
      "<300ms inference time",
      "React-powered frontend",
    ],
    tech: ["Python", "TensorFlow", "MobileNetV2", "Flask", "React.js", "REST API"],
    icon: Eye,
    gradient: "from-emerald-600 via-teal-700 to-cyan-800",
    accent: "#10b981",
    glow: "rgba(16,185,129,0.25)",
    github: "https://github.com/Avish2511",
    demo: "#",
    stat: "95%+",
    statLabel: "Accuracy",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const Icon = project.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
    >
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        glareEnable={true}
        glareMaxOpacity={0.08}
        glareColor={project.accent}
        glarePosition="all"
        glareBorderRadius="16px"
        transitionSpeed={800}
        scale={1.01}
      >
        <div
          className="glass-card overflow-hidden group cursor-pointer transition-all duration-500 relative"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            boxShadow: hovered
              ? `0 20px 60px ${project.glow}, 0 0 0 1px ${project.accent}30`
              : "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          {/* Card top — gradient banner */}
          <div
            className={`h-40 relative overflow-hidden bg-gradient-to-br ${project.gradient}`}
          >
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(${project.accent} 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />

            {/* Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={hovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <Icon size={28} className="text-white" />
              </motion.div>
            </div>

            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  background: `${project.badgeColor}20`,
                  border: `1px solid ${project.badgeColor}50`,
                  color: project.badgeColor,
                  backdropFilter: "blur(10px)",
                }}
              >
                {project.badge}
              </span>
            </div>

            {/* Stat */}
            <div className="absolute top-4 right-4 text-right">
              <div className="text-white font-black text-xl">{project.stat}</div>
              <div className="text-white/60 text-xs">{project.statLabel}</div>
            </div>
          </div>

          {/* Card content */}
          <div className="p-6">
            <h3
              className="text-xl font-black text-white mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="mb-5 space-y-1.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-xs" style={{ color: "#94a3b8" }}>
                  <Zap size={11} style={{ color: project.accent, marginTop: 3, flexShrink: 0 }} />
                  {h}
                </li>
              ))}
            </ul>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="tech-badge"
                  style={{
                    background: `${project.accent}10`,
                    borderColor: `${project.accent}25`,
                    color: project.accent,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action links */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.color = "#94a3b8";
                }}
              >
                <GithubIcon size={14} />
                Code
              </a>
              <a
                href={project.demo}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{
                  background: `${project.accent}15`,
                  border: `1px solid ${project.accent}30`,
                  color: project.accent,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = `${project.accent}25`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = `${project.accent}15`;
                }}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="projects"
      className="relative py-32"
      style={{ background: "var(--bg-primary)" }}
    >
      <div
        className="ambient-blob"
        style={{
          width: 600,
          height: 600,
          background: "#3b82f6",
          bottom: "5%",
          right: "-10%",
          opacity: 0.06,
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={ref} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="section-tag">Featured Work</div>
            <h2
              className="text-4xl font-black mt-2 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Projects That{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ship
              </span>
            </h2>
            <p className="text-lg max-w-xl" style={{ color: "#64748b" }}>
              Real systems with measurable performance. Not demo apps — production
              thinking in every decision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Avish2511"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Star size={15} />
            View All Repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
