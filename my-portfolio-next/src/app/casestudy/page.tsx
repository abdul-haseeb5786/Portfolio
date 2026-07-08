import CaseStudyListPage from "./page_client";
import { constructMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = constructMetadata({
    title: "Project Case Studies",
    description: "Explore detailed case studies of Abdul Haseeb's AI engineering work in automation, RAG, and product-focused software.",
    canonical: "/casestudy",
});

export default function Page() {
    return <CaseStudyListPage />;
}
