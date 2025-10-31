import Markdown from "react-markdown";
import { Heading } from "./heading";
import { Text } from "./text";
import Image from "next/image";
import { List, ListItem } from "./list";
import Link from "next/link";
import { remarkHeadingId } from "remark-custom-heading-id";
import remarkGfm from "remark-gfm";

import { BlockQuote } from "./blockquote";

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
    const formattedDate = new Date(date).toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    if (formattedDate === "Invalid Date") {
        throw new Error(`Invalid date format: ${date}`);
    }

    return (
        <div>
            <div className="lg:px-[220px] flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center">
                        <Text className="bg-secondary px-[10px] py-1 rounded-full mr-2">
                            {authorName} 書
                        </Text>
                        <Text>
                            {formattedDate} ・ {timeToRead}
                            分で読めます
                        </Text>
                    </div>
                </div>
                <div>
                    <Heading size="md">{title}</Heading>
                </div>

                {thumbnailSrc && (
                    <div className="items-center justify-center h-[400px] overflow-hidden ">
                        <Image
                            src={thumbnailSrc}
                            alt={title}
                            width={1200}
                            height={400}
                            className="w-full h-auto"
                        />
                    </div>
                )}

                <div id="markdown-content">
                    <Markdown
                        remarkPlugins={[remarkHeadingId, remarkGfm]}
                        components={{
                            h1: ({ ...props }) => (
                                <Heading
                                    type="h1"
                                    className="mb-[1rem] mt-[1.5rem] pb-[9.6px] border-b border-[#d1d9e0b3]"
                                    lineHeight={1.25}
                                    size="base"
                                    id={props.id || ""}
                                >
                                    {props.children}
                                </Heading>
                            ),

                            h2: ({ ...props }) => (
                                <Heading
                                    type="h2"
                                    size="sm"
                                    className="pb-[9.6px] mt-[1.5rem] mb-[1rem] border-b border-[#d1d9e0b3]"
                                    lineHeight={1.25}
                                    id={props.id || ""}
                                >
                                    {props.children}
                                </Heading>
                            ),
                            h3: ({ ...props }) => (
                                <Heading
                                    type="h3"
                                    size="xs"
                                    className="pb-[8px] mt-[1.5rem] mb-[1rem]"
                                    id={props.id || ""}
                                >
                                    {props.children}
                                </Heading>
                            ),

                            p: ({ ...props }) => (
                                <Text className="mb-[1rem]" fontSize={16}>
                                    {props.children}
                                </Text>
                            ),

                            ul: ({ ...props }) => (
                                <List ordered={false} className="mb-[1rem]">
                                    {props.children}
                                </List>
                            ),

                            ol: ({ ...props }) => (
                                <List ordered={true} className="mb-[1rem]">
                                    {props.children}
                                </List>
                            ),
                            li: ({ ...props }) => (
                                <ListItem>{props.children}</ListItem>
                            ),

                            a: ({ ...props }) => (
                                <Link
                                    href={props.href || "#"}
                                    className="text-blue-600 underline"
                                >
                                    {props.children}
                                </Link>
                            ),

                            blockquote: ({ ...props }) => (
                                <BlockQuote className="mb-[1rem] pl-6">
                                    {props.children}
                                </BlockQuote>
                            ),

                            strong: ({ ...props }) => (
                                <strong className="font-bold">
                                    {props.children}
                                </strong>
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
