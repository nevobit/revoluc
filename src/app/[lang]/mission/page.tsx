import { Locale } from "../../../../i18n-config";
import { localize, missionContent } from "@/content/site";
import styles from "../ContentPage.module.css";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Mission = async ({ params }: PageProps) => {
  const lang = (await params).lang;

  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>Company building</p>
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
