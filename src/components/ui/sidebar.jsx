"use client";

import Link from "next/link";

export default function Sidebar({ open, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 md:hidden`}
    >
      <div className="flex justify-end">
        <button className="p-4" onClick={onClose}>
          ✕
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-6">
        <Link href="/">ホーム</Link>
        <Link href="/">サービス</Link>
        <Link href="/legal/privacy">個人情報保護方針</Link>
        <Link href="/legal/terms">特定商取引法に基づく表記</Link>
      </nav>
    </div>
  );
}
