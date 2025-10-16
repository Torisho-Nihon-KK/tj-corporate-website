import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";

import "./globals.css";
// import { Suspense } from "react";
// import { UserMenu } from "@/components/user-menu";

const notoSansJP = localFont({
    src: [
        {
            path: "../public/fonts/NotoSansJP-Regular.ttf",
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
            path: "../public/fonts/KOT-Eitai Gothic Bold.ttf",
            weight: "700",
            style: "Bold",
        },
    ],
    variable: "--font-eitai-gothic-bold",
    display: "swap",
});

export const metadata: Metadata = {
    title: "鳥商日本株式会社 | 東京都板橋区のITカンパニー",
    description:
        "パソコンやインターネットお困りごとは「鳥商」へ。法人向け情シス・ヘルプデスク業務のアウトソーシングや、地域のお客さま向けのPCトラブル相談を承っています。",
    icons: {
        icon: "/logos/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <GoogleTagManager
                gtmId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""}
            />
            <body
                className={`${notoSansJP.variable} ${eitaiGothicBold.variable}`}
            >
                {children}
            </body>
        </html>
    );
}
