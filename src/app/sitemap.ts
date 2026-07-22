import type { MetadataRoute } from "next";
import { i18n, Locale } from "../../i18n-config";
import { companies } from "@/content/site";
import { localizedPath, siteUrl } from "@/content/seo";

const staticPaths = [
  "",
  "/about",
  "/companies",
  "/contact",
  "/mission",
  "/social",
  "/startups",
  "/team",
];

const legalPaths = [
  "/legal/privacy-policy",
  "/legal/terms-of-use",
  "/legal/cookie-policy",
  "/legal/security-policy",
  "/legal/accessibility-statement",
];

const alternateUrls = (path: string) =>
  ({
    ...Object.fromEntries(
      i18n.locales.map((locale) => [
        locale,
        `${siteUrl}${localizedPath(locale, path)}`,
      ]),
    ),
    "x-default": `${siteUrl}${localizedPath(i18n.defaultLocale, path)}`,
  });

const sitemapEntry = (locale: Locale, path: string): MetadataRoute.Sitemap[number] => ({
  url: `${siteUrl}${localizedPath(locale, path)}`,
  lastModified: new Date("2026-07-22"),
  changeFrequency: path === "" ? "weekly" : "monthly",
  priority: path === "" ? 1 : 0.7,
  alternates: {
    languages: alternateUrls(path),
  },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const companyPaths = companies.map((company) => `/companies/${company.slug}`);
  const paths = [...staticPaths, ...companyPaths, ...legalPaths];

  return i18n.locales.flatMap((locale) =>
    paths.map((path) => sitemapEntry(locale, path)),
  );
}
