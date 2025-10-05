"use client";

import { cn } from "@/lib/utils";

interface HeadingProps {
    size?: "lg" | "md" | "base" | "sm";
    mobileSize?: "lg" | "md" | "base" | "sm";
    className?: string;
    //   fontSize?: number;
    lineHeight?: number; // in percentage, e.g., 100%
    children: React.ReactNode;
}

export function Heading({
    className = "",
    size = "base",
    mobileSize,
    //   fontSize,
    lineHeight = 100,
    children,
}: HeadingProps) {
    const sizeHeadingMobileClass = {
        lg: "text-heading-mobile-lg",
        md: "text-heading-mobile-md",
        base: "text-heading-mobile-base",
        sm: "text-heading-mobile-sm",
    }[mobileSize ?? size];

    const sizeHeadingClass = {
        lg: "md:text-heading-lg",
        md: "md:text-heading-md",
        base: "md:text-heading-base",
        sm: "md:text-heading-sm",
    }[size];

    const lineHeightClass = `leading-[${lineHeight}%]`;
    const classNames = className;

    return (
        <h3
            className={cn(
                "font-primary",
                sizeHeadingClass,
                sizeHeadingMobileClass,
                lineHeightClass,
                classNames
            )}
        >
            {children}
        </h3>
    );
}
