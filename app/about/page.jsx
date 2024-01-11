"use client"

import { useRef, useEffect } from "react";
import PageHeading from "../ui/body/pageHeading";
import gsap from "gsap";

export default function page() {
    const aboutText = useRef();

    useEffect(() => {

        const ctx = gsap.context(() => {

            gsap.from(aboutText.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5
            })
        }, aboutText)

        return () => ctx.revert();
    })

    return (
        <div className='w-full h-max flex flex-col items-center'>
            <PageHeading innerText={"About"} />
            <div className="container_max_width w-full my-12 px-6">
                <div className="gap-6 flex flex-row w-full">
                    <div ref={aboutText} className="w-full opacity-100">
                        <h1 className="text-6xl font-medium mb-2 text-center">About Frostbite</h1>
                        <p className="text-3xl text-justify">Welcome to Frostbyte, where every scoop tells a story of passion, flavor, and frozen delight!</p>
                        <h3 className="text-4xl capitalize mb-2 mt-6 font-medium">Our Story</h3>
                        <p className="text-3xl text-justify">At Frostbyte, we believe in the simple joy of indulging in a delightful scoop of ice cream that not only tantalizes your taste buds but also takes you on a journey of flavors. Our story began with a dream to create an ice cream experience like no other – one that fuses creativity, quality, and a touch of nostalgia.
                        </p>
                        <h3 className="text-4xl capitalize mb-2 mt-6 font-medium">Crafted with Love</h3>
                        <p className="text-3xl text-justify">What sets Frostbyte apart is the meticulous crafting of our ice cream. We source the finest ingredients from local producers, ensuring that each bite is a burst of authentic flavor. Our dedicated team of ice cream artisans puts their heart and soul into every batch, creating a symphony of taste that is nothing short of extraordinary.</p>
                        <h3 className="text-4xl capitalize mb-2 mt-6 font-medium">Innovation at the Core</h3>
                        <p className="text-3xl text-justify">At Frostbyte, innovation is at the core of what we do. We are not just ice cream makers; we are flavor innovators. Our ever-evolving menu showcases a fusion of classic favorites and bold, unique creations that push the boundaries of traditional ice cream. From exotic blends to unexpected textures, each flavor is a celebration of the artistry behind frozen desserts</p>
                        <h3 className="text-4xl capitalize mb-2 mt-6 font-medium">Local Roots, Global Dreams</h3>
                        <p className="text-3xl text-justify">Proudly rooted in [Your City], Frostbyte is more than an ice cream company – it's a community. We are committed to giving back to the place that inspired our journey. Sustainability and community engagement are integral parts of our ethos, ensuring that we contribute positively to the world around us.</p>
                        <h3 className="text-4xl capitalize mb-2 mt-6 font-medium">Join the Frostbyte Family</h3>
                        <p className="text-3xl text-justify">As you explore the world of Frostbyte, we invite you to join our growing family of ice cream enthusiasts. Whether you're a lifelong fan or a newcomer eager to embark on a sweet adventure, Frostbyte is a place where everyone is welcome, and every moment is an opportunity to savor the extraordinary.
                            Thank you for being a part of our story. Here's to endless scoops, shared smiles, and the magic of Frostbyte!</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
