import { Button } from "./button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

function CTAButton({ children }: { children: React.ReactNode }) {
    return (
        <Button className="w-fit">
            <Link href="/" className="flex items-center ">
                <span className="pl-4 pr-2.5 x-2">{children}</span>
                <span className="rounded-full w-8 h-8 p-0 bg-white-15 flex items-center justify-center">
                    <MoveRight className="w-4 h-4" />
                </span>
            </Link>
        </Button>
    );
}

function CTAButtonSecondary({ children }: { children: React.ReactNode }) {
    return (
        <Link
            href="/"
            className="text-primary font-primary flex items-center w-fit onhover:underline"
        >
            <span className="pr-2.5">{children}</span>
            <MoveRight className="w-4 h-4" />
        </Link>
    );
}

export { CTAButton, CTAButtonSecondary };
