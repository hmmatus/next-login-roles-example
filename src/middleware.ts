import { NextResponse, type NextRequest } from "next/server";
import { cookies } from 'next/headers'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const jwt = cookies().get('jwt');
  if (url.startsWith('/admin/dashboard') && !jwt) {
    return NextResponse.redirect(new URL('/login',request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard/:path*']
}