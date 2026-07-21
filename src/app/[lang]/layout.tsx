import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { i18n, Locale } from "../../../i18n-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

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
  params: Promise<{ lang: Locale }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;
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


export const metadata: Metadata = {
  metadataBase: new URL('https://revoluc.com'),
  title: {
    default: 'Revoluc - Technology Holding and Venture Builder',
    template: '%s | Revoluc'
  },
  description: 'Revoluc is a technology holding company that builds, owns and scales digital products and businesses for Latin American and global markets.',
  applicationName: 'Revoluc Inc.',
  keywords: ['technology holding', 'venture builder', 'company builder', 'Revoluc', 'digital products', 'Latin America technology'],
  authors: [ { name: 'Nevobit', url: 'https://nevobit.co'} ],
  creator: 'Nevobit Software',
  publisher: 'Nevobit Software',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'es': '/es',
      'fr': '/fr',
    }
  },
  openGraph: {
    title: 'Revoluc - Technology Holding and Venture Builder',
    description:'Revoluc builds, owns and scales digital products and businesses for Latin American and global markets.',
    url: 'https://revoluc.com',
    siteName: 'Revoluc Inc.',
    type: 'website',
    locale: 'en',
  },
  twitter: {
    title: 'Revoluc - Technology Holding and Venture Builder',
    description:'Revoluc builds, owns and scales digital products and businesses for Latin American and global markets.',
    site: 'Revoluc Inc.',
    card: 'summary_large_image',
  }
}
