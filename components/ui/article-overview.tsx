import { Card, CardContent } from "./card";
import { Heading } from "./heading";
import { Text } from "./text";
import { CTAButtonSecondary } from "./cta-button";
import Image from "next/image";

export type ArticleOverviewProps = {
    slug: string;
    title: string;
    date: string;
    authorName: string;
    timeToRead: number;
    description: string;
    thumbnailSrc?: string;
};

export default function ArticleOverview({
    title,
    date,
    authorName,
    timeToRead,
    description,
    thumbnailSrc,
    slug,
}: ArticleOverviewProps) {
    return (
        <div className={`flex flex-col gap-[12px] h-full`}>
            <Card className="m-0 h-[325px]">
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
                <div className="flex items-center">
                    <Text className="bg-secondary px-[10px] py-1 rounded-full mr-2 ">
                        {authorName} 書
                    </Text>
                    <Text>
                        {date} ・ {timeToRead}分で読めます
                    </Text>
                </div>
                <div>
                    <Heading lineHeight={1.2}>{title}</Heading>
                </div>
                <div>
                    {description.split("\n").map((line, idx) => (
                        <Text className="p-0" key={idx}>
                            {line}
                        </Text>
                    ))}
                </div>
                <CTAButtonSecondary href={`/article/${slug}`}>
                    続きを読む
                </CTAButtonSecondary>
            </div>
        </div>
    );
}
