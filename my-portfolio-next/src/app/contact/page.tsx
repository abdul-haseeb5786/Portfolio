import Contact from "@/components/contact";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
    title: "Contact Me",
    description: "Contact Abdul Haseeb for AI engineering, automation, voice agents, and product delivery opportunities.",
    canonical: "/contact",
});

export default function ContactPage() {
    return <Contact />;
}
