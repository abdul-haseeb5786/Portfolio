import CaseStudyListPage from "./page_client";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Project Case Studies",
    description: "Explore detailed case studies of my most impactful work, including furniture e-commerce, AI assistants, and management systems.",
});

export default function Page() {
    return <CaseStudyListPage />;
}
