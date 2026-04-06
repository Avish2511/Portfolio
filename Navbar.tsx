"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(2, 5, 9, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(59,130,246,0.1)" : "none",
        }}
      >
        <div
          className="w-full mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between"
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-black transition-all duration-300 group-hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                boxShadow: "0 0 20px rgba(59,130,246,0.3)",
              }}
            >
              AP
            </div>
            <span className="font-semibold text-white/80 text-sm hidden sm:block group-hover:text-white transition-colors">
              Avishkumar Patel
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link"
                style={{
                  color:
                    activeSection === link.href.replace("#", "")
                      ? "#fff"
                      : undefined,
                }}
              >
                {link.label}
                {activeSection === link.href.replace("#", "") && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-[-4px] left-0 right-0 h-0.5 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                    }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/resume.pdf"
              download
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              Download CV
            </a>

            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#94a3b8" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              style={{
                background: "rgba(8, 13, 20, 0.95)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(59,130,246,0.1)",
              }}
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-link text-base"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary text-sm w-fit"
                  onClick={() => setMobileOpen(false)}
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
