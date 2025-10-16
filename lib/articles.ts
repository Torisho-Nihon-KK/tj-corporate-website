import { readdir, readFile } from "node:fs/promises";
import path from "path";
import matter from "gray-matter";
import { ArticleOverviewProps } from "@/components/ui/article-overview";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function getAllArticles(): Promise<ArticleOverviewProps[]> {
    const files = await readdir(CONTENT_DIR);
    const mdFiles = files.filter(
        (f) => f.endsWith(".md") || f.endsWith(".mdx")
    );

    const articles = await Promise.all(
        mdFiles.map(async (file) => {
            const slug = file.replace(/\.mdx?$/, "");
            const raw = await readFile(path.join(CONTENT_DIR, file), "utf8");
            const { data, content } = matter(raw);

            const meta: ArticleOverviewProps = {
                slug,
                title: String(data.title ?? slug),
                date: String(data.date ?? new Date().toISOString()),
                authorName: data.authorName ?? undefined,
                timeToRead: data.timeToRead ?? undefined,
                thumbnailSrc: data.thumbnailSrc ?? undefined,
                description:
                    data.description ??
                    content.replace(/\s+/g, " ").slice(0, 240).trim(),
            };

            return meta;
        })
    );

    // sort by date desc
    return articles.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export async function getOtherArticlesExceptSlug(
    slug: string
): Promise<ArticleOverviewProps[]> {
    const articles = await getAllArticles();
    return articles.filter((a) => a.slug !== slug);
}

export async function getArticleSlugs(): Promise<string[]> {
    const files = await readdir(CONTENT_DIR);
    const mdFiles = files.filter(
        (f) => f.endsWith(".md") || f.endsWith(".mdx")
    );
    return mdFiles.map((file) => file.replace(/\.mdx?$/, ""));
}
