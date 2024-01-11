"use client"

import PageHeading from "../ui/body/pageHeading";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from "react";
import gsap from "gsap"

export default function page(props) {
    const contact = useRef(),
        socialCotact = useRef(),
        contactFrom = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(contactFrom.current, {
                y: "50%",
                opacity: 0,
                duration: 1,
                delay: 0.3
            })

            socialCotact.current.childNodes.forEach((elem, index) => {
                gsap.from(elem, {
                    y: "50%",
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.5 * index
                })
            })

            gsap.from("#address", {
                y: "50%",
                opacity: 0,
                duration: 1,
                delay: 0.6
            })


        }, contact);

        return () => ctx.revert();
    }, [])


    return (
        <div className='w-full h-max flex flex-col items-center '>
            <PageHeading innerText={"Conatact"} />
            <div ref={contact} className="container_max_width  w-full flex flex-col items-center mt-16 px-6">
                <div className="w-full relative">
                    <div ref={socialCotact} className="w-max h-max absolute left-0 top-1/3 -translate-y-1/2 flex flex-col items-center gap-6">
                        <SoialLinkComp path={"https://www.instagram.com"} icon={faInstagram} />
                        <SoialLinkComp path={"https://www.facebook.com"} icon={faFacebook} />
                        <SoialLinkComp path={"mailto:su6hajit@gmail.com"} icon={faEnvelope} />
                    </div>
                    <form ref={contactFrom} className="flex w-full flex-col items-center gap-5 ">
                        <div className="w-3/6 flex flex-col px-5 gap-5
                        max-md:min-w-[70%]
                         ">
                            <div className="w-full">
                                <label className="text-black text-3xl font-medium ">Name</label>
                                <input
                                    className=" text-black w-full text-2xl border shadow-sm bg-white justify-center mt-2.5 pl-4 pr-16 py-2.5 rounded-xl border-solid border-black items-start  "
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="w-full ">
                                <label className="text-black text-3xl font-medium ">Email</label>
                                <input
                                    className="w-full text-black text-2xl border shadow-sm bg-white justify-center mt-2.5 pl-4 pr-16 py-2.5 rounded-xl border-solid border-black items-start  "
                                    placeholder="Enter your name"
                                />

                            </div>
                            <div className="w-full ">
                                <label className="text-black text-3xl font-medium ">Message</label>
                                <textarea className="w-full text-black text-2xl border shadow-sm bg-white mt-2.5 pl-4 pr-16 pt-4 pb-24 rounded-xl border-solid border-black items-start "
                                    placeholder=" Enter your Message"
                                >
                                </textarea>
                            </div>
                        </div>
                        <button type="submit" className="shadow-sm bg-rose-300  mt-12 rounded-xl px-40 py-5 text-4xl font-bold" >Send</button>
                    </form>
                </div>
                <div id="address" className="w-full bg-slate-400 h-[60rem] rounded-3xl overflow-clip mt-12">
                    <iframe
                        className="w-full h-full"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31632.976355446248!2d-86.77537090070786!3d33.55319308645901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88891aa4f6775025%3A0x9326a00858ed2b68!2sBirmingham-Shuttlesworth%20International%20Airport!5e0!3m2!1sen!2sin!4v1704477449936!5m2!1sen!2sin"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
}


const SoialLinkComp = ({ path, icon }) => {
    return (
        <Link href={path} target="_blank">
            <div className="w-20 h-20 p-2">
                <FontAwesomeIcon icon={icon} className="text-[#F096BA] w-full h-full" />
            </div>
        </Link>
    )
}