"use client";

import Link from "next/link";

export default function Sidebar({ open, onClose }) {
    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-background z-50 transform transition-transform duration-300 md:hidden ${
                open ? "translate-x-0" : "translate-x-full pointer-events-none"
            }`}
            style={{ visibility: open ? "visible" : "hidden" }}
        >
            <span className="flex justify-end">
                <button className="p-4" onClick={onClose}>
                    ✕
                </button>
            </span>
            <nav className="flex flex-col space-y-4 p-6 bg-background">
                <Link href="/">ホーム</Link>
                <Link href="/services">サービス</Link>
                <Link href="/privacy">個人情報保護方針</Link>
                <Link href="/legal-sct">特定商取引法に基づく表記</Link>
            </nav>
        </div>
    );
}
