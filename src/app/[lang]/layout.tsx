import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { i18n, Locale } from "../../../i18n-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { localize } from "@/content/site";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  params,
  children
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang as Locale;
  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Sidebar params={params} />
        <Footer />
      </body>
    </html>
  );
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const lang = (await params).lang as Locale;
  const title = localize(metadataCopy.title, lang);
  const description = localize(metadataCopy.description, lang);

  return {
    metadataBase: new URL("https://revoluc.com"),
    title: {
      default: title,
      template: "%s | Revoluc",
    },
    description,
    applicationName: "Revoluc Inc.",
    keywords: [
      "technology holding",
      "venture builder",
      "company builder",
      "Revoluc",
      "digital products",
      "Latin America technology",
    ],
    authors: [{ name: "Nevobit", url: "https://nevobit.co" }],
    creator: "Nevobit Software",
    publisher: "Nevobit Software",
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        es: "/es",
        fr: "/fr",
      },
    },
    openGraph: {
      title,
      description,
      url: `https://revoluc.com/${lang}`,
      siteName: "Revoluc Inc.",
      type: "website",
      locale: lang,
    },
    twitter: {
      title,
      description,
      site: "Revoluc Inc.",
      card: "summary_large_image",
    },
  };
}

const metadataCopy = {
  title: {
    en: "Revoluc - Technology Holding and Venture Builder",
    es: "Revoluc - Holding tecnológica y Venture Builder",
    fr: "Revoluc - Holding technologique et Venture Builder",
  },
  description: {
    en: "Revoluc is a technology holding company that builds, owns and scales digital products and businesses for Latin American and global markets.",
    es: "Revoluc es una holding tecnológica que construye, posee y escala productos digitales y negocios para mercados latinoamericanos y globales.",
    fr: "Revoluc est une holding technologique qui construit, détient et développe des produits numériques et des entreprises pour les marchés latino-américains et mondiaux.",
  },
};
