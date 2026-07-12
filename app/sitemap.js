import { works } from '@/lib/data';

export default function sitemap() {
  const base = 'https://muhammad-asad.vercel.app';

  const staticRoutes = ['', '/about', '/service', '/works', '/credentials', '/contact'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));

  const workRoutes = works.map((w) => ({
    url: `${base}/works/${w.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes];
}
