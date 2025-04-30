import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NavItem from '../types/interface'
import getNavItems from '../helper/getNavItems'

const NavItems = () => {
  const pathName = usePathname();
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const style = "capitalize text-sm transition-all ease-in-out duration-150 relative after:absolute after:content-[''] after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-[#BFBFBF] after:transition-all after:duration-150 after:ease-in-out text-[#888888] hover:text-[#BFBFBF] after:scale-x-0 hover:after:scale-x-100"
  useEffect(() => {
    const getNav = async () => {
      const res = await getNavItems();
      console.log(res, "res");
      setNavItems(res);
    }
    getNav()
  }, [])
  return (
    <>
      {navItems.map((item: NavItem) => {
        return (
          <Link key={item.id} href={item.href} className={`${pathName === item.href && "text-gray-300  after:scale-x-100"} ${style}`}>
            {item.name}
          </Link>
        )
      })}
    </>

  )
}

export default NavItems