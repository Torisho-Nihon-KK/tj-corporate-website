import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/text";

interface BlockQuoteProps {
    size?: "md" | "base" | "lg" | "4xl";
    className?: string;
    fontSize?: number;
    children: React.ReactNode;
}

export function BlockQuote({
    className = "",
    size = "base",
    fontSize,
    children,
}: BlockQuoteProps) {
    const sizeNormalMobileClass = {
        "4xl": "text-normal-mobile-4xl",
        lg: "text-normal-mobile-lg",
        md: "text-normal-mobile-md",
        base: "text-normal-mobile-base",
    }[size];

    const sizeNormalClass = {
        "4xl": "md:text-normal-4xl",
        lg: "md:text-normal-lg",
        md: "md:text-normal-md",
        base: "md:text-normal-base",
    }[size];

    const lineHeight = "leading-[150%]";
    const classNames = className;

    return (
        <blockquote
            className={cn(
                " font-secondary text-justify-auto pl-4 border-l-[.25em] border-solid border-muted italic",
                sizeNormalMobileClass,
                sizeNormalClass,
                classNames,
                lineHeight
            )}
            style={fontSize ? { fontSize: `${fontSize}px` } : {}}
        >
            {children}
        </blockquote>
    );
}
