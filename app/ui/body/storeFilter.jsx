import React from 'react'

export default function StoreFilter() {
    return (
        <div className="storeFilterConteiner flex flex-row justify-between gap-6">
            <input type='text' className="bg-white text-3xl px-4 py-1 border-2 border-[#ccc] w-[25%] max-w-full rounded-xl placeholder:text-2xl" placeholder='Enter country name' />
            <input type='text' className="bg-white text-3xl px-4 py-1 border-2 border-[#ccc] w-[50%] max-w-full rounded-xl placeholder:text-2xl" placeholder='Enter City name' />
            <input type='text' className="bg-white text-3xl px-4 py-1 border-2 border-[#ccc] w-[25%] max-w-full rounded-xl placeholder:text-2xl" placeholder='Enter City zip code' />
        </div>
    )
}
