"use client";

import { cn } from "@/lib/utils";

interface TextProps {
    size?: "md" | "base" | "lg" | "4xl";
    className?: string;
    fontSize?: number;
    children: React.ReactNode;
}

export function Text({
    className = "",
    size = "base",
    fontSize,
    children,
}: TextProps) {
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
        <p
            className={cn(
                "font-secondary text-justify-auto",
                sizeNormalMobileClass,
                sizeNormalClass,
                classNames,
                lineHeight
            )}
            style={fontSize ? { fontSize: `${fontSize}px` } : {}}
        >
            {children}
        </p>
    );
}
