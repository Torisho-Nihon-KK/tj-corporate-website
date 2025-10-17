import SiteContent from "@/components/common/site-content";
import TopArticleOverview from "@/components/ui/article-overview-top";
import ArticleOverview from "@/components/ui/article-overview";
import Pagination from "./pagination";
import CallToAction from "@/components/ui/call-to-action";
import { getAllArticles } from "@/lib/articles";

export default async function ArticlesPage({
    searchParams,
}: {
    searchParams?: { page?: string };
}) {
    const articles = await getAllArticles();
    const articlesPerPage: number = 6;

    const searchParam = await searchParams;
    const currentPage: number = Number(searchParam?.page) || 1;
    const totalPages: number = Math.ceil(articles.length / articlesPerPage);

    return (
        <SiteContent>
            {articles.length > 0 && (
                <TopArticleOverview
                    slug={articles[0].slug}
                    title={articles[0].title}
                    date={articles[0].date}
                    authorName={articles[0].authorName}
                    timeToRead={articles[0].timeToRead}
                    thumbnailSrc={articles[0].thumbnailSrc}
                    description={articles[0].description}
                />
            )}

            {/* <div className="flex items-center gap-[13px] justify-center mt-[120px]">
                <Button variant="active" size="lg">
                    <Text size="lg">極側(30)</Text>
                </Button>
                <Button variant="inactive" size="lg">
                    <Text size="lg">育過責(14)</Text>
                </Button>
                <Button variant="inactive" size="lg">
                    <Text size="lg">周高(9)</Text>
                </Button>
                <Button variant="inactive" size="lg">
                    <Text size="lg">モ申(3)</Text>
                </Button>
                <Button variant="inactive" size="lg">
                    <Text size="lg">申周(8)</Text>
                </Button>
            </div> */}

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[42px] py-[76px]">
                {articles
                    .slice(
                        (currentPage - 1) * articlesPerPage + 1,
                        currentPage * articlesPerPage + 1
                    )
                    .map((a) => (
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

            <Pagination currentPage={currentPage} totalPages={totalPages} />
            <CallToAction className="my-32" />
        </SiteContent>
    );
}
