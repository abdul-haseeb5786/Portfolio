import Navbar from "@/components/navbar";
import Skills from "@/components/skills";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "My Skills",
    description: "Explore the technical expertise and technologies Abdul Haseeb uses to build high-performance MERN stack applications.",
});

export default function SkillsPage() {
    return (
        <main className="pt-20">
            <Navbar />
            <Skills />
        </main>
    );
}
