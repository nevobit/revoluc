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
  metadataBase: new URL('https://helebba.com.co'),
  title: {
    default: 'Revoluc - Aceleradora de Startups y Transformación Empresarial',
    template: '%s | Revoluc - Aceleradora de Startups y Transformación Empresarial'
  },
  description: 'Revoluc es una aceleradora que impulsa el crecimiento de startups y empresas emergentes a través de mentoría, inversión y estrategias innovadoras. Nos especializamos en desarrollo tecnológico, marketing digital y optimización de modelos de negocio, ayudando a los emprendedores a escalar y alcanzar el éxito en el mercado.',
  applicationName: 'Helebba Software',
  keywords: ['aceleradora de startups', 'mentoría para startups', 'desarrollo tecnológico', 'Revoluc', 'soluciones empresariales', 'transformación digital', "desarrollo tecnológico", "marketing digital", "innovación"],
  authors: [ { name: 'Nevobit', url: 'https://nevobit.co'} ],
  creator: 'Nevobit Software',
  publisher: 'Nevobit Software',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/es-ES',
      'de-DE': '/de-DE',
    }
  },
  openGraph: {
    title: 'Helebba - El software de gestión para emprendedores',
    description:'Helebba es el software de gestión de negocios que te permite gestionar desde un mismo sitio tu facturación, contabilidad, inventario, CRM, proyectos y RRHH.',
    url: 'https://helebba.com.co',
    siteName: 'Helebba Software',
    type: 'website',
    locale: 'es-ES',
  },
  twitter: {
    title: 'Helebba - El software de gestión para emprendedores',
    description:'Helebba es el software de gestión de negocios que te permite gestionar desde un mismo sitio tu facturación, contabilidad, inventario, CRM, proyectos y RRHH.',
    creator: '@nevobitsoftware',
    site: 'Helebba',
    card: 'summary_large_image',
  }
}
