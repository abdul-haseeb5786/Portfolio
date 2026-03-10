import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '',
        '/about',
        '/projects',
        '/skills',
        '/contact',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
