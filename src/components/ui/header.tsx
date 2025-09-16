"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import Sidebar from "./sidebar";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <span>
      <header className="sticky top-0 z-50 font-primary bg-white/5 backdrop-blur-[25px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between rounded-b-2xl">
          {/* Left: Logo + Navigation */}
          <div className="flex items-center space-x-10">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={72} height={36} />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-10 ">
              <Link href="/" className="">
                ホーム
              </Link>
              <Link href="/" className="">
                サービス
              </Link>

              <div className="relative group">
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
                  <DropdownMenuContent
                    side="bottom"
                    className="dropdown ml-28 p-0 border-0 shadow-lg bg-background"
                  >
                    <DropdownMenuItem>
                      <Link href="/legal/privacy">個人情報保護方針</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/legal/terms">特定商取引法に基づく表記</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>

          {/* Right: Language + Contact */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Language Switch */}
            <Button className=" bg-secondary text-secondary-foreground px-3 md:px-4 py-3 rounded-full">
              JP
            </Button>

            {/* Contact Button */}
            <Button className="p-0.75 hidden md:flex">
              <Link href="/" className="flex items-center ">
                <span className="rounded-full w-8 h-8 p-3 bg-white-15 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="pr-4 pl-3 py-1">お問い合わせ</span>
              </Link>
            </Button>
          </div>

          <Button
            className="flex md:hidden w-[36px] p-1.25 rounded-full"
            onClick={() => setSidebarOpen(true)}
          >
            <Image
              alt="Menu"
              src="/hamburger.svg"
              className=""
              height={0}
              width={0}
              style={{ width: "auto", maxHeight: "20px" }}
            ></Image>
          </Button>
        </div>
      </header>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </span>
  );
}
