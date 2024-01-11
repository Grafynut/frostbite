"use client"

import { Germania_One } from 'next/font/google'
const germania_One = Germania_One({ weight: '400', subsets: ["latin"] })
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

export default function Heading({ text }) {
    const heading = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(heading.current, {
                y: "100%",
                opacity: 0,
            })

            ScrollTrigger.defaults({
                toggleActions: "restart pause reverse pause",
                // markers: true
            })

            ScrollTrigger.create({
                trigger: heading.current,
                start: "top center",
                onEnter: (current) => {
                    //headding
                    gsap.to(current.trigger, {
                        y: 0,
                        opacity: 1,
                        duration: 0.5
                    });
                },
            })

        }, heading)
        return () => ctx.revert();
    })


    return (
        <h2 ref={heading} className={`${germania_One.className} capitalize text-6xl text-black text-center font-extrabold whitespace-nowrap my-4`}>{text}</h2>
    )
}