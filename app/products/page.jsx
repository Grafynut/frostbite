"use client"

import { useEffect, useRef, useState } from "react";
import PageHeading from "../ui/body/pageHeading";
import ProductListCard from "../ui/body/cardComponents/productListCard";
import { products } from "@/app/content";

export default function page() {
    const productsData = [...products, ...products, ...products, ...products];
    const productList = useRef();
    let isLoading = false
    const [dataCount, setDataCount] = useState(10);

    function handlescroll() {
        let app = productList.current;
        if (
            app?.getBoundingClientRect().bottom - window.innerHeight < -200 &&
            !isLoading
        ) {
            isLoading = true;
            setDataCount((prev) => prev += 5);
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", handlescroll);
    })



    return (
        <div className='w-full h-max flex flex-col items-center'>
            <PageHeading innerText={"Products"} />
            <div ref={productList} className={`container_max_width mx-6 mt-20 productlist grid grid-cols-5 gap-10 pb-16
            max-lg:grid-cols-3
            max-md:grid-cols-2
            `} >
                {productsData.map((prod, index) => {
                    if (index < dataCount) {
                        return <ProductListCard image={{ src: prod.image, alt: prod.name }} pname={prod.name} price={prod.price} key={index} />
                    };
                })}
            </div>
        </div>
    )
}
