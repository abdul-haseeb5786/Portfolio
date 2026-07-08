import { Metadata } from "next";

export const BASE_URL = "https://abdulhaseeb-portfolio.vercel.app";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
}

export function constructMetadata({
    title,
    description = "Hi, I'm Abdul Haseeb, an AI Engineer specialized in production-ready agentic architectures, custom voice agents, RAG applications, and low-latency systems. Check out my portfolio & projects!",
    image = "/Portofolio.png?v=3",
    icons = {
        icon: "/Adobe-Express-file.png?v=3",
        apple: "/Adobe-Express-file.png?v=3",
    },
    noIndex = false,
}: MetadataProps = {}): Metadata {
    const pageTitle = title
        ? `${title} | Abdul Haseeb`
        : "Abdul Haseeb Portfolio - AI Engineer | Agentic Systems & Automation";

    return {
        title: pageTitle,
        description,
        manifest: "/manifest.json",
        appleWebApp: {
            capable: true,
            statusBarStyle: "default",
            title: pageTitle,
        },
        formatDetection: {
            telephone: false,
        },
        keywords: [
            "AI Engineer",
            "Agentic AI",
            "RAG Applications",
            "AI Automation",
            "MERN Stack",
            "React",
            "Node.js",
            "MongoDB",
            "Web Development",
            "Portfolio",
            "Abdul Haseeb",
            "Software Engineer"
        ],
        authors: [{ name: "Abdul Haseeb" }],
        creator: "Abdul Haseeb",
        metadataBase: new URL(BASE_URL),
        openGraph: {
            title: pageTitle,
            description,
            url: "./",
            siteName: "Abdul Haseeb Portfolio",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: pageTitle,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: pageTitle,
            description,
            images: [image],
            creator: "@abdulhaseeb", // Placeholder if not known
        },
        icons: {
            ...(icons as object),
            apple: "/icon-192x192.png",
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
            googleBot: {
                index: !noIndex,
                follow: !noIndex,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
    };
}
