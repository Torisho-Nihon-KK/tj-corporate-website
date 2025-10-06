import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface CardProps {
    iconMaxHeight: number;
    iconSrc: string;
    iconAlt: string;
    header?: string;
    children: React.ReactNode;
}

export default function CardWithCaption({
    children,
    iconMaxHeight,
    iconSrc,
    iconAlt,
    header = "",
}: CardProps) {
    return (
        <Card className="m-0 h-auto">
            <CardContent className="flex gap-[50px] items-center">
                <div className="flex-shrink-0">
                    <Image
                        src={iconSrc}
                        alt={iconAlt}
                        width={0}
                        height={0}
                        style={{
                            width: "auto",
                            maxHeight: iconMaxHeight,
                            margin: "auto",
                        }}
                    />
                </div>
                <div className="flex flex-col gap-3 justify-end ">
                    <Heading>{header}</Heading>
                    <Text>{children}</Text>
                </div>
            </CardContent>
        </Card>
    );
}
