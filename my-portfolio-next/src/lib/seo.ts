import { Metadata } from "next";

export const BASE_URL = "https://abdulhaseeb-portfolio.vercel.app";

interface MetadataProps {
    title?: string;
    description?: string;
    image?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    canonical?: string;
}

export function     constructMetadata({
    title,
    description = "Abdul Haseeb is an AI Engineer building agentic AI systems, LLM workflows, RAG applications, voice agents, and automation platforms for modern products.",
    image = "/Portofolio.png?v=3",
    icons = {
        icon: "/favicon.png",
        apple: "/icon-192x192.png",
    },
    noIndex = false,
    canonical,
}: MetadataProps = {}): Metadata {
    const pageTitle = title
        ? `${title} | Abdul Haseeb`
        : "Abdul Haseeb | AI Engineer | Agentic AI & Automation";
    const resolvedCanonical = canonical ? new URL(canonical, BASE_URL).toString() : BASE_URL;

    return {
        title: pageTitle,
        description,
        manifest: "/manifest.json",
        applicationName: "Abdul Haseeb Portfolio",
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
            "LLM Engineer",
            "RAG Applications",
            "Voice Agents",
            "AI Automation",
            "Automation Systems",
            "Next.js",
            "TypeScript",
            "Python",
            "React",
            "Node.js",
            "MongoDB",
            "Portfolio",
            "Abdul Haseeb",
            "Software Engineer",
        ],
        authors: [{ name: "Abdul Haseeb" }],
        creator: "Abdul Haseeb",
        metadataBase: new URL(BASE_URL),
        alternates: {
            canonical: resolvedCanonical,
        },
        openGraph: {
            title: pageTitle,
            description,
            url: resolvedCanonical,
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
        },
        icons: {
            ...(icons as object),
            icon: "/favicon.png",
            shortcut: "/favicon.png",
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
