import Link from "next/link";
import Image from "next/image";
export default function Logo({ logoImage, CStyle, handleClick }) {
    return (
        <Link href={"/"} className=' w-max h-max' onPointerDown={handleClick}>
            <Image
                loading="lazy"
                src={logoImage}
                width={200}
                height={200}
                className={` ${CStyle ? CStyle : "w-[16rem] max-w-full"}`}
                alt="frostbite logo"
            />
        </Link>
    )
}
