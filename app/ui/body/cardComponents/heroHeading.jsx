import { useEffect, useRef } from "react";
import { Galada } from 'next/font/google'
const galada = Galada({ subsets: ['latin'], weight: "400" })
import gsap from "gsap";

export default function HeroHeading() {
    const mainHedaing = useRef()

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(mainHedaing.current, {
                y: "50%",
                opacity: 0,
                duration: 1.5,
            })
        }, mainHedaing)

        return () => ctx.revert();
    }, [])
    return (
        <div className="text-white w-full max-h-max
                        max-lg:max-w-full max-lg:w-max">
            <h1 ref={mainHedaing} className={`${galada.className} font-bold text-9xl
                            max-md:text-8xl 
                            max-sm:text-7xl
                            `}>
                <span className=" text-pink-800 text-9xl
                                max-md:text-8xl 
                                max-sm:text-7xl
                                ">Chocolate Vanilla</span> Truffle
                <br />Swirl,
                <span className=" text-pink-800 text-9xl 
                                max-md:text-8xl 
                                max-sm:text-7xl
                                "> Bourbon-infused </span><br />Vanilla & Dark Chocolate
            </h1>
        </div>
    )
}
