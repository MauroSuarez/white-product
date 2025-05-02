
import { NextResponse, type NextFetchEvent, type NextRequest } from 'next/server'
import { MiddlewareFactory } from './stackMiddleware'
import { useAuthStore } from '@/infraestructure/stores/authStore'

// const prefixes = ['/']

const getAuthState = () => {
  return useAuthStore.getState()
}

export const withAuthMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _event: NextFetchEvent) => {
    const { isLoggedIn, user, token } = getAuthState()
    const { pathname } = request.nextUrl

    // Rutas protegidas
    const protectedRoutes = [
      '/es/freewheels/onboarding',
    ]

    // Verificar si la ruta actual está protegida
    const isProtectedRoute = protectedRoutes.some(route =>
      pathname.startsWith(route)
    )

    // console.log(isProtectedRoute , isLoggedIn , user , token, 'A VEr')

     // Si la ruta está protegida y el usuario no está autenticado
    if (isProtectedRoute && !isLoggedIn && !user && !token) {
      // Redirigir al login con la ruta original como parámetro
      // const homeUrl = new URL('/es', request.url)
      // loginUrl.searchParams.set('from', pathname)
      // return NextResponse.redirect(homeUrl)
    }

    return next(request, _event)
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login|register|$).*)',
  ],
}

/*
// import { getToken } from 'next-auth/jwt'
// import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { MiddlewareFactory } from './stackMiddleware'

// const prefixes = ['/']

export const withAuthMiddleware: MiddlewareFactory = (next) => {
  return async (request: NextRequest, _event: NextFetchEvent) => {
    // const { pathname } = request.nextUrl

    // if (!prefixes.some((prefix) => pathname.startsWith(prefix))) {
    //   return next(request, _event)
    // }

    // const hasAccessToken = request.cookies.has(AUTHCOOKIES.ACCESS_TOKEN)

    // if (!hasAccessToken) {
    //   const url = new URL(`/`, request.url)
    //   return NextResponse.redirect(url)
    // }

    // const accessToken =
    //   request.cookies.get(AUTHCOOKIES.ACCESS_TOKEN)?.value || ''

    // const customer = await getCustomer(accessToken)

    // if (!customer) {
    //   const url = new URL(/, request.url)
    //   return NextResponse.redirect(url)
    // }
    // console.log('withAuthMiddleware')

    return next(request, _event)
  }
}
*/