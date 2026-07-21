import { Locale } from "../../../../i18n-config";
import { localize, teamContent } from "@/content/site";
import styles from "../ContentPage.module.css";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Team = async ({ params }: PageProps) => {
  const lang = (await params).lang;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <div className={styles.narrow}>
          <p className={styles.eyebrow}>Leadership</p>
          <h1>{localize(teamContent.title, lang)}</h1>
          <p className={styles.lead}>{localize(teamContent.intro, lang)}</p>
        </div>

        <article className={styles.panel}>
          <div className={styles.profile}>
            <div className={styles.avatar} aria-hidden="true">
              RV
            </div>
            <div>
              <h2>{localize(teamContent.placeholderName, lang)}</h2>
              <p className={styles.role}>{localize(teamContent.placeholderRole, lang)}</p>
              <p>{localize(teamContent.placeholderBio, lang)}</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Team;
