import Navbar from "@/components/navbar";
import About from "@/components/about";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "About Me",
    description: "Learn more about Abdul Haseeb, a MERN Stack Developer specialized in creating modern web experiences and AI-driven solutions.",
});

export default function AboutPage() {
    return (
        <main className="pt-20">
            <Navbar />
            <About />
        </main>
    );
}
