import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const style = 'text-[#888888] text-sm hover:text-white transition-all ease-in-out duration-300'
  return (
    <>
      <div className='p-6 border-t-1 border-[#eaeaea] dark:border-gray-800 h-full w-full flex flex-wrap gap-10 justify-between items-start'>
        <div className="">
          <Image
            src={"/next.svg"}
            alt='next logo'
            height={100}
            width={100}
            className='dark:invert'
          />
        </div>
        <div className="flex flex-col gap-2">
          <h6 className='text-white '>Resources</h6>
          <a href="#" className={style}>Docs</a>
          <a href="#" className={style}>Support Policy</a>
          <a href="#" className={style}>Learn</a>
          <a href="#" className={style}>Showcase</a>
          <a href="#" className={style}>Blog</a>
          <a href="#" className={style}>Team</a>
          <a href="#" className={style}>Analysis</a>
          <a href="#" className={style}>Next.Js Conf</a>
          <a href="#" className={style}>Previews</a>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className='text-white '>More</h6>
          <a href="#" className={style}>NextJs Commerce</a>
          <a href="#" className={style}>Contact Sales</a>
          <a href="#" className={style}>Community</a>
          <a href="#" className={style}>GitHub</a>
          <a href="#" className={style}>Releases</a>
          <a href="#" className={style}>Telemetry</a>
          <a href="#" className={style}>Governance</a>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className='text-white '>About Vercel</h6>
          <a href="#" className={style}>NextJs + Vercel</a>
          <a href="#" className={style}>Open Source Software</a>
          <a href="#" className={style}>GitHub</a>
          <a href="#" className={style}>Blue Sky</a>
          <a href="#" className={style}>X</a>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className='text-white '>Legal</h6>
          <a href="#" className={style}>Privacy Policy</a>
          <a href="#" className={style}>Cookies Preference</a>
        </div>
        <div className="flex flex-col gap-2">
          <h6 className='text-white '>Subscribe to Our newsletter</h6>
          <p className={style}>Stay updated on new releases and features, guides, and case studies.</p>
          <a href="#" className={style}>Cookies Preference</a>
        </div>
      </div>
        <p className='text-[#888888] text-center text-sm'>© {new Date().getFullYear()} Vercel,Inc. </p>
    </>
  )
}

export default Footer
