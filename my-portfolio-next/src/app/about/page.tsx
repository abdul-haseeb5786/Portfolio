import About from "@/components/about";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "About Me",
    description: "Learn more about Abdul Haseeb, an AI Engineer specialized in creating modern web experiences and AI-driven solutions.",
});

export default function AboutPage() {
    return <About />;
}
