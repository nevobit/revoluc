import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "../i18n-config";
 
const locales = ["en", "es", "fr"];
function getLocale(request: NextRequest): string | undefined {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  const supportedLocales = [...i18n.locales];

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    supportedLocales,
  );

  return matchLocale(languages, supportedLocales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|img|images|_next/image|favicon.ico|opengraph-image|opengraph-image.png|robots.txt|sitemap.xml|sitemap-0.xml).*)",
  ],
};
