import SiteContent from "@/components/common/site-content";
import TopArticle from "@/app/articles/top-article";
import Article from "./other-article";

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

            <div className="grid grid-cols-3 gap-[42px] py-[76px]">
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
        </SiteContent>
    );
}
