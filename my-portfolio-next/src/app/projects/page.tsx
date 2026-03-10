import ProjectsPage from "./page_client";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Projects",
    description: "A showcase of my recent web development projects, ranging from e-commerce platforms to AI-powered SaaS solutions.",
});

export default function Page() {
    return <ProjectsPage />;
}
