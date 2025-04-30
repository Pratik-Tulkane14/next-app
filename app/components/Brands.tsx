import Image from 'next/image'
import React from 'react'
interface Images {
    path: string,
    alt: string,
    width: number,
    height: number,
}
const Brands = () => {
    const baseImages: Images[] = [
        {
            path: "sonos.svg",
            alt: "sonos",
            width: 89,
            height: 27
        },
        {
            path: "spotify.svg",
            alt: "spotify",
            width: 100,
            height: 30
        },
        {
            path: "/open-ai.svg",
            alt: "open-ai",
            width: 113,
            height: 27
        },
        {
            path: "/zapier.svg",
            alt: "zapier",
            width: 90,
            height: 30
        },

        {
            path: "patreon.svg",
            alt: "patreon",
            width: 117,
            height: 16
        },
        {
            path: "/auth0.svg",
            alt: "auth",
            width: 90,
            height: 32
        },
        {
            path: "/imdb.svg",
            alt: "imdb",
            width: 60,
            height: 25
        },


    ]
    const images = [...baseImages, ...baseImages, ...baseImages, ...baseImages, ...baseImages]
    return (
        <>
            <p className='text-[#888888] text-center'>Powering the best frontend teams</p>
            <div className="overflow-x-auto scrollbar-hide whitespace-nowrap mt-5">
                <div className='flex gap-16 justify-center items-center opacity-[0.5] animate-scroll-left'>
                    {images.map((item, index) => {
                        return (
                            <Image
                                key={index}
                                src={item.path}
                                alt={item.alt}
                                height={item.height}
                                width={item.width}
                                loading='lazy'
                                className='dark:invert object-contain'
                            />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Brands