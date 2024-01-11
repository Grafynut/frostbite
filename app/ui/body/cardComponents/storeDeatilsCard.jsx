import Image from "next/image";
import store_image_new_york from "@/public/store_image/store_image_new_york.jpg";
import Link from "next/link";
export default function StoreDetails() {
    return (
        <div className="storeinfo border w-full pr-6 rounded-[50px_0px] overflow-clip border-solid border-stone-300 ">
            <div className="gap-5 flex flex-row">
                <div className="flex flex-col items-stretch w-[20rem] ">
                    <Image
                        loading="lazy"
                        src={store_image_new_york}
                        width={200}
                        height={200}
                        className="aspect-square object-contain object-center w-full overflow-hidden "
                        alt="Store Names"
                    />
                </div>
                <div className="flex flex-col items-stretch w-[53%] ml-5 ">
                    <div className="flex flex-col items-stretch my-auto ">
                        <div className="text-black text-2xl font-medium"><span className="text-2xl font-bold ">City :</span> Strada Santoro, Italy</div>
                        <div className="text-black text-2xl font-medium mt-3"><span className="text-2xl font-bold ">Full Address :</span> Strada Santoro 145, Donati veneto, BA 35212</div>
                        <Link href={"/store"}><div className="text-white font-medium text-2xl bg-violet-600 w-max  mt-16 px-7 py-2 rounded-2xl cursor-pointer">View on map</div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


