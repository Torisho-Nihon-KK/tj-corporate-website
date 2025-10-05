import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
// import { Suspense } from "react";
// import { UserMenu } from "@/components/user-menu";

const notoSansJP = localFont({
    src: [
        {
            path: "../../public/fonts/NotoSansJP-Regular.ttf",
            weight: "400",
            style: "Regular",
        },
    ],
    variable: "--font-noto-sans-jp",
    display: "swap",
});

const eitaiGothicBold = localFont({
    src: [
        {
            path: "../../public/fonts/KOT-Eitai Gothic Bold.ttf",
            weight: "700",
            style: "Bold",
        },
    ],
    variable: "--font-eitai-gothic-bold",
    display: "swap",
});

export const metadata: Metadata = {
    title: "TJ Corporate",
    description: "Landing page for TJ Corporate",
    icons: {
        icon: "/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body
                className={`${notoSansJP.variable} ${eitaiGothicBold.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
