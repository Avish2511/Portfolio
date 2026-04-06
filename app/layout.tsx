import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avishkumar Patel | Full Stack Engineer (MERN) | Real-Time Systems Builder",
  description:
    "Full Stack MERN Developer specializing in real-time apps, secure APIs, and high-performance architectures. Explore projects like DealHub marketplace and real-time chat systems.",
  keywords: [
    "MERN Stack Developer",
    "Full Stack Engineer",
    "React Developer",
    "Node.js Developer",
    "MongoDB",
    "Socket.io",
    "Real-Time Systems",
    "Avishkumar Patel",
  ],
  authors: [{ name: "Avishkumar Patel" }],
  openGraph: {
    title: "Avishkumar Patel | Full Stack Engineer",
    description: "Building scalable, real-time full-stack applications with production-grade architecture.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avishkumar Patel | Full Stack Engineer",
    description: "MERN Stack Developer · Real-Time Systems Builder",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
move page to app folder
