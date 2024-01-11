"use client";
import { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function PageHeading({ innerText }) {
    const heading = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heading.current, {
                y: "50%",
                opacity: 0,
                duration: 0.5
            })
            gsap.from(heading.current.childNodes, {
                y: "100%",
                opacity: 0,
                duration: 0.5,
                delay: 0.3
            })
        }, heading)
        return () => ctx.revert();
    }, [])

    return (
        <div ref={heading} className='w-full h-40 bg-[linear-gradient(90deg,#DDF6FF_0%,#7D40FF_51.28%,#F39DBF_100%)] grid place-items-center'>
            <h2 className=" text-white text-6xl font-bold  capitalize">
                {innerText}
            </h2>
        </div>
    )
}


