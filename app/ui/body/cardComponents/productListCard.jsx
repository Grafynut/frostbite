import Image from "next/image";
export default function ProductListCard({ image, price, pname }) {
    return (
        <div className="productCard flex gap-6 justify-between bg-white w-full max-w-full min-w-[25.5rem] p-6 flex-col rounded-xl border
         lg:min-w-[24rem] max-sm:min-w-[20rem]
        ">
            <div className=" flex w-full flex-col overflow-hidden">
                <Image
                    width={300}
                    height={300}
                    src={image?.src}
                    alt={`${image?.alt}`}
                    className="max-w-full"
                />
            </div>
            <h4 className="text-black text-center text-3xl  capitalize">{pname !== "" ? pname : "name"}</h4>
            <div className="bg-cyan-300 shrink-0 h-[41px] flex-col rounded-md cursor-pointer grid place-items-center text-3xl  font-bold" >${price}</div>
        </div>
    );
}


