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

export default function Header() {
  return (
    <header className="sticky top-0 z-50 font-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between rounded-b-2xl">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center space-x-10">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Logo" width={72} height={36} />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-10">
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
        <div className="flex items-center space-x-4">
          {/* Language Switch */}
          <Button className=" bg-secondary text-secondary-foreground w-14 h-9 px-3 py-1 rounded-full font-medium">
            JP
          </Button>

          {/* Contact Button */}
          <Button className="px-0">
            <Link href="/" className="flex items-center ">
              <span className="rounded-full w-9 h-9 p-3 bg-white-15 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              <span className="pr-4 pl-3 py-1">お問い合わせ</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
