import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import SiteContent from "@/components/common/site-content";

import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <main>
      <section>
        <Header />
        <SiteContent>
          <Card>
            <CardContent>
              <SiteContent>This is a privacy message.</SiteContent>
            </CardContent>
          </Card>
        </SiteContent>
        <Footer />
      </section>
    </main>
  );
}
