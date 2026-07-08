import type { Metadata } from "next";
import {
  Archivo_Black,
  Fraunces,
  Geist,
  Geist_Mono,
  Space_Grotesk,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import "@/styles/editorial.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from '@vercel/analytics/next';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { constructMetadata, BASE_URL } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const displayFont = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const groteskFont = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const serifFont = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
});

const editorialMono = JetBrains_Mono({
  variable: "--font-mono-editorial",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Haseeb",
  url: `${BASE_URL}/`,
  image: `${BASE_URL}/Portofolio.png?v=3`,
  jobTitle: "AI Engineer",
  description: "AI Engineer building agentic AI systems, LLM workflows, RAG applications, voice agents, and automation platforms.",
  knowsAbout: [
    "Agentic AI",
    "Large Language Models",
    "RAG Applications",
    "Voice Agents",
    "Automation Systems",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  sameAs: [
    "https://www.linkedin.com/in/abdul-haseeb200",
    "https://github.com/abdul-haseeb5786",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abdul Haseeb Portfolio",
  url: `${BASE_URL}/`,
  author: "Abdul Haseeb",
  description: "Portfolio of Abdul Haseeb, an AI Engineer building agentic systems, RAG applications, voice agents, and automation products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} ${groteskFont.variable} ${serifFont.variable} ${editorialMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main id="main-content" className="pt-[88px] md:pt-[92px]">
              {children}
            </main>
            <Analytics />
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
        <JsonLd data={personJsonLd} />
        <JsonLd data={websiteJsonLd} />
      </body>
    </html>
  );
}
