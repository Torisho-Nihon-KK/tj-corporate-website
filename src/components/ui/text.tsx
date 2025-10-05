"use client";

import { cn } from "@/lib/utils";

interface TextProps {
    size?: "md" | "base";
    className?: string;
    //   fontSize?: number;
    children: React.ReactNode;
}

export function Text({
    className = "",
    size = "base",
    //   fontSize,
    children,
}: TextProps) {
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

    return (
        <p
            className={cn(
                "font-secondary text-justify-auto",
                sizeNormalMobileClass,
                sizeNormalClass,
                classNames,
                lineHeight
            )}
        >
            {children}
        </p>
    );
}
