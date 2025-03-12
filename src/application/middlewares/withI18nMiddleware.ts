import { NextRequest, NextResponse } from 'next/server'
import { MiddlewareFactory } from './stackMiddleware';

// const PUBLIC_FILE = /\.(.*)$/

const locales = ['en', 'es'];

function getLocale(/*request: NextRequest*/) {
  // console.log(request, 'A VER');
  return locales[1];
}
 
export const withI18nMiddleware: MiddlewareFactory = (/*next*/) => {
  return async (request: NextRequest/*, _event: NextFetchEvent*/) => {
    const { pathname } = request.nextUrl

    const pathnameHasLocale = locales.some((locale) => 
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return;
    
    // // Redirect if there is no locale
    const locale = getLocale(/*request*/);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // // e.g. incoming request is /products
    // // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
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