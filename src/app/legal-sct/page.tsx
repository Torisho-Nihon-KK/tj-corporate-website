import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import SiteContent from "@/components/common/site-content";

import { Card, CardContent } from "@/components/ui/card";

export default function Legal() {
  return (
    <main>
      <section>
        <Header />
        <SiteContent>
          <Card>
            <CardContent>
              <SiteContent>This is a legal message.</SiteContent>
            </CardContent>
          </Card>
        </SiteContent>
        <Footer />
      </section>
    </main>
  );
}
