"use client";

import { cn } from "@/lib/utils";

interface ListProps {
    size?: "md" | "base";
    className?: string;
    //   fontSize?: number;
    children: React.ReactNode;
    ordered?: boolean;
}

export function List({
    className = "",
    size = "base",
    //   fontSize,
    children,
    ordered = false,
}: ListProps) {
    const sizeNormalMobileClass = {
        md: "text-normal-mobile-md",
        base: "text-normal-mobile-base",
    }[size];

    const sizeNormalClass = {
        md: "md:text-normal-md",
        base: "md:text-normal-base",
    }[size];

    const lineHeight = "leading-[150%]";
    const classNames = className;

    return ordered ? (
        <ol
            className={cn(
                "list-decimal list-inside font-secondary text-justify-auto",
                sizeNormalMobileClass,
                sizeNormalClass,
                classNames,
                lineHeight
            )}
        >
            {children}
        </ol>
    ) : (
        <ul
            className={cn(
                "list-disc list-inside font-secondary text-justify-auto",
                sizeNormalMobileClass,
                sizeNormalClass,
                classNames,
                lineHeight
            )}
        >
            {children}
        </ul>
    );
}

export function ListItem({ children }: { children: React.ReactNode }) {
    return <li>{children}</li>;
}
