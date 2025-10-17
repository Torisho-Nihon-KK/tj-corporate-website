import Markdown from "react-markdown";
import { Heading } from "./heading";
import { Text } from "./text";
import Image from "next/image";

export type ArticleProps = {
    title: string;
    date: string;
    authorName: string;
    timeToRead: number;
    thumbnailSrc?: string;
    markdownContent: string;
};

export default function Article({
    title,
    date,
    authorName,
    timeToRead,
    thumbnailSrc,
    markdownContent,
}: ArticleProps) {
    return (
        <div>
            <div className="lg:px-[220px] flex flex-col gap-4">
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
                <Heading size="md">{title}</Heading>
            </div>

            <div className="p-0 mt-[24px] mb-[42px] max-h-[400px] overflow-hidden rounded-lg">
                {thumbnailSrc && (
                    <div className="flex items-center justify-center h-[400px]">
                        <Image
                            src={thumbnailSrc}
                            alt={title}
                            width={1200}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>
                )}
            </div>

            <div className="lg:px-[220px] flex flex-col gap-4">
                <div id="markdown-content">
                    <Markdown
                        components={{
                            h2: ({ ...props }) => (
                                <Heading className="pb-[10px]">
                                    {props.children}
                                </Heading>
                            ),
                            p: ({ ...props }) => (
                                <Text className="pb-[24px]">
                                    {props.children}
                                </Text>
                            ),
                        }}
                    >
                        {markdownContent}
                    </Markdown>
                </div>
            </div>
        </div>
    );
}
