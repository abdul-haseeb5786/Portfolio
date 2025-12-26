import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://abdulhaseeb-portfolio.vercel.app"),
  title: {
    default: "Abdul Haseeb Portfolio - MERN Stack Developer | React, Node.js, MongoDB",
    template: "%s | Abdul Haseeb",
  },
  description: "Hi, I'm Abdul Haseeb, a MERN Stack Developer skilled in React, Node.js, MongoDB & Express. Check out my portfolio & projects!",
  keywords: ["MERN Stack", "React", "Node.js", "MongoDB", "Express", "Web Development", "Portfolio", "Freelancer"],
  authors: [{ name: "Abdul Haseeb" }],
  creator: "Abdul Haseeb",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Abdul Haseeb - MERN Stack Developer | MongoDB, ExpressJs, ReactJS, Node.js",
    description: "Explore my portfolio showcasing MERN stack projects and expertise in web development.",
    url: "https://abdulhaseeb-portfolio.vercel.app/",
    siteName: "Abdul Haseeb Portfolio",
    images: [
      {
        url: "/Portofolio.png?v=3", // Assuming user will place this in public/ or uses the remote URL
        width: 1200,
        height: 630,
        alt: "Abdul Haseeb MERN Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Haseeb - MERN Stack Developer | MongoDB, ExpressJs, ReactJS, Node.js",
    description: "Showcasing expertise in MERN stack web development.",
    images: ["/Portofolio.png?v=3"],
    // site: "@yourtwitterhandle", // User needs to provide this or we comment it out
  },
  icons: {
    icon: "/Adobe-Express-file.png?v=3",
    apple: "/Adobe-Express-file.png?v=3",
  },
};

const jsonLd = {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
