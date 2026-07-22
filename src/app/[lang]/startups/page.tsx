import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import { localize, startupContent, ventureBuildingSections } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import styles from "../social/Social.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const lang = (await params).lang as Locale;

  return pageMetadata({
    lang,
    path: "/startups",
    title: {
      en: "Venture Building - Revoluc",
      es: "Construcción de empresas - Revoluc",
      fr: "Construction d'entreprises - Revoluc",
    },
    description: {
      en: "Revoluc works with founders, early-stage teams and businesses that need an active company-building partner for validation, product strategy, engineering, operations and growth.",
      es: "Revoluc trabaja con fundadores, equipos en etapa temprana y empresas que necesitan un socio activo para validación, estrategia de producto, ingeniería, operaciones y crecimiento.",
      fr: "Revoluc travaille avec des fondateurs, des équipes en phase initiale et des entreprises qui ont besoin d'un partenaire actif pour la validation, la stratégie produit, l'ingénierie, les opérations et la croissance.",
    },
  });
}

const Startups = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(startupContent.title, lang)}</h1>
        <p className={styles.intro}>{localize(startupContent.intro, lang)}</p>

        <div className={styles.links}>
          {ventureBuildingSections.map((section) => (
            <article className={styles.link} key={section.title.en}>
              <div>
                <strong>{localize(section.title, lang)}</strong>
                <ul className={styles.itemList}>
                  {section.items.map((item) => (
                    <li key={item.en}>{localize(item, lang)}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>{localize(startupContent.note, lang)}</p>
        <Link className={styles.cta} href={`/${lang}/contact?reason=venture-building`}>
          {localize(startupContent.cta, lang)}
        </Link>
      </section>
    </main>
  );
};

export default Startups;

const eyebrowLabel = {
  en: "Incubation and venture building",
  es: "Incubación y construcción de empresas",
  fr: "Incubation et construction d'entreprises",
};
