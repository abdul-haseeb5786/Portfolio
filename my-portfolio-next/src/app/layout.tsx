import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from '@vercel/analytics/next';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { constructMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = constructMetadata();

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Haseeb",
  url: "https://abdulhaseeb-portfolio.vercel.app/",
  image: "https://abdulhaseeb-portfolio.vercel.app/my-profile-pic.jpg",
  jobTitle: "MERN Stack Developer",
  sameAs: [
    "https://www.linkedin.com/in/abdul-haseeb200",
    "https://github.com/abdul-haseeb5786",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Abdul Haseeb Portfolio",
  url: "https://abdulhaseeb-portfolio.vercel.app/",
  author: "Abdul Haseeb",
  description: "Portfolio of Abdul Haseeb, a MERN Stack Developer focusing on React, Node.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main id="main-content">
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
