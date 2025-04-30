'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoMdClose } from "react-icons/io";
import { CgMenuLeftAlt } from 'react-icons/cg'
import NavItems from './NavItems'

const Navbar = () => {
    const [isUserScroll, setIsUserScroll] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const handleMenu = () => {
        setIsMobileMenuOpen((prev) => !prev)
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsUserScroll(true);
            } else {
                setIsUserScroll(false);

            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])
    return (
        <>
            <nav className={`z-20 sticky top-0 backdrop-saturate-180 backdrop-blur-sm  flex justify-between items-center p-4 bg-[rgba(0,0,0,0.2)]   ${isUserScroll ? " border-b border-gray-800 shadow-2xl" : ""}`}>
                <Link href={"/"}>
                <Image
                    src="/next.svg"
                    height={100}
                    width={100}
                    alt='Brand logo'
                    className='dark:invert'
                    />
                    </Link>
                <div className="md:flex hidden gap-4">
                    <NavItems />
                </div>
                <div className="flex items-center gap-4">

                    <Link href={"/sign"} className='hidden md:flex  border-1 rounded-md px-4 py-1.5 text-md hover:text-black hover:bg-white hover:transition-all hover:ease-in-out hover:duration-400'>Explore</Link>
                    {isMobileMenuOpen ?
                        <IoMdClose className='md:hidden cursor-pointer text-white' onClick={handleMenu} />
                        :
                        <CgMenuLeftAlt className='md:hidden curser-pointer' onClick={handleMenu} />
                    }
                </div>
            </nav>
            <nav className={`${isMobileMenuOpen ? "right-0 opacity-100" : "-right-full opacity-0"} md:hidden fixed top-0 z-10 flex flex-col bg-gray-900 h-screen w-full justify-center items-center gap-4 transition-all duration-400 ease-in-out`}>
                <NavItems />
                <Link href={"/sign"} className='w-[60%] border-1 rounded-md px-4 py-1.5 text-md text-center hover:text-black hover:bg-white hover:transition-all hover:ease-in-out hover:duration-400'>Explore</Link>
            </nav>
        </>
    )
}

export default Navbar