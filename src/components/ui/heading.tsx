"use client";

import { cn } from "@/lib/utils";

/**
 * Heading component.
 * @param {size} size - The size of the heading.
 * @param {mobileSize} mobileSize - The size of the heading on mobile devices.
 * @param {className} className - Additional CSS classes.
 * @param {lineHeight} lineHeight - The line height of the heading. Default is 1.
 */
interface HeadingProps {
    size?: "xl" | "lg" | "md" | "base" | "sm";
    mobileSize?: "xl" | "lg" | "md" | "base" | "sm";
    className?: string;
    lineHeight?: number;
    children: React.ReactNode;
}

export function Heading({
    className = "",
    size = "base",
    mobileSize,
    //   fontSize,
    lineHeight = 1,
    children,
}: HeadingProps) {
    const sizeHeadingMobileClass = {
        xl: "text-heading-mobile-xl",
        lg: "text-heading-mobile-lg",
        md: "text-heading-mobile-md",
        base: "text-heading-mobile-base",
        sm: "text-heading-mobile-sm",
    }[mobileSize ?? size];

    const sizeHeadingClass = {
        xl: "md:text-heading-xl",
        lg: "md:text-heading-lg",
        md: "md:text-heading-md",
        base: "md:text-heading-base",
        sm: "md:text-heading-sm",
    }[size];

    const classNames = className;

    return (
        <h3
            className={cn(
                sizeHeadingClass,
                sizeHeadingMobileClass,
                "font-primary",
                classNames
            )}
            style={{ lineHeight: lineHeight }}
        >
            {children}
        </h3>
    );
}
