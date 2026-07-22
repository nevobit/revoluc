import { Locale } from "../../../../i18n-config";
import { aboutContent, localize } from "@/content/site";
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
    path: "/about",
    title: {
      en: "About Revoluc - Technology Holding",
      es: "Sobre Revoluc - Holding tecnológica",
      fr: "À propos de Revoluc - Holding technologique",
    },
    description: {
      en: "Learn how Revoluc Inc. builds and supports technology companies with shared infrastructure, execution and long-term operating responsibility.",
      es: "Conoce cómo Revoluc Inc. construye y acompaña compañías tecnológicas con infraestructura compartida, ejecución y responsabilidad operativa de largo plazo.",
      fr: "Découvrez comment Revoluc Inc. construit et soutient des entreprises technologiques avec infrastructure partagée, exécution et responsabilité opérationnelle à long terme.",
    },
  });
}

const About = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(aboutContent.title, lang)}</h1>
        <div className={styles.paragraphs}>
          {aboutContent.paragraphs[lang].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;

const eyebrowLabel = {
  en: "Technology holding",
  es: "Holding tecnológica",
  fr: "Holding technologique",
};
