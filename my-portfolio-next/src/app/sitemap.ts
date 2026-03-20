import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import en from "@/locales/en.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        '',
        '/about',
        '/projects',
        '/casestudy',
        '/skills',
        '/contact',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const caseStudyRoutes = en.projects.items.map((project) => ({
        url: `${BASE_URL}/casestudy/${project.id}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...staticRoutes, ...caseStudyRoutes];
}
