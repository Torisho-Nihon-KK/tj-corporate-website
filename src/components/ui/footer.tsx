import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-0 py-6 items-center justify-between rounded-t-2xl grid grid-cols-3 z-10 shadow-2xl relative overflow-hidden">
        {/* Background noise image */}
        <Image
          src="/noise.png"
          alt=""
          fill
          className="pointer-events-none select-none object-cover opacity-100 z-0"
          style={{ objectPosition: "center" }}
          priority
        />
        {/* Logo Section */}
        <div className="relative z-10">
          <Image
            src="/full-logo.svg"
            alt="Torisho Logo"
            width={150}
            height={105}
          />
        </div>
        <div className="items-center mx-auto relative z-10">
          {/* Social Media Icons */}
          <div className="flex space-x-6 text-primary-muted md:items-center">
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram
                size={24}
                className="hover:text-red-500 transition"
              />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <FaLinkedin
                size={24}
                className="hover:text-blue-600 transition"
              />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebook
                size={24}
                className="hover:text-blue-500 transition"
              />
            </Link>
          </div>
        </div>
        <div
          className="relative z-10 grid grid-row-3 ml-auto mr-8 justify-between items-end"
          style={{ fontFamily: "noto-sans-jp, sans-serif", fontSize: "16px" }}
        >
          <div>
            <div className="relative">
              <Link href="/">ホーム</Link>
            </div>
            <div className="relative py-10">
              <Link href="/services">サービス</Link>
            </div>
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center">
                  法的情報
                  <span className="ml-2">
                    <Image
                      src="/arrow-down.svg"
                      alt="Dropdown"
                      width={10}
                      height={5}
                    />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="ml-10 p-0 border-0 shadow-lg bg-background">
                  <DropdownMenuItem>
                    <Link href="/legal/privacy" className="block px-2 py-2">
                      プライバシー
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/legal/terms" className="block px-2 py-2">
                      利用規約
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <span
          className="col-span-3 flex justify-center items-center relative z-10 text-primary-muted"
          style={{ fontFamily: "noto-sans-jp, sans-serif" }}
        >
          {/* TODO: Fix the font family unable to link to top level layout. */}
          <Link
            href="/"
            className="block px-4 my-3 text-primary hover:underline"
          >
            個人情報保護方針
          </Link>
          © 2025 鳥商日本株式会社. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
