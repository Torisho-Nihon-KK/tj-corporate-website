import matter from "gray-matter";

import { readFile } from "node:fs/promises";

import { Heading } from "@/components/ui/heading";
import SiteContent from "@/components/common/site-content";
import ArticleOverview from "@/components/ui/article-overview";
import Article from "@/components/ui/article";
import type { ArticleProps } from "@/components/ui/article";
import { getArticleSlugs, getOtherArticlesExceptSlug } from "@/lib/articles";

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    // const { default: Post } = await import(`@/content/${slug}.mdx`);

    const rawContent = readFile(`./content/${slug}.mdx`, "utf8");

    const { content, data } = matter(await rawContent);

    const otherArticles = await getOtherArticlesExceptSlug(slug);

    let articleData: ArticleProps;

    try {
        articleData = { ...data } as ArticleProps;
    } catch (error) {
        console.error("Error assigning data to articleData:", error);
        throw error; // Re-throw the error after logging it
    }

    return (
        <SiteContent>
            <Article
                title={articleData.title}
                date={articleData.date}
                authorName={articleData.authorName}
                timeToRead={articleData.timeToRead}
                thumbnailSrc={articleData.thumbnailSrc}
                markdownContent={content}
            />

            <Heading className="py-[28px]" size="sm">
                次を読む
            </Heading>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[42px]">
                {otherArticles.slice(0, 3).map((a) => (
                    <ArticleOverview
                        key={a.slug}
                        slug={a.slug}
                        title={a.title}
                        date={a.date}
                        authorName={a.authorName}
                        timeToRead={a.timeToRead}
                        description={a.description}
                        thumbnailSrc={a.thumbnailSrc}
                    />
                ))}
            </div>
        </SiteContent>
    );
}

export async function generateStaticParams() {
    const slugs = await getArticleSlugs();
    return slugs.map((s) => ({ slug: s }));
}

export const dynamicParams = false;
