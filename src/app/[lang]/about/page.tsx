import { Locale } from "../../../../i18n-config";
import { aboutContent, localize } from "@/content/site";
import styles from "../ContentPage.module.css";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const About = async ({ params }: PageProps) => {
  const lang = (await params).lang;

  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>Technology holding</p>
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
