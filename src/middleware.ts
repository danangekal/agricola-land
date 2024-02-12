import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { hasCookiesCredential } from './app/action';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAuthenticatedOk = await hasCookiesCredential();

  if (pathname === '/' && isAuthenticatedOk) {
    return NextResponse.redirect(new URL('/farmers', req.url));
  } else if (pathname !== '/' && !isAuthenticatedOk) {
    return NextResponse.redirect(new URL('/', req.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/', '/farmers/:path*'],
};
