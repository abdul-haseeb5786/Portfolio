import { redirect } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetails({ params }: Props) {
    const { id } = await params;
    redirect(`/casestudy/${id}`);
}

