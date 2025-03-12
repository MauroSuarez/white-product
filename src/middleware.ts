import { withAuthMiddleware } from "./application/middlewares/withAuthMiddleware"
import { withCookieMiddleware } from "./application/middlewares/withCookieMiddleware"
import { withI18nMiddleware } from "./application/middlewares/withI18nMiddleware"
import { stackMiddleware } from './application/middlewares/stackMiddleware'

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // '/((?!api|_next|fonts|icons|images|js|[\\w-]+\\.\\w+).*)',
    '/((?!_next|fonts|icons|images|js|[\\w-]+\\.\\w+).*)',
  ],
}

// import { match } from '@formatjs/intl-localematcher'
// import Negotiator from 'negotiator'
 
// let headers = { 'accept-language': 'en-US,enq=0.5' }
// let languages = new Negotiator({ headers }).languages()
// let locales = ['en-US', 'nl-NL', 'nl']
// let defaultLocale = 'en-US'
 
// match(languages, locales, defaultLocale)

const middlewares = [withAuthMiddleware, withCookieMiddleware, withI18nMiddleware]

export default stackMiddleware(middlewares)
 