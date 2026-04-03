import { MetadataRoute } from "next";

const BASE_URL = "https://www.skalisys.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/produits", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/actualite", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { path: "/mentions-legales", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/politique-confidentialite", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return routes.flatMap(({ path, priority, changeFrequency }) => [
    // French (default)
    {
      url: `${BASE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          fr: `${BASE_URL}${path}`,
          en: `${BASE_URL}/en${path}`,
        },
      },
    },
  ]);
}