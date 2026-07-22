import { redirect } from "next/navigation";
import { Locale } from "../../../../i18n-config";
import { pageMetadata } from "@/content/seo";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const lang = (await params).lang as Locale;

  return pageMetadata({
    lang,
    path: "/mission",
    title: {
      en: "Mission - Revoluc",
      es: "Misión - Revoluc",
      fr: "Mission - Revoluc",
    },
    description: {
      en: "Revoluc builds technology companies with defined products, markets, operating context and clear portfolio relationships.",
      es: "Revoluc construye compañías tecnológicas con productos definidos, mercados claros, contexto operativo y relaciones de portafolio verificables.",
      fr: "Revoluc construit des entreprises technologiques avec des produits définis, des marchés clairs, un contexte opérationnel et des relations de portefeuille vérifiables.",
    },
  });
}

const Mission = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  redirect(`/${lang}/about#mission`);
};

export default Mission;
