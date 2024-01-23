import { NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};

export default function middleware(request) {
  // Your middleware logic here
  return NextResponse.next();
}

// FOR MORE INFORMATION CHECK: https://nextjs.org/docs/app/building-your-application/routing/middleware
