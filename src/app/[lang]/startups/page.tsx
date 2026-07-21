import { Locale } from "../../../../i18n-config";
import { localize, startupContent, startupSupportAreas } from "@/content/site";
import styles from "../social/Social.module.css";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Startups = async ({ params }: PageProps) => {
  const lang = (await params).lang;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>Incubation and venture building</p>
        <h1>{localize(startupContent.title, lang)}</h1>
        <p className={styles.intro}>{localize(startupContent.intro, lang)}</p>

        <div className={styles.links}>
          {startupSupportAreas.map((area) => (
            <article className={styles.link} key={area.label}>
              <div>
                <strong>{area.label}</strong>
                <p>{localize(area.description, lang)}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>{localize(startupContent.note, lang)}</p>
        <a className={styles.cta} href="mailto:hi@revoluc.com">
          {localize(startupContent.cta, lang)}
        </a>
      </section>
    </main>
  );
};

export default Startups;
