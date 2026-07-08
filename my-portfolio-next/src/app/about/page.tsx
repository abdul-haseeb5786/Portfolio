import About from "@/components/about";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "About Me",
    description: "Learn about Abdul Haseeb, an AI Engineer building agentic AI systems, LLM workflows, RAG applications, and production-grade automation.",
    canonical: "/about",
});

export default function AboutPage() {
    return <About />;
}
