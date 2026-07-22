import { Locale } from "../../../../i18n-config";
import { localize, missionContent } from "@/content/site";
import styles from "../ContentPage.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
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
