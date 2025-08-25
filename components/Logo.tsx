import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className? : string;
  children:  React.ReactNode;
}

const Logo = ({ className, children}: Props ) => {
    return (
        <Link href={"/"}>
            <h2 className={cn(className, "text-2xl text-darkColor font-black tracking-wider uppercase")}>{children}</h2>
        </Link>
    );
};

export default Logo;
