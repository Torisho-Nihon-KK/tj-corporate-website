import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "./button";
import { Heading } from "./heading";

export default function CallToAction({
    className = "my-16",
}: {
    className?: string;
}) {
    return (
        <div className={`align-center text-center ${className}`}>
            <Heading className="pb-6" mobileSize="md">
                ITで困ったら、
                <br className="block md:hidden" />
                いつでも呼んでください
            </Heading>
            <Button>
                <Link href="/contact" className="flex items-center ">
                    <span className="pl-4 pr-2.5 x-2">
                        お問い合わせはこちら
                    </span>
                    <span className="rounded-full w-8 h-8 p-0 bg-white-15 flex items-center justify-center">
                        <MoveRight className="w-4 h-4" />
                    </span>
                </Link>
            </Button>
        </div>
    );
}
