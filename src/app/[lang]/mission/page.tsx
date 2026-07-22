import { Locale } from "../../../../i18n-config";
import { localize, missionContent } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import styles from "../ContentPage.module.css";

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

  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(missionContent.title, lang)}</h1>
        <div className={styles.paragraphs}>
          {missionContent.paragraphs[lang].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Mission;

const eyebrowLabel = {
  en: "Company building",
  es: "Construcción de compañías",
  fr: "Construction d'entreprises",
};
