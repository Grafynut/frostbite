"use client"

import PageHeading from "../ui/body/pageHeading"
import { BlogComponent, BlogRightSideComponent } from "../ui/body/blog/blogComponets";
import { blogContent } from "../content";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Page() {

    const blogPage = useRef();
    const recentBlogs = useRef();
    const topBlogs = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            recentBlogs.current.childNodes.forEach((element, index) => {
                if (index === 0) {
                    gsap.from(element, {
                        y: "50%",
                        opacity: 0,
                        duration: 1
                    })
                } else {
                    gsap.to(element, {
                        y: "50%",
                        opacity: 0,
                        duration: 0
                    })

                    ScrollTrigger.create({
                        trigger: element,
                        start: "-300px center",
                        onEnter: (current) => {
                            gsap.to(current.trigger, {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                            });
                        },
                    })


                }
            })

            topBlogs.current.childNodes.forEach((element, index) => {
                if (index === 1) {
                    gsap.from(element, {
                        y: "50%",
                        opacity: 0,
                        duration: 1,
                        delay: 0.5 * index
                    })
                } else {
                    gsap.to(element, {
                        y: "50%",
                        opacity: 0,
                        duration: 0
                    })

                    ScrollTrigger.create({
                        trigger: element,
                        start: "-100px center",
                        onEnter: (current) => {
                            gsap.to(current.trigger, {
                                y: 0,
                                opacity: 1,
                                duration: 1,
                            });
                        },
                    })


                }
            })


        }, blogPage);

        return () => ctx.revert();
    }, [])


    return (
        <div className='w-full h-max flex flex-col items-center'>
            <PageHeading innerText={"Our blogs"} />
            <div ref={blogPage} className="container_max_width w-full my-12 px-6">
                <div className="gap-6 flex flex-row w-full static
                ">
                    <div ref={recentBlogs} className="flex flex-col w-[75%] ">
                        {blogContent.map((blog, i) => {
                            return <BlogComponent blogHeading={blog.title} blogText={blog.content} blogImage={blog.image} key={i} />
                        })}
                    </div>
                    <div className="w-[25%] sticky h-max top-[50px]">
                        <div ref={topBlogs} className="flex flex-col gap-6 w-full">
                            <BlogRightSideComponent />
                            <BlogRightSideComponent />
                            <BlogRightSideComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
