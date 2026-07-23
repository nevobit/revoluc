import type { Metadata } from "next";
import { i18n, Locale } from "../../i18n-config";
import { localize } from "./site";

type SeoConfig = {
  lang: Locale;
  path?: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const siteUrl = "https://www.revoluc.com";
export const defaultOgImage = `${siteUrl}/opengraph-image.png`;

export const localizedPath = (lang: Locale, path = "") => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return cleanPath === "/" ? `/${lang}` : `/${lang}${cleanPath}`;
};

export const languageAlternates = (path = "") =>
  ({
    ...Object.fromEntries(
      i18n.locales.map((locale) => [locale, localizedPath(locale, path)]),
    ),
    "x-default": localizedPath(i18n.defaultLocale, path),
  });

export const pageMetadata = ({
  lang,
  path = "",
  title,
  description,
}: SeoConfig): Metadata => {
  const localizedTitle = localize(title, lang);
  const localizedDescription = localize(description, lang);
  const pathname = localizedPath(lang, path);

  return {
    metadataBase: new URL(siteUrl),
    title: localizedTitle,
    description: localizedDescription,
    alternates: {
      canonical: pathname,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: localizedTitle,
      description: localizedDescription,
      url: `${siteUrl}${pathname}`,
      siteName: "Revoluc Inc.",
      type: "website",
      locale: lang,
      images: [
        {
          url: defaultOgImage,
          width: 1200,
          height: 630,
          alt: "Revoluc - Technology Holding and Venture Builder",
          type: "image/png",
        },
      ],
    },
    twitter: {
      title: localizedTitle,
      description: localizedDescription,
      card: "summary_large_image",
      images: [defaultOgImage],
    },
  };
};
