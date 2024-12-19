import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest, NextResponse } from 'next/server'
import { i18n } from '../i18n-config';
 
const locales = ['en', 'es', 'fr']
function getLocale(request: NextRequest): string | undefined {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    // @ts-expect-error locales are readonly
    const locales: string[] = i18n.locales;

    const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
        locales
    );

    const locale = matchLocale(languages, locales, i18n.defaultLocale);
    
    return locale;
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
    console.log({pathnameHasLocale})

    if (pathnameHasLocale) return;

    const locale = getLocale(request);

    request.nextUrl.pathname = `/${locale}${pathname}`;

    console.log({locale})
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
}

export const config = {
    matcher: ["/((?!api|_next/static|images|_next/image|favicon.ico|robosts.txt|sitemap.xml|sitemap-0.xml))"]
}