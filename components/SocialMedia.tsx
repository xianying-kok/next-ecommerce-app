import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import {
    Facebook,
    Github,
    GithubIcon,
    Linkedin,
    Slack,
    Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
    {
        title: "Youtube",
        href: "https://www.youtube.com/@reactjsBD",
        icon: <Youtube className="w-5 h-5" />,
    },
    {
        title: "Github",
        href: "https://www.youtube.com/@reactjsBD",
        icon: <Github className="w-5 h-5" />,
    },
    {
        title: "Linkedin",
        href: "https://www.youtube.com/@reactjsBD",
        icon: <Linkedin className="w-5 h-5" />,
    },
    {
        title: "Facebook",
        href: "https://www.youtube.com/@reactjsBD",
        icon: <Facebook className="w-5 h-5" />,
    },
    {
        title: "Slack",
        href: "https://www.youtube.com/@reactjsBD",
        icon: <Slack className="w-5 h-5" />,
    },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
    return (
        <TooltipProvider>
            <div className={cn("flex items-center gap-4", className)}>
                {socialLink?.map((item) => (
                    <Tooltip key={item.title}>
                        <TooltipTrigger>
                            <Link
                                href={item?.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "p-2 hover:text-white hoverEffect",
                                    iconClassName
                                )}
                            >
                                {item?.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent
                            className={cn(
                                "bg-white fill-white font-semibold text-darkColor",
                                tooltipClassName
                            )}
                        >
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </TooltipProvider>
    );
};

export default SocialMedia;
