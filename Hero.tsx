"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Zap } from "lucide-react";

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function AnimatedText({ text }: { text: string }) {
  return (
    <span className="inline-flex flex-wrap">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.02, duration: 0.5, ease: "easeOut" }}
          className={char === " " ? "mr-[0.25em]" : ""}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle system
  const initParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#60a5fa"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  useEffect(() => {
    const cleanup = initParticles();
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cleanup?.();
      window.removeEventListener("resize", handleResize);
    };
  }, [initParticles]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center py-24 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Ambient blobs */}
      <div
        className="ambient-blob"
        style={{
          width: 600,
          height: 600,
          background: "#3b82f6",
          top: "-150px",
          right: "-100px",
          zIndex: 0,
        }}
      />
      <div
        className="ambient-blob"
        style={{
          width: 500,
          height: 500,
          background: "#8b5cf6",
          bottom: "-100px",
          left: "-100px",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          zIndex: 1,
        }}
      />

      {/* Main content */}
      <div
        className="relative max-w-6xl mx-auto px-6 w-full flex-none flex flex-col items-center text-center"
        style={{ zIndex: 2 }}
      >
        <div className="max-w-3xl w-full flex-none flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(59,130,246,0.08)",
                border: "1px solid rgba(59,130,246,0.2)",
                color: "#60a5fa",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#22c55e" }}
              />
              Available for opportunities
            </div>
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(139,92,246,0.08)",
                border: "1px solid rgba(139,92,246,0.2)",
                color: "#a78bfa",
              }}
            >
              <Zap size={12} />
              MERN Stack · Socket.io
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Building{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% 200%",
              }}
              className="animate-gradient"
            >
              Scalable
            </span>
            <br />
            Full-Stack Systems
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
            style={{ color: "#94a3b8" }}
          >
            MERN Stack Developer specializing in{" "}
            <span style={{ color: "#60a5fa" }}>real-time apps</span>,{" "}
            <span style={{ color: "#a78bfa" }}>secure APIs</span>, and{" "}
            <span style={{ color: "#67e8f9" }}>high-performance architectures</span>.
            I engineer systems that scale.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href="https://github.com/Avish2511"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-all duration-300 hover:text-white group"
              style={{ color: "#475569" }}
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/patel-avish-61747a209"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-all duration-300 hover:text-white group"
              style={{ color: "#475569" }}
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
            <div
              className="h-4 w-px"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <div className="flex items-center gap-2 text-sm" style={{ color: "#334155" }}>
              <Code2 size={14} />
              <span>Full Stack · MERN · Socket.io</span>
            </div>
          </motion.div>
          {/* Stats inline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-16"
          >
            {[
              { label: "APIs Built", value: "10+" },
              { label: "Concurrent Users", value: "50+" },
              { label: "Response Time", value: "<200ms" },
              { label: "ML Accuracy", value: "95%+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card p-4 text-center min-w-28"
                style={{ borderColor: "rgba(59,130,246,0.1)" }}
              >
                <div
                  className="text-xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "#475569" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 2 }}
      >
        <span className="text-xs font-medium" style={{ color: "#334155" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full flex items-start justify-center pt-2"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <div
            className="w-1 h-2 rounded-full"
            style={{
              background: "linear-gradient(to bottom, #3b82f6, #8b5cf6)",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
