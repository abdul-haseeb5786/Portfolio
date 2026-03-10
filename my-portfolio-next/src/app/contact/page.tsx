import Navbar from "@/components/navbar";
import Contact from "@/components/contact";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Contact Me",
    description: "Get in touch with Abdul Haseeb for web development projects, collaborations, or just to say hi.",
});

export default function ContactPage() {
    return (
        <main className="pt-20">
            <Navbar />
            <Contact />
        </main>
    );
}
