// import { getToken } from 'next-auth/jwt';
// import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import { MiddlewareFactory } from './stackMiddleware';

// const prefixes = ['/'];

export const withAuthMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _event: NextFetchEvent) => {
    // const { pathname } = request.nextUrl;

    // if (!prefixes.some((prefix) => pathname.startsWith(prefix))) {
    //   return next(request, _event);
    // }

    // const hasAccessToken = request.cookies.has(AUTHCOOKIES.ACCESS_TOKEN);

    // if (!hasAccessToken) {
    //   const url = new URL(`/`, request.url);
    //   return NextResponse.redirect(url);
    // }

    // const accessToken =
    //   request.cookies.get(AUTHCOOKIES.ACCESS_TOKEN)?.value || '';

    // const customer = await getCustomer(accessToken);

    // if (!customer) {
    //   const url = new URL(/, request.url);
    //   return NextResponse.redirect(url);
    // }
    // console.log('withAuthMiddleware')

    return next(request, _event);
  };
}