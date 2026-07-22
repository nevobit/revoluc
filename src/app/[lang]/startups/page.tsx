import { Locale } from "../../../../i18n-config";
import { localize, startupContent, ventureBuildingSections } from "@/content/site";
import styles from "../social/Social.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
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
            <article className={styles.link} key={section.title}>
              <div>
                <strong>{section.title}</strong>
                <ul className={styles.itemList}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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

const eyebrowLabel = {
  en: "Incubation and venture building",
  es: "Incubación y venture building",
  fr: "Incubation et venture building",
};
