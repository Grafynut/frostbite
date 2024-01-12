"use client"

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from './logo';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

export default function Navbar() {
    const pathName = usePathname();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [animation, setAnimation] = useState(false);
    const [firstToggle, setFirstToggle] = useState(false);
    const [win, setWin] = useState();
    const navbar = useRef();

    const handleClick = () => {
        setToggleMenu(!toggleMenu);
        setFirstToggle(true);
    }

    useEffect(() => {
        setWin(window);
        if (win?.innerWidth < 768) setAnimation(true);
        const menus = navbar.current.childNodes;
        const navbardiv = navbar.current;
        if (!animation) return;
        menus.forEach((item, index) => {
            item.addEventListener("click", () => {
                setToggleMenu(false);
            })
        })

        let ctx = gsap.context(() => {

            if (firstToggle) {
                if (toggleMenu) {
                    gsap.to(navbardiv, {
                        height: "100svh",
                        duration: 1,
                    });
                }
                else {
                    gsap.from(navbardiv, {
                        height: "100svh",
                        duration: 1,
                        delay: 0.8
                    })
                }
            }


            menus.forEach((item, index) => {
                if (toggleMenu) {
                    gsap.from(item, {
                        opacity: 0,
                        x: "110%",
                        duration: 0.5,
                        delay: 0.2 * index
                    });
                } else {
                    gsap.to(item.childNodes, {
                        opacity: 0,
                        x: "110%",
                        duration: 0.5,
                        delay: 0.2 * index
                    });
                }
            })

        }, navbar);

        return () => ctx.revert();
    }, [win, toggleMenu, animation])

    return (
        <div className={`sticky top-0 navbar z-20 w-full h-max bg-white  overflow-visible flex flex-col items-center before:z-[-1] ${pathName !== "/" && "before:hidden"} `}>
            <div className="container_max_width px-6 w-full relative justify-between items-center flex gap-5 h-[50px] overflowY-visible">
                <Logo logoImage={"logo.svg"} />

                {win?.innerWidth < 1024 &&
                    <div className=' w-max h-max' onClick={handleClick} >
                        <FontAwesomeIcon icon={faBars} className='text-black text-5xl' />
                    </div>
                }
                <ul ref={navbar} className={`flex flex-row relative bg-white h-max gap-3
                max-lg:items-center max-lg:h-0 max-lg:flex-col max-lg:absolute max-lg:translate-y-[50px] max-lg:w-full max-lg:top-0 max-lg:right-0 max-lg:overflow-hidden
                `}
                >
                    <NavbarLinks path={"/products"}
                        innerText={"Products"}

                    />
                    <NavbarLinks path={"/store"}
                        innerText={"Store"}
                    />
                    <NavbarLinks path={"/our-blog"}
                        innerText={"blog"}

                    />
                    <NavbarLinks path={"/about"}
                        innerText={"About"}

                    />
                    <NavbarLinks path={"/contact"}
                        innerText={"Contact"}
                    />
                </ul>

            </div>
        </div>

    )
}

const NavbarLinks = ({ innerText, path }) => {
    const pathName = usePathname();

    return (
        <Link href={path} >
            <li className={`navmen text-black text-3xl px-6 py-2 mx-1 rounded-2xl ${pathName === path ? "bg-[rgb(124_58_237)] text-white" : ""}  
            hover:shadow-[inset_0px_0px_2px_2px_#00000030]
            max-lg:text-center max-lg:w-max  max-lg:opacity-100
            `}
                style={{ transition: "0.3s" }}
            >
                {innerText}</li>
        </Link>
    )
}