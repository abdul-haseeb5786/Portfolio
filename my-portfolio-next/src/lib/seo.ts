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
    description = "Hi, I'm Abdul Haseeb, a MERN Stack Developer skilled in React, Node.js, MongoDB & Express. Check out my portfolio & projects!",
    image = "/Portofolio.png?v=3",
    icons = {
        icon: "/Adobe-Express-file.png?v=3",
        apple: "/Adobe-Express-file.png?v=3",
    },
    noIndex = false,
}: MetadataProps = {}): Metadata {
    const pageTitle = title
        ? `${title} | Abdul Haseeb`
        : "Abdul Haseeb Portfolio - MERN Stack Developer | React, Node.js, MongoDB";

    return {
        title: pageTitle,
        description,
        keywords: [
            "MERN Stack",
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "Web Development",
            "Portfolio",
            "Freelancer",
            "Abdul Haseeb",
            "Software Engineer",
            "Full Stack Developer"
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
        icons,
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
