import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
   if (request.nextUrl.pathname === "/docs") {
     console.log("Someone visited the about page!");
   }
  return NextResponse.redirect(new URL("/", request.url));
}

