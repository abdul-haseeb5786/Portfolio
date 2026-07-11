import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';
import en from '@/locales/en.json';

const buildRoute = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] = 'monthly'
) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency,
    priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        buildRoute('', 1.0, 'weekly'),
        buildRoute('/about', 0.9, 'monthly'),
        buildRoute('/projects', 0.95, 'weekly'),
        buildRoute('/casestudy', 0.95, 'weekly'),
        buildRoute('/skills', 0.85, 'monthly'),
        buildRoute('/contact', 0.8, 'monthly'),
    ];

    const caseStudyRoutes = (en.projects?.items ?? []).map((project) =>
        buildRoute(`/casestudy/${project.id}`, 0.75, 'monthly')
    );

    return [...staticRoutes, ...caseStudyRoutes];
}
