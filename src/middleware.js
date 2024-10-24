import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (request.nextUrl.pathname === "/auth" && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!token && request.nextUrl.pathname !== "/auth") {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  console.log("middleware")

  return NextResponse.next()

}

export const config = {
  matcher: ["/profile/:path*", "/auth"],
};