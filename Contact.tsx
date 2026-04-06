"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  Mail,
  Send,
  CheckCircle,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSending(true);
    setSubmitError(false);
    
    try {
      // Using FormSubmit.co - No API key needed!
      const response = await fetch("https://formsubmit.co/ajax/patelavish2511@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Portfolio Message from ${data.name}`,
          _template: "box",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Ambient */}
      <div
        className="ambient-blob"
        style={{
          width: 600,
          height: 600,
          background: "#8b5cf6",
          bottom: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.07,
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="section-tag">Get In Touch</div>
            <h2
              className="text-4xl md:text-5xl font-black mt-2 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Let&apos;s Build Something{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Impactful
              </span>
            </h2>
            <p className="text-lg max-w-lg mx-auto" style={{ color: "#64748b" }}>
              Whether it&apos;s a product, collaboration, or just a technical conversation
              — I&apos;m always open to connect.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Contact links */}
            {[
              {
                iconEl: <Mail size={16} />,
                label: "Email",
                value: "patelavish2511@gmail.com",
                href: "mailto:patelavish2511@gmail.com" as string | null,
                color: "#3b82f6",
              },
              {
                iconEl: <GithubIcon size={16} />,
                label: "GitHub",
                value: "github.com/Avish2511",
                href: "https://github.com/Avish2511" as string | null,
                color: "#8b5cf6",
              },
              {
                iconEl: <LinkedinIcon size={16} />,
                label: "LinkedIn",
                value: "patel-avish-61747a209",
                href: "https://www.linkedin.com/in/patel-avish-61747a209" as string | null,
                color: "#06b6d4",
              },
              {
                iconEl: <MapPin size={16} />,
                label: "Location",
                value: "Ahmedabad, Gujarat",
                href: null as string | null,
                color: "#f59e0b",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="glass-card p-4 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}25`,
                        color: item.color,
                      }}
                    >
                      {item.iconEl}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "#475569" }}>
                        {item.label}
                      </p>
                      <p className="text-sm text-white truncate">{item.value}</p>
                    </div>
                    <ArrowUpRight
                      size={14}
                      style={{ color: item.color, opacity: 0.6 }}
                      className="group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ) : (
                  <div className="glass-card p-4 flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${item.color}15`,
                        border: `1px solid ${item.color}25`,
                        color: item.color,
                      }}
                    >
                      {item.iconEl}
                    </div>
                    <div>
                      <p className="text-xs font-semibold mb-0.5" style={{ color: "#475569" }}>
                        {item.label}
                      </p>
                      <p className="text-sm text-white">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8">
              <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(16,185,129,0.15)" }}
                  >
                    <CheckCircle size={32} style={{ color: "#34d399" }} />
                  </div>
                  <p className="text-white font-bold text-lg">Message Sent!</p>
                  <p style={{ color: "#64748b" }} className="text-sm">
                    I&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="form-input"
                        placeholder="Your Name"
                        id="contact-name"
                      />
                      {errors.name && (
                        <p className="text-xs mt-1" style={{ color: "#f87171" }}>
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                        })}
                        className="form-input"
                        placeholder="Your Email"
                        id="contact-email"
                        type="email"
                      />
                      {errors.email && (
                        <p className="text-xs mt-1" style={{ color: "#f87171" }}>
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <input
                    {...register("subject", { required: "Subject is required" })}
                    className="form-input"
                    placeholder="Subject"
                    id="contact-subject"
                  />
                  {errors.subject && (
                    <p className="text-xs mt-1" style={{ color: "#f87171" }}>
                      {errors.subject.message}
                    </p>
                  )}
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    className="form-input h-32"
                    placeholder="Tell me about your project or opportunity..."
                    id="contact-message"
                  />
                  {errors.message && (
                    <p className="text-xs mt-1" style={{ color: "#f87171" }}>
                      {errors.message.message}
                    </p>
                  )}
                  
                  {submitError && (
                    <div className="p-3 rounded-lg border border-red-500/50 bg-red-500/10 text-red-200 text-sm mt-4 text-center">
                      Failed to send message. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="btn-primary w-full justify-center"
                    id="contact-submit"
                  >
                    {sending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
