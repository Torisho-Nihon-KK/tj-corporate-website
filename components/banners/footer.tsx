import Link from "next/link";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Text } from "../ui/text";

export default function Footer() {
    return (
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="px-[64px] pt-[42px] mt-9 mb-0 py-6 items-center justify-between rounded-t-2xl grid grid-cols-1 md:grid-cols-3 z-10 shadow-xl relative overflow-hidden">
                {/* Background noise image */}
                <Image
                    src="/noise.svg"
                    alt=""
                    fill
                    className="pointer-events-none select-none object-cover opacity-100 z-0"
                    style={{ objectPosition: "center" }}
                    priority
                />
                {/* Logo Section */}
                <div className="relative z-10 mx-auto md:mx-0 pb-10.5 md:pb-0">
                    <Image
                        src="/logos/full-logo.svg"
                        alt="Torisho Logo"
                        width={150}
                        height={105}
                    />
                </div>
                <div className="items-center mx-auto relative z-10">
                    {/* Social Media Icons */}
                    <div className="flex space-x-6 text-primary-muted md:items-center">
                        <Link
                            href="https://www.instagram.com/torishojp/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <FaInstagram
                                size={24}
                                className="hover:text-red-500 transition"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/99918622/"
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin
                                size={24}
                                className="hover:text-blue-600 transition"
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/torishojp"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <FaFacebook
                                size={24}
                                className="hover:text-blue-500 transition"
                            />
                        </Link>
                    </div>
                </div>
                <div
                    className="relative z-10 grid-row-3 ml-auto mr-8 justify-between hidden md:flex flex-col gap-[1rem] items-left"
                    style={{ fontSize: "16px" }}
                >
                    <div className="relative">
                        <Link href="/">ホーム</Link>
                    </div>
                    <div className="relative">
                        <Link href="/services">サービス</Link>
                    </div>
                    <div className="relative ">
                        <Link href="/article">ブログ</Link>
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
                            <DropdownMenuContent
                                side="bottom"
                                className="ml-10 p-0 border-0 shadow-lg bg-background"
                            >
                                <DropdownMenuItem>
                                    <Link href="/privacy" className="block">
                                        個人情報保護方針
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/legal-sct" className="block">
                                        特定商取引法に基づく表記
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row justify-center items-center relative z-10 text-primary-muted w-full gap-0 md:gap-3  px-4 my-3">
                    <div>
                        <Link
                            href="/"
                            className="block text-primary hover:underline"
                        >
                            <Text>個人情報保護方針</Text>
                        </Link>
                    </div>
                    <div className="justify-end">
                        <Text className="display-inline">
                            © 2025 鳥商日本株式会社. All rights reserved.
                        </Text>
                    </div>
                </div>
            </div>
        </footer>
    );
}
