"use client"

import Image from "next/image";
import { featuredContent } from "@/app/content";
import Heading from "../body/heading";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Featured(props) {
    const featured = useRef();
    const left = useRef();
    const right = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.defaults({
                toggleActions: "restart pause reverse pause",
                // markers: true
            })

            gsap.to(".imagesection", {
                y: 100,
                opacity: 0,
            })

            gsap.to(left.current, {
                x: "-100%",
                opacity: 0,
            })

            gsap.to(right.current, {
                x: "100%",
                opacity: 0,
            })


            // image animation
            ScrollTrigger.create({
                trigger: ".imagesection",
                start: "top center",
                // end: "+=400",
                onEnter: (current) => {
                    //images section
                    gsap.to(current.trigger, {
                        y: 0,
                        opacity: 1,
                        duration: 1.5
                    });
                    // left section
                    gsap.to(left.current, {
                        x: 0,
                        opacity: 1,
                        duration: 1.5
                    })
                    //right section
                    gsap.to(right.current, {
                        x: 0,
                        opacity: 1,
                        duration: 1.5
                    })
                },
            })


        }, featured);
        return () => ctx.revert();
    })

    return (
        <div ref={featured} className="max-w-full mx-auto mt-28 grid place-items-center">
            <Heading text={"Newly Launched"} />
            <div className="container_max_width gap-5 flex justify-center">
                <div className="flex items-center justify-end w-[21%]">
                    <div ref={left} className="flex flex-col items-center gap-12 ">
                        {featuredContent.map((feature, id) => {
                            return feature.features.map((text, index) => {
                                if (index > 2) return;
                                return <Ingrediants text={text.text} float={"left"} index={index} key={index} />
                            })
                        })}
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[35%] my-9">
                    <div className="imagesection flex grow flex-col items-center p-6 my-9">
                        <Image
                            src={featuredContent[0].image}
                            className="aspect-square object-contain object-center w-full overflow-hidden self-stretch "
                            alt="featured images"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-start w-[21%]">
                    <div ref={right} className="flex flex-col items-center gap-12 ">
                        {featuredContent.map((feature, id) => {
                            return feature.features.map((text, index) => {
                                if (index < 3) return;
                                return <Ingrediants text={text.text} index={index} float={"right"} key={index} />
                            })
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


const Ingrediants = ({ text, float, index }) => {


    return (
        <>
            {
                float === "right" ?
                    <div className="rightIngrediants flex items-center justify-start w-full gap-4" >
                        <div className="bg-violet-600 grid place-items-center text-2xl text-white w-[3rem] h-[3rem]  rounded-3xl" >{index + 1}</div>
                        <div className="text-black text-3xl  capitalize">{text}</div>
                    </div>
                    :
                    <div className="leftIngrediants flex items-center justify-end w-full gap-4" >
                        <div className="text-black text-3xl capitalize">{text}</div>
                        <div className="bg-violet-600 text-2xl  grid place-items-center text-white w-[3rem] h-[3rem]  rounded-3xl" >{index + 1}</div>
                    </div>

            }
        </>

    )
}