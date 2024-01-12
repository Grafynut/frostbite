"use client"

import ProductListCard from "../body/cardComponents/productListCard";
// import { products } from "@/app/content";
import Heading from "../body/heading";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// content
import image1 from "@/public/Products/cardp/image1.png";
import image2 from "@/public/Products/cardp/image2.png";
import image3 from "@/public/Products/cardp/image3.png";
import image4 from "@/public/Products/cardp/image4.png";

const products = [
    {
        image: image1,
        name: "Blackberry Balsamic Bonanza",
        price: 50
    },
    {
        image: image2,
        name: "Caramel Cognac Cascade",
        price: 50
    },
    {
        image: image3,
        name: "Pistachio Rosewater Parfait",

        price: 50
    }
    , {
        image: image4,
        name: "Beetroot & Blood Orange Blast",
        price: 50
    },
    {
        image: image1,
        name: "Blackberry Balsamic Bonanza",
        price: 50
    },
]

export default function ProductList() {
    const productsData = [...products, ...products, ...products, ...products]
    const [dataCount, setDataCount] = useState(5);
    const store_products = useRef();

    const handleclick = () => {
        if (productsData === productsData.length) return;
        setDataCount(prev => prev += 5);
    }

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            ScrollTrigger.defaults({
                toggleActions: "restart pause reverse pause",
                // markers: true
            })

            gsap.to(".loadMorebutton", {
                y: "50%",
                opacity: 0,
            })
            const prodcuts = store_products.current.childNodes[1].childNodes;

            prodcuts.forEach((element, index) => {
                gsap.to(element, {
                    x: "50%",
                    opacity: 0,
                })

                ScrollTrigger.create({
                    trigger: element,
                    start: "top center",
                    onEnter: (current) => {
                        gsap.to(current.trigger, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            delay: 0.2 * index
                        });

                        if (index === prodcuts.length - 2) {
                            gsap.to(".loadMorebutton", {
                                y: 0,
                                opacity: 1,
                                duration: 0.3,
                                delay: 0.2 * (index + 1)
                            })
                        }
                    },
                })
            });

        }, store_products);

        return () => ctx.revert();
    }, [])


    return (
        <div ref={store_products} className={`productlist_conationer relative bg-[#DDF6FF] flex flex-col justify-center items-center gap-12 w-full h-max mt-20 mb-[30rem] pt-34 `}>
            <Heading text={"classic"} />
            <div className={`container_max_width px-6 productlist grid grid-cols-5 gap-10 pb-16
             max-lg:grid-cols-3
             max-sm:grid-cols-2
            `} >
                {productsData.map((prod, index) => {
                    if (index < dataCount) {
                        return <ProductListCard image={{ src: prod.image, alt: prod.name }} pname={prod.name} price={prod.price} key={index} />
                    };
                })}
            </div>
            <button className={`loadMorebutton py-6 px-24 text-3xl capitalize bg-white w-max rounded-2xl mb-4 transition-all`}
                style={{
                    boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.25), 0px -3px 6px 2px rgba(96, 213, 255, 0.25) inset",
                }}
                onMouseEnter={(e) => e.target.style.boxShadow = "0px 1px 0px 0px rgba(0, 0, 0, 0.25), 0px -1px 6px 1px rgba(96, 213, 255, 0.25) inset"}
                onMouseLeave={(e) => e.target.style.boxShadow = "0px 4px 0px 0px rgba(0, 0, 0, 0.25), 0px -3px 6px 2px rgba(96, 213, 255, 0.25) inset"}
                onClick={handleclick}
            >Load More</button>
        </div>

    )
}
