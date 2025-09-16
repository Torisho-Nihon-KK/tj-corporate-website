"use client";

import { cn } from "@/lib/utils";

interface HeadingProps {
  size?: "lg" | "md" | "base" | "sm";
  mobileSize?: "lg" | "md" | "base" | "sm";
  className?: string;
  //   fontSize?: number;
  children: React.ReactNode;
}

export function Heading({
  className = "",
  size = "base",
  mobileSize,
  //   fontSize,
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

  const lineHeight = "leading-[100%]";
  const classNames = className;

  return (
    <p
      className={cn(
        "font-primary",
        sizeHeadingClass,
        sizeHeadingMobileClass,
        classNames,
        lineHeight
      )}
    >
      {children}
    </p>
  );
}
