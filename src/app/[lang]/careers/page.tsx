import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import { careersContent, careersOpenings, careersSections, localize } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import styles from "../social/Social.module.css";
import cardStyles from "../portfolio/Portfolio.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const lang = (await params).lang as Locale;

  return pageMetadata({
    lang,
    path: "/careers",
    title: {
      en: "Careers - Revoluc",
      es: "Carreras - Revoluc",
      fr: "Carrières - Revoluc",
    },
    description: {
      en: "Careers at Revoluc, including open roles for Junior Software Developer, UX/UI Designer and Junior Marketing across the group.",
      es: "Carreras en Revoluc, incluyendo vacantes abiertas para Junior Software Developer, Diseñador UX/UI y Junior Marketing dentro del grupo.",
      fr: "Carrières chez Revoluc, y compris des postes ouverts de Junior Software Developer, Designer UX/UI et Marketing Junior au sein du groupe.",
    },
  });
}

const Careers = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(careersContent.title, lang)}</h1>
        <p className={styles.intro}>{localize(careersContent.intro, lang)}</p>

        <section className={cardStyles.groups} aria-label={localize(openingsLabel, lang)}>
          <div className={cardStyles.group}>
            <h2>{localize(openingsLabel, lang)}</h2>
            <div className={cardStyles.grid}>
              {careersOpenings.map((opening) => (
                <article className={cardStyles.card} key={opening.title.en}>
                  <div className={cardStyles.logo} aria-hidden="true">
                    {opening.initials}
                  </div>
                  <div>
                    <p className={cardStyles.status}>{localize(opening.status, lang)}</p>
                    <h3>{localize(opening.title, lang)}</h3>
                    <p className={cardStyles.category}>{localize(opening.category, lang)}</p>
                    <p className={cardStyles.description}>
                      {localize(opening.description, lang)}
                    </p>
                    <dl className={cardStyles.meta}>
                      <div>
                        <dt>{localize(fieldLabels.area, lang)}</dt>
                        <dd>{localize(opening.area, lang)}</dd>
                      </div>
                      <div>
                        <dt>{localize(fieldLabels.focus, lang)}</dt>
                        <dd>{localize(opening.focus, lang)}</dd>
                      </div>
                      <div>
                        <dt>{localize(fieldLabels.profile, lang)}</dt>
                        <dd>{localize(opening.profile, lang)}</dd>
                      </div>
                    </dl>
                    <Link className={cardStyles.link} href={`/${lang}/contact?reason=careers`}>
                      {localize(careersContent.cta, lang)}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.links}>
          {careersSections.map((section) => (
            <article className={styles.link} key={section.title.en}>
              <div>
                <strong>{localize(section.title, lang)}</strong>
                <ul className={styles.itemList}>
                  {section.items.map((item) => (
                    <li key={item.en}>{localize(item, lang)}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>{localize(careersContent.note, lang)}</p>
      </section>
    </main>
  );
};

export default Careers;

const eyebrowLabel = {
  en: "Careers",
  es: "Carreras",
  fr: "Carrières",
};

const openingsLabel = {
  en: "Current openings",
  es: "Vacantes actuales",
  fr: "Postes actuels",
};

const fieldLabels = {
  area: {
    en: "Area",
    es: "Área",
    fr: "Domaine",
  },
  focus: {
    en: "Focus",
    es: "Enfoque",
    fr: "Objectif",
  },
  profile: {
    en: "Profile",
    es: "Perfil",
    fr: "Profil",
  },
};
