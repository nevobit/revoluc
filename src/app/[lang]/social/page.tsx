import { Locale } from "../../../../i18n-config";
import { localize, socialContent, socialImpactAreas } from "@/content/site";
import styles from "./Social.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

const Social = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(socialContent.title, lang)}</h1>
        <p className={styles.intro}>{localize(socialContent.intro, lang)}</p>

        <div className={styles.links}>
          {socialImpactAreas.map((area) => (
            <article className={styles.link} key={area.label}>
              <div>
                <strong>{area.label}</strong>
                <p>{localize(area.description, lang)}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>{localize(socialContent.note, lang)}</p>
      </section>
    </main>
  );
};

export default Social;

const eyebrowLabel = {
  en: "Social commitment",
  es: "Compromiso social",
  fr: "Engagement social",
};
