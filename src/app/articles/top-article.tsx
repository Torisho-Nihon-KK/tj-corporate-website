import { Card, CardContent } from "../../components/ui/card";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";
import { CTAButton } from "../../components/ui/cta-button";

type TopArticleProps = {
    title: string;
    date: string;
    authorName: string;
    timeToRead: number;
    description: string;
    className?: string;
};

export default function TopArticle({
    title,
    date,
    authorName,
    timeToRead,
    description,
    className = "",
}: TopArticleProps) {
    return (
        <div
            className={`grid grid-cols-3 gap-[42px] items-center ${className}`}
        >
            <Card className="m-0 h-[400px] col-span-2">
                <CardContent className="p-12">Image goes here</CardContent>
            </Card>
            <div className="flex flex-col gap-3">
                <div className="flex items-center">
                    <Text className="bg-secondary px-[10px] py-1 rounded-full mr-2">
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
                    <Text>{description}</Text>
                </div>
                <CTAButton>続きを読む</CTAButton>
            </div>
        </div>
    );
}
