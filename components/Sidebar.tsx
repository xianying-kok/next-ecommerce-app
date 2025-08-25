import { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SocialMedia from "./SocialMedia";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}
const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-darkColor/50"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <motion.div
                className={`fixed inset-y-0 left-0 z-50 min-w-72 w-1/2 max-w-96 bg-darkColor text-white/70 h-full p-10 border-r border-r-darkColor/50 flex flex-col gap-6 shadow-xl`}
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center justify-between">
                    <button onClick={onClose}>
                        <Logo className="!text-white">Next</Logo>
                    </button>
                    <button
                        className="hover:text-red-500 hoverEffect"
                        onClick={onClose}
                    >
                        <X />
                    </button>
                </div>
                <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide">
                    {headerData?.map((item) => (
                        <Link
                            onClick={onClose}
                            key={item?.title}
                            href={item?.href}
                            className={`hover:text-white hoverEffect ${
                                pathname === item?.href && "text-white"
                            }`}
                        >
                            {item?.title}
                        </Link>
                    ))}
                </div>
                <SocialMedia />
            </motion.div>
        </>
    );
};

export default Sidebar;
