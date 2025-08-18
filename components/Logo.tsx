import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className? : string;
  width?: number;
  height?: number;
}

const Logo = ({ className, width = 90, height = 50}: Props ) => {
    return (
        <Link href={"/"}>
            <Image src={'./next.svg'} alt="Tulos" width={width} height={height} className={cn(className, ['w-[80px] md:w-[80px]'])} />
        </Link>
    );
};

export default Logo;
