"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";

export function BlogComponent({ blogHeading, blogText, blogImage }) {
    return (
        <article className="mb-12 last:mb-0 flex flex-col gap-6">
            <h3 className="text-black text-justify text-4xl font-bold ">{blogHeading}</h3>
            <div className="bg-zinc-300 min-h-[20rem] max-h-max flex-col rounded-2xl " >
                <Image
                    src={blogImage}
                    width={1280}
                    height={500}
                    alt=""
                />
            </div>
            <p className="text-black text-justify text-3xl ">{blogText.slice(0, 350)}...Read More</p>
        </article>
    );
}

export const BlogRightSideComponent = () => {
    const div = useRef();

    useEffect(() => {
        const width = div.current.clientWidth;
        div.current.style.height = `${width}px`;
    }, [])

    return (
        <div ref={div} className="bg-zinc-300 flex w-full h-[340px] flex-col rounded-2xl" ></div>
    )
}


