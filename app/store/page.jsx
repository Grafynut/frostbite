"use client"
import Heading from "../ui/body/heading";
import StoreFilter from "../ui/body/storeFilter";
import StoreDetails from "../ui/body/cardComponents/storeDeatilsCard";
import { usePathname } from "next/navigation";
import PageHeading from "../ui/body/pageHeading";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";



export default function StorePage() {
    const pathName = usePathname();
    const store = useRef();

    useEffect(() => {
        const storeinfo = document.querySelectorAll(".storeinfo");
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            if (pathName === "/store") {

                gsap.from(".storeFilterConteiner", {
                    y: "50%",
                    opacity: 0,
                    duration: 0.5
                })

                storeinfo.forEach((element, index) => {
                    gsap.from(element, {
                        y: "50%",
                        opacity: 0,
                        duration: 0.5,
                        delay: 0.5 * index
                    })
                })

                gsap.to("#storeMap", {
                    y: "50%",
                    opacity: 0,
                    duration: 0
                })

                ScrollTrigger.create({
                    trigger: "#storeMap",
                    start: "top center",
                    onEnter: (current) => {
                        gsap.to(current.trigger, {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                        });
                    },
                })

            }
            else if (pathName !== "/store") {

                ScrollTrigger.defaults({
                    toggleActions: "restart pause reverse pause",
                    // markers: true
                })

                gsap.to(".storeFilterConteiner", {
                    y: "50%",
                    opacity: 0,
                })

                storeinfo.forEach((element, index) => {
                    gsap.to(element, {
                        y: "50%",
                        opacity: 0,
                    })

                    ScrollTrigger.create({
                        trigger: ".storeFilterConteiner",
                        start: "top center",
                        onEnter: (current) => {
                            gsap.to(current.trigger, {
                                y: 0,
                                opacity: 1,
                                duration: 0.5,
                            });
                            gsap.to(element, {
                                y: 0,
                                opacity: 1,
                                duration: 0.5,
                                delay: 0.2 * index
                            });
                        },
                    })

                });
            }

        }, store);

        return () => ctx.revert();
    }, [])



    return (
        <div ref={store} className={`w-full h-max flex items-center flex-col `}>
            {
                pathName === "/store" ? <PageHeading innerText={"Store"} />
                    : <Heading text={"Nearest Store"} />
            }
            <div className={`container_max_width w-full my-12 px-6`}>
                <StoreFilter />
                <div className={`storedetails w-full grid grid-cols-3 gap-6 my-12
                    max-lg:grid-cols-2
                    max-md:grid-cols-2
                    max-sm:grid-cols-1
                `}>
                    <StoreDetails />
                    <StoreDetails />
                    <StoreDetails />
                </div>
                {
                    pathName === "/store" &&
                    <div id="storeMap" className="w-full bg-slate-400 h-[60rem] rounded-3xl overflow-clip">
                        <iframe
                            onLoad={() => console.log("load")}
                            className="w-full h-full"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31632.976355446248!2d-86.77537090070786!3d33.55319308645901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891aa4f6775025%3A0x9326a00858ed2b68!2sBirmingham-Shuttlesworth%20International%20Airport!5e0!3m2!1sen!2sin!4v1704477449936!5m2!1sen!2sin"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                }
            </div>
        </div>
    )
}
