"use client"

import Image from "next/image";
import Heading from "../body/heading";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function SocialMediaPosts(props) {

    const socialMediaContainer = useRef();

    useEffect(() => {
        const imageDiv = document.querySelectorAll(".imageDiv");
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.defaults({
                toggleActions: "restart pause reverse pause",
                // markers: true
            })

            gsap.to(imageDiv[0], {
                x: "-100",
                opacity: 0
            })

            gsap.to(imageDiv[1], {
                y: "-100",
                opacity: 0
            })
            gsap.to(imageDiv[2], {
                y: "100",
                opacity: 0
            })
            gsap.to(imageDiv[3], {
                y: "100",
                opacity: 0
            })
            gsap.to(imageDiv[4], {
                x: "100",
                opacity: 0
            })
            gsap.to(imageDiv[5], {
                x: "100",
                opacity: 0
            })

            imageDiv.forEach((element, index) => {
                ScrollTrigger.create({
                    trigger: socialMediaContainer.current,
                    start: "top center",
                    onEnter: (current) => {
                        gsap.to(element, {
                            x: 0,
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            delay: 0.2 * index
                        });
                    }
                })
            });

        }, socialMediaContainer);

        return () => ctx.revert();
    }, [])



    return (
        <div className="w-full flex flex-col items-center">
            <Heading text={"Fan Social Media Posts"} />
            <div ref={socialMediaContainer}
                className="container_max_width grid h-max w-full px-6 mt-16"
                style={{ gridTemplateColumns: "20% 60% 20%" }}
            >
                <div
                    className=" w-full max-w-full h-full rounded-xl pt-32 pr-6
                    max-sm:pr-3
                "
                >
                    <div
                        className="imageDiv bg-zinc-300 w-full h-[40rem] max-w-full rounded-xl overflow-clip
                    max-xl:h-[30rem]
                    max-lg:h-[24rem]
                    max-md:h-[22rem]
                    max-sm:h-[10rem]
                    "
                    >
                        <Image
                            src={
                                "https://images.pexels.com/photos/2448531/pexels-photo-2448531.jpeg"
                            }
                            alt="social media posts by our fans"
                            width={500}
                            height={700}
                        />
                    </div>
                </div>
                <div
                    className="grid gap-12 grid-cols-1 w-full h-max max-w-full rounded-xl px-6
                max-sm:px-3 max-sm:gap-6
                "
                >
                    <div
                        className="imageDiv bg-zinc-300 w-full h-[32rem] max-w-full rounded-xl overflow-clip 
                    max-lg:h-[22rem]
                    max-md:h-[20rem]
                    max-sm:h-[16rem]
                    "
                    >
                        <Image
                            src={
                                "https://images.pexels.com/photos/9634848/pexels-photo-9634848.jpeg"
                            }
                            alt="social media posts by our fans"
                            className=" h-full  object-cover object-center"
                            width={1000}
                            height={320}
                        />
                    </div>
                    <div
                        className="grid gap-12 grid-cols-2 w-full h-max
                    max-sm:gap-6
                    "
                    >
                        <div
                            className="border imageDiv bg-zinc-300 w-full h-[38rem] rounded-xl overflow-clip 
                        max-lg:h-[28rem]
                    max-md:h-[28rem]
                    max-sm:h-[16rem]
                        "
                        >
                            <Image
                                src={
                                    "https://images.pexels.com/photos/8734117/pexels-photo-8734117.jpeg"
                                }
                                alt="social media posts by our fans"
                                className="h-full object-cover object-left"
                                width={1000}
                                height={400}
                            />
                        </div>
                        <div
                            className="imageDiv border bg-zinc-300 w-full h-[25rem] rounded-xl overflow-clip
                        max-lg:h-[20rem]
                    max-md:h-[18rem]
                    max-sm:h-[10rem]
                        "
                        >
                            <Image
                                src={
                                    "https://images.pexels.com/photos/6182385/pexels-photo-6182385.jpeg"
                                }
                                alt="social media posts by our fans"
                                className="h-full object-cover"
                                width={500}
                                height={0}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="grid pl-6 grid-cols-1 gap-12 w-full h-max max-w-full rounded-xl pt-32
                    max-sm:pl-3
                "
                >
                    <div
                        className="imageDiv bg-zinc-300 w-full h-[39rem] max-w-full rounded-xl overflow-clip
                    max-xl:h-[30rem]
                    max-lg:h-[23rem]
                    max-md:h-[21rem]
                    max-sm:h-[10rem]

                    "
                    >
                        <Image
                            src={
                                "https://images.pexels.com/photos/4390726/pexels-photo-4390726.jpeg"
                            }
                            alt="social media posts by our fans"
                            width={500}
                            height={600}
                        />
                    </div>
                    <div
                        className="imageDiv bg-zinc-300 w-full h-[17rem] max-w-full rounded-xl overflow-clip
                    max-md:h-[15rem]
                    max-sm:h-[8rem]
                    "
                    >
                        <Image
                            src={
                                "https://images.pexels.com/photos/5094686/pexels-photo-5094686.jpeg"
                            }
                            alt="social media posts by our fans"
                            className="h-full object-cover object-left-top"
                            width={300}
                            height={0}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
