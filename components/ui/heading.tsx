import { cn } from "@/lib/utils";

/**
 * Heading component.
 * @param {size} size - The size of the heading.
 * @param {mobileSize} mobileSize - The size of the heading on mobile devices.
 * @param {className} className - Additional CSS classes.
 * @param {lineHeight} lineHeight - The line height of the heading. Default is 1.
 */
interface HeadingProps {
    size?: "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "xs" | "2xs";
    mobileSize?: "2xl" | "xl" | "lg" | "md" | "base" | "sm" | "xs" | "2xs";
    className?: string;
    lineHeight?: number;
    children: React.ReactNode;
    type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    id?: string;
}

export function Heading({
    className = "",
    size = "base",
    mobileSize,
    lineHeight = 1,
    children,
    type = "h3",
    id = "",
}: HeadingProps) {
    const sizeHeadingMobileClass = {
        "2xl": "text-heading-mobile-2xl",
        xl: "text-heading-mobile-xl",
        lg: "text-heading-mobile-lg",
        md: "text-heading-mobile-md",
        base: "text-heading-mobile-base",
        sm: "text-heading-mobile-sm",
        xs: "text-heading-mobile-xs",
        "2xs": "text-heading-mobile-2xs",
    }[mobileSize ?? size];

    const sizeHeadingClass = {
        "2xl": "md:text-heading-2xl",
        xl: "md:text-heading-xl",
        lg: "md:text-heading-lg",
        md: "md:text-heading-md",
        base: "md:text-heading-base",
        sm: "md:text-heading-sm",
        xs: "md:text-heading-xs",
        "2xs": "md:text-heading-2xs",
    }[size];

    const classNames = className;

    switch (type) {
        case "h1":
            return (
                <h1
                    className={cn(
                        sizeHeadingClass,
                        sizeHeadingMobileClass,
                        "font-primary scroll-mt-[60px]",
                        classNames
                    )}
                    id={id}
                    style={{
                        lineHeight: lineHeight,
                    }}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    className={cn(
                        sizeHeadingClass,
                        sizeHeadingMobileClass,
                        "font-primary scroll-mt-[60px]",
                        classNames
                    )}
                    id={id}
                    style={{
                        lineHeight: lineHeight,
                    }}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    className={cn(
                        sizeHeadingClass,
                        sizeHeadingMobileClass,
                        "font-primary scroll-mt-[60px]",
                        classNames
                    )}
                    id={id}
                    style={{
                        lineHeight: lineHeight,
                    }}
                >
                    {children}
                </h3>
            );
    }
}
