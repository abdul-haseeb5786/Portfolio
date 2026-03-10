import HomeContent from "./HomeContent";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata();

export default function Home() {
    return <HomeContent />;
}
