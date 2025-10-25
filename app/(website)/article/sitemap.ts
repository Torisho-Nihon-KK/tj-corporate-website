import { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

const BASE_URL = "https://www.torishojp.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await getAllArticles();

    return articles.map((article) => ({
        url: `${BASE_URL}/article/${article.slug}`,
        lastModified: article.date,
        priority: 0.5,
    }));
}
