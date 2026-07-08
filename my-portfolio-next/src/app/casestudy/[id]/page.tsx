import CaseStudyDetails from "./page_client";
import { constructMetadata } from "@/lib/seo";
import en from "@/locales/en.json";
import { Metadata } from "next";

interface Props {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = en.projects.items.find((p) => p.id === id);

    if (!project) {
        return constructMetadata({
            title: "Project Not Found",
            description: "The requested project case study could not be found.",
        });
    }

    return constructMetadata({
        title: `${project.title} Case Study`,
        description: `${project.description} A case study by Abdul Haseeb, an AI Engineer building agentic systems and automation products.`,
        image: project.image,
        canonical: `/casestudy/${project.id}`,
    });
}

export default async function Page() {
    return <CaseStudyDetails />;
}
