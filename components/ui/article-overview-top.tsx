import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { CTAButton } from "@/components/ui/cta-button";
import { ArticleOverviewProps } from "./article-overview";
import Image from "next/image";

export default function TopArticleOverview({
    title,
    date,
    authorName,
    timeToRead,
    description,
    thumbnailSrc,
    slug,
}: ArticleOverviewProps) {
    return (
        <div className={`grid grid-cols-3 gap-[42px] items-center`}>
            <Card className="m-0 h-[400px] col-span-2">
                <CardContent className="p-0 h-full">
                    <div className="relative h-full w-full">
                        {thumbnailSrc && (
                            <Image
                                src={thumbnailSrc}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        )}
                    </div>
                </CardContent>
            </Card>
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                        <Text className="bg-secondary px-[10px] py-1 rounded-full mr-2">
                            {authorName} 書
                        </Text>
                        <Text>
                            {date} ・ {timeToRead}分で読めます
                        </Text>
                    </div>
                </div>
                <div>
                    <Heading lineHeight={1.2}>{title}</Heading>
                </div>
                <div>
                    <Text>{description}</Text>
                </div>
                <CTAButton href={`/article/${slug}`}>続きを読む</CTAButton>
            </div>
        </div>
    );
}
