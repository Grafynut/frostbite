"use client";

import Image from "next/image";
import { heroImages } from "../../content";
import { useEffect, useState, useRef } from "react";
import { displayWidth } from "@/app/lib/globalFunc";
import gsap from "gsap";
import HeroHeading from "../body/cardComponents/heroHeading";

export default function HeroSection() {
    const [active, setActive] = useState(0);
    const sliderDiv = useRef();
    const heroSection = useRef();
    const slider = useRef();
    const [animation, setAnimation] = useState(true);
    let interval;

    function intervalfuc() {
        interval = setInterval(() => {
            if (active >= heroImages.length - 1) setActive(-1);
            setActive(prev => prev = prev + 1);
        }, 4000);
    }

    useEffect(() => {
        intervalfuc();
        const ctx = gsap.context(() => {
            if (animation) {
                gsap.from(slider.current, {
                    rotate: -180,
                    opacity: 0,
                    duration: 1.5,
                    delay: 1
                })
            }
        }, heroSection)

        setAnimation(false);

        return () => {
            clearInterval(interval);
            ctx.revert();
        };
    }, [active]);

    const handleClick = (event, id) => {
        clearInterval(interval);
        setActive(id)
        intervalfuc();
    }

    return (
        <div ref={heroSection} className={`w-full hero_section overflow-hidden relative max-h-[90rem] flex flex-col items-center min-h-[calc(100svh-50px)] justify-center
         max-xl:after:h-[6rem] 
         max-md:min-h-[calc(100svh-50px)] 
        `}>
            <div className="backimage w-full h-full absolute top-0 left-0"></div>
            <div className="container_max_width px-6 w-full gap-5 flex flex-col
            -translate-y-1/4
            ">
                <div className="flex flex-row items-center w-full z-10 
                ">
                    <div className="flex flex-row justify-between w-full items-center 
                     max-lg:flex-col max-lg:gap-32
                     max-md:gap-24
                     ">
                        <HeroHeading />
                        {/* slider */}
                        <div ref={slider} className="flex flex-col items-stretch w-[39%] relative
                        max-md:w-full
                        ">
                            <div ref={sliderDiv} className="bg-rose-100 relative flex w-[48.5rem] h-[48.5rem] flex-col mx-auto rounded-[50%]
                            max-md:w-[30rem] max-md:h-[30rem]
                            " >
                                <div className="relative w-full h-full flex justify-center items-center rotate-[-30deg]">
                                    {heroImages.map((item, i) => {
                                        return <div
                                            className={`card absolute card duration-1000 top-1/2 ${active === i ? 'pointer-events-none' : ""} min-w-[12rem] w-[12rem] min-h-[12rem] h-[12rem]  rounded-2xl
                                           
                                            `}
                                            style={
                                                active === i ?
                                                    displayWidth(768) ?
                                                        displayWidth(640) ?
                                                            { transform: `rotate(-10deg) translateY(0px) scale(3)`, top: 0 }
                                                            :
                                                            { transform: `rotate(-10deg) translateY(0px) scale(5)`, top: 0 }
                                                        :
                                                        { transform: `rotate(-10deg) translateY(-10rem) scale(5)` }
                                                    :
                                                    displayWidth(1281) && displayWidth(768, ">") ?
                                                        { transform: `rotate(${25 * i}deg) translateY(33rem)` }
                                                        :
                                                        displayWidth(768) ?
                                                            { transform: `rotate(${25 * i}deg) translateY(22rem)` }
                                                            :
                                                            { transform: `rotate(${25 * i}deg) translateY(35rem)` }
                                            }
                                            key={i}
                                            onClick={(e) => handleClick(e, i)}
                                        >
                                            <Image
                                                src={`${item.image.src}`}
                                                width={active === i ? displayWidth(768) ? 500 : 1080 : 100}
                                                height={active === i ? displayWidth(768) ? 500 : 1080 : 100}
                                                alt="images"
                                                className={`${active !== i && 'cardimage'} cursor-pointer aspect-square w-full object-contain object-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10`}
                                            />
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* slider */}
                    </div>
                </div>
            </div>
        </div>
    );
}
