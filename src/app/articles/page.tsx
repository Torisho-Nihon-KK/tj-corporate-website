import SiteContent from "@/components/common/site-content";
import TopArticle from "@/app/articles/top-article";
import Article from "./other-article";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import Pagination from "./pagination";
import CallToAction from "../(landing)/call-to-action";

export default function ArticlesPage() {
    return (
        <SiteContent>
            <TopArticle
                title="極側へ育過責キトネ周高テモ申周リトめと学"
                date="2025年9月5日"
                authorName="池田"
                timeToRead={8}
                description="64速かイきい検三名内くきぱだ単95入そドざゅ見日チルホネ都象カ賛治ぜゅす梨堂ほばそう振記...."
            />
            <div className="flex items-center gap-[13px] justify-center mt-[120px]">
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
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-[42px] py-[76px]">
                <Article
                    title="極側へ育過責キトネ周高テモ申周リトめと学"
                    date="2025年9月5日"
                    authorName="池田"
                    timeToRead={8}
                    description="64速かイきい検三名内くきぱだ単95入そドざゅ見日チルホネ都象カ賛治ぜゅす梨堂ほばそう振記...."
                />

                <Article
                    title="極側へ育過責キトネ周高テモ申周リトめと学"
                    date="2025年9月5日"
                    authorName="池田"
                    timeToRead={8}
                    description="64速かイきい検三名内くきぱだ単95入そドざゅ見日チルホネ都象カ賛治ぜゅす梨堂ほばそう振記...."
                />

                <Article
                    title="極側へ育過責キトネ周高テモ申周リトめと学"
                    date="2025年9月5日"
                    authorName="池田"
                    timeToRead={8}
                    description="64速かイきい検三名内くきぱだ単95入そドざゅ見日チルホネ都象カ賛治ぜゅす梨堂ほばそう振記...."
                />

                <Article
                    title="極側へ育過責キトネ周高テモ申周リトめと学"
                    date="2025年9月5日"
                    authorName="池田"
                    timeToRead={8}
                    description="64速かイきい検三名内くきぱだ単95入そドざゅ見日チルホネ都象カ賛治ぜゅす梨堂ほばそう振記...."
                />

                <Article
                    title="極側へ育過責キトネ周高テモ申周リトめと学"
                    date="2025年9月5日"
                    authorName="池田"
                    timeToRead={8}
                    description="64速かイきい検三名内くきぱだ単95入そドざゅ見日チルホネ都象カ賛治ぜゅす梨堂ほばそう振記...."
                />

                <Article
                    title="極側へ育過責キトネ周高テモ申周リトめと学"
                    date="2025年9月5日"
                    authorName="池田"
                    timeToRead={8}
                    description="64速かイきい検三名内くきぱだ単95入そドざゅ見日チルホネ都象カ賛治ぜゅす梨堂ほばそう振記...."
                />
            </div>

            <Pagination />
            <CallToAction className="my-32" />
        </SiteContent>
    );
}
