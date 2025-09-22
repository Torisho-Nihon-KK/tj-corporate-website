import { strapi } from "@strapi/client";

import Header from "@/components/common/header";
import SiteContent from "@/components/common/site-content";
import Footer from "@/components/common/footer";
import { Card, CardContent } from "@/components/ui/card";

export default async function Article({ params }: { params: { id: string } }) {
  const documentId = params.id;

  const client = strapi({
    baseURL: process.env.STRAPI_API_URL as string,
    auth: process.env.STRAPI_API_TOKEN as string,
  });

  const articles = client.collection("articles");

  try {
    const article = await articles.findOne(documentId);
    return (
      <main>
        <section>
          <Header />
          <SiteContent>
            <Card>
              <CardContent>
                <h2>{article.data.title}</h2>
                <div>{article.data.content}</div>
              </CardContent>
            </Card>
          </SiteContent>
          <Footer />
        </section>
      </main>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Error loading article.</div>;
  }
}
