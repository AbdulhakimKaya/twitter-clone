import {Link} from "react-router-dom";
import {Popover} from "@headlessui/react";

export default function Footer() {
    return (
        <footer className="mb-4 px-4 flex flex-wrap gap-2">
            <Link
                to={"/"}
                className="text-[#71767b] leading-4 text-[13px] hover:underline"
            >
                Hizmet Şartları,
            </Link>
            <Link
                to={"/"}
                className="text-[#71767b] leading-4 text-[13px] hover:underline"
            >
                Gizlilik Politikası,
            </Link>
            <Link
                to={"/"}
                className="text-[#71767b] leading-4 text-[13px] hover:underline"
            >
                Çerez Politikası
            </Link>
            <Link
                to={"/"}
                className="text-[#71767b] leading-4 text-[13px] hover:underline"
            >
                Imprint
            </Link>
            <Link
                to={"/"}
                className="text-[#71767b] leading-4 text-[13px] hover:underline"
            >
                Erişilebilirlik
            </Link>
            <Link
                to={"/"}
                className="text-[#71767b] leading-4 text-[13px] hover:underline"
            >
                Reklam Bilgisi
            </Link>

            <div className="w-full flex gap-2">
                <Popover className="relative leading-4 inline-flex">
                    <Popover.Button className="text-[#71767b] leading-4 text-[13px] hover:underline outline-none inline-flex items-center px-0.5">
                        Daha fazla
                        <svg viewBox="0 0 22 22" className="h-[1em]">
                            <path
                                fill="currentColor"
                                d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                            />
                        </svg>
                    </Popover.Button>
                    <Popover.Panel className="w-[180px] max-w-[384px] bg-black shadow-box rounded-xl absolute bottom-0 right-0 grid overflow-hidden">
                        <Link
                            to={"/"}
                            className="py-3 px-4 text-white text-[15px] leading-5 font-bold transition-colors hover:bg-[#16181c]"
                        >
                            Hakkında
                        </Link>
                        <Link
                            to={"/"}
                            className="py-3 px-4 text-white text-[15px] leading-5 font-bold transition-colors hover:bg-[#16181c]"
                        >
                            X Uygulamasını İndir
                        </Link>
                        <Link
                            to={"/"}
                            className="py-3 px-4 text-white text-[15px] leading-5 font-bold transition-colors hover:bg-[#16181c]"
                        >
                            İşletmeler için X
                        </Link>
                        <Link
                            to={"/"}
                            className="py-3 px-4 text-white text-[15px] leading-5 font-bold transition-colors hover:bg-[#16181c]"
                        >
                            Geliştiriciler
                        </Link>
                    </Popover.Panel>
                </Popover>
                <p className="text-[#71767b] leading-4 text-[13px]">
                    &copy; 2024 X Corp.
                </p>
            </div>
        </footer>
    )
}