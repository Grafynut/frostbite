"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Logo from "./logo";
import logo from "@/public/logo_with_tag_line.svg"
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function Footer(props) {
    const footer = useRef();
    const pathName = usePathname();

    useEffect(() => {
        const footerDivs = document.querySelector("#mainContainer").childNodes;
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.defaults({
                toggleActions: "restart pause reverse pause",
                // markers: true
            })

            footerDivs.forEach((element, index) => {
                gsap.to(element, {
                    y: "30%",
                    opacity: 0,
                })

                ScrollTrigger.create({
                    trigger: element,
                    start: "100px bottom",
                    end: "+=200",
                    onEnter: (current) => {
                        gsap.to(current.trigger, {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            delay: 0.2 * index
                        });
                    },
                })
            });

        }, footer);
        return () => {
            ctx.revert()
        };
    }, [pathName])

    return (
        <footer ref={footer} id="footer" className={`w-full flex flex-col items-center overflow-visible relative bg-[#FFC554] mt-[25rem] 
        max-lg:mt-[15rem] max-lg:before:h-[5.3rem_!important]
        max-sm:before:h-[3.9rem_!important]
        `}>
            <div className="container_max_width w-full">
                <div id="mainContainer" className="relative grid grid-cols-4 gap-12 w-full mb-20 px-6  overflow-y-hidden 
                max-lg:grid-cols-2
                ">
                    <div className="w-full flex flex-col gap-6 items-center px-4 
                    
                    max-lg:justify-center">
                        <Logo logoImage={logo} CStyle={"w-full max-w-full h-26 max-h-[5rem]"} />
                        <p className="text-2xl">© {new Date().getFullYear()} | all rights reserved to frostbite.com.</p>
                    </div>
                    <ul className="flex flex-col items-center gap-6 w-full">
                        <Footerlinks path={"/products"} innertext={"Products"} />
                        <Footerlinks path={"/store"} innertext={"Store"} />
                        <Footerlinks path={"/about"} innertext={"About"} />
                        <Footerlinks path={"/contact"} innertext={"Contact"} />
                    </ul>
                    <div className="w-full
                    max-lg:flex max-lg:flex-col max-lg:justify-center
                    ">
                        <h4 className="text-black font-bold text-3xl mb-6">Contact Info</h4>
                        <ul className="grid gap-6">
                            <FooterIcons innertext={"frostbite@mail.com"} icon={faEnvelope} />
                            <FooterIcons innertext={"033 8888 5555"} icon={faPhone} />
                            <FooterIcons innertext={"Strada Santoro 145, Donati veneto, BA 35212"} icon={faLocationDot} />
                        </ul>
                    </div>
                    <form className="justify-end w-full flex flex-col gap-6 ">
                        <h4 className="text-black font-bold text-3xl">
                            Message Box
                        </h4>
                        <input placeholder="Enter Your Email"
                            className="text-black text-2xl border shadow bg-white  w-full px-5 py-5 rounded-xl border-solid border-black" />

                        <textarea placeholder="Enter your message"
                            className="border shadow bg-white h-[15rem] max-h-[15rem] min-h-[15rem] w-full px-5 py-5 rounded-xl border-solid border-black text-2xl" ></textarea>
                        <button className="text-black text-center text-2xl font-medium border shadow-md bg-white justify-center items-stretch px-14 py-4 rounded-xl border-solid border-black ">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

const FooterIcons = ({ innertext, icon }) => {
    return <li className="text-black text-3xl flex flex-row items-center"><FontAwesomeIcon className="w-6 mr-4" icon={icon} />{innertext}</li>
}

const Footerlinks = ({ innertext, path }) => {
    return (<Link href={path}>
        <li className="text-black text-3xl capitalize">{innertext}</li>
    </Link>)
}
