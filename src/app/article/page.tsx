import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import SiteContent from "@/components/common/site-content";
import { strapi } from "@strapi/client";
// Documentation: https://docs.strapi.io/cms/api/client

const client = strapi({
  baseURL: process.env.STRAPI_API_URL as string,
  auth: process.env.STRAPI_API_TOKEN as string,
});

export default async function CMSPage() {
  const articles = client.collection("articles");

  // Fetch all english articles sorted by title
  const allArticles = await articles.find({
    // locale: "en",
    sort: "title",
  });

  return (
    <html>
      <Header />
      <SiteContent>
        <h1>CMS Articles</h1>
        <ul>
          {allArticles.data.map((article) => (
            <li key={article.documentId}>
              <a href={`/article/${article.documentId}`}>{article.title}</a>
            </li>
          ))}
        </ul>
      </SiteContent>
      <Footer />
    </html>
  );
}
