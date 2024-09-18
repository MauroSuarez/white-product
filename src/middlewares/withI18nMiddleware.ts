import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { MiddlewareFactory } from './stackMiddleware';

const PUBLIC_FILE = /\.(.*)$/

let locales = ['en', 'es'];

function getLocale(request: NextRequest) {
  // console.log(request, 'A VER');
  return locales[1];
}
 
export const withI18nMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _event: NextFetchEvent) => {
    const { pathname } = request.nextUrl
    // console.log(pathname, 'A VER')
    const pathnameHasLocale = locales.some((locale) => {
      console.log(locale, pathname.startsWith(`/${locale}/`), pathname === `/${locale}`, 'A VER')
      return pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
      }
    )
    console.log(pathnameHasLocale, 'A VER')
    if (pathnameHasLocale) return;
    
    // // Redirect if there is no locale
    const locale = getLocale(request);
    console.log(locale, 'Y AHORA')
    request.nextUrl.pathname = `/${locale}${pathname}`;
    console.log(request.nextUrl.pathname, 'AHORA IS?')
    // // e.g. incoming request is /products
    // // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
    // return NextResponse.redirect(
    //   new URL(`/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url)
    // )
  };
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}