import { NextResponse } from "next/server";

interface NavItems {
  id: number;
  name: string;
  href: string;
  current?:boolean;
}
const navItems: NavItems[] = [
  {
    id: 1,
    name: "home",
    href: "/",
    current:true
  },
  {
    id: 2,
    name: "about",
    href: "/about",
  },
  {
    id: 3,
    name: "docs",
    href: "/docs",
  },
  {
    id: 4,
    name: "blogs",
    href: "/blogs",
  },
];
export async function GET() {
  return NextResponse.json(navItems);
}
