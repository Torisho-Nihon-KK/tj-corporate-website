import Footer from "@/components/banners/footer";
import Header from "@/components/banners/header";
import SiteContent from "@/components/common/site-content";
import { Card, CardContent } from "@/components/ui/card";

export default function ArticlesPage() {
    return (
        <SiteContent>
            <div className="grid-cols-2-1 gap-[75px]">
                <Card>
                    <CardContent className="p-12"></CardContent>
                </Card>
            </div>

            <div>Articles Page</div>
        </SiteContent>
    );
}
