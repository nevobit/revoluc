import { Locale } from "../../../../i18n-config";
import { founderProfile, localize, teamContent } from "@/content/site";
import styles from "../ContentPage.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

const Team = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <div className={styles.narrow}>
          <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
          <h1>{localize(teamContent.title, lang)}</h1>
          <p className={styles.lead}>{localize(teamContent.intro, lang)}</p>
        </div>

        <article className={styles.panel}>
          <div className={styles.profile}>
            <div className={styles.avatar} aria-hidden="true">
              NM
            </div>
            <div>
              <h2>{founderProfile.name}</h2>
              <p className={styles.role}>{founderProfile.role}</p>
              <p>{localize(founderProfile.bio, lang)}</p>
              <ul className={styles.inlineList}>
                {founderProfile.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              <a
                className={styles.button}
                href={founderProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Team;

const eyebrowLabel = {
  en: "Leadership",
  es: "Liderazgo",
  fr: "Direction",
};
