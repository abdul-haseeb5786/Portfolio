import ProjectsPage from "./page_client";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Projects",
    description: "Explore Abdul Haseeb's AI engineering projects in agentic AI, automation, RAG, voice agents, and full-stack product delivery.",
    canonical: "/projects",
});

export default function Page() {
    return <ProjectsPage />;
}
