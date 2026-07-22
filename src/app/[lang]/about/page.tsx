import { Locale } from "../../../../i18n-config";
import { aboutContent, localize } from "@/content/site";
import styles from "../ContentPage.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
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
