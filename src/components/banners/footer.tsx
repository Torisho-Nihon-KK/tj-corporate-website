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
            <div className="px-[64px] pt-[42px] mt-9 mb-0 py-6 items-center justify-between rounded-t-2xl grid md:grid-cols-3 grid-cols-1 z-10 shadow-xl relative overflow-hidden">
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
                        src="/full-logo.svg"
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
                        >
                            <FaInstagram
                                size={24}
                                className="hover:text-red-500 transition"
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/99918622/"
                            target="_blank"
                        >
                            <FaLinkedin
                                size={24}
                                className="hover:text-blue-600 transition"
                            />
                        </Link>
                        <Link
                            href="https://www.facebook.com/torishojp"
                            target="_blank"
                        >
                            <FaFacebook
                                size={24}
                                className="hover:text-blue-500 transition"
                            />
                        </Link>
                    </div>
                </div>
                <div
                    className="relative z-10 grid-row-3 ml-auto mr-8 justify-between items-end hidden md:grid"
                    style={{ fontSize: "16px" }}
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
                                        <Link
                                            href="/legal-sct"
                                            className="block"
                                        >
                                            特定商取引法に基づく表記
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
                <span className="md:col-span-3 flex justify-center items-center relative z-10 text-primary-muted">
                    {/* TODO: Fix the font family unable to link to top level layout. */}
                    <Link
                        href="/"
                        className="block px-4 my-3 text-primary hover:underline"
                    >
                        <Text>個人情報保護方針</Text>
                    </Link>
                    <Text className="display-inline">
                        © 2025 鳥商日本株式会社. All rights reserved.
                    </Text>
                </span>
            </div>
        </footer>
    );
}
