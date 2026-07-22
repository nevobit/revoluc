import { Locale } from "../../../../i18n-config";
import {
  aboutContent,
  aboutSections,
  corporateTruth,
  founderProfile,
  localize,
} from "@/content/site";
import { pageMetadata } from "@/content/seo";
import styles from "../ContentPage.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const lang = (await params).lang as Locale;

  return pageMetadata({
    lang,
    path: "/about",
    title: {
      en: "About Revoluc - Technology Holding",
      es: "Sobre Revoluc - Holding tecnológica",
      fr: "À propos de Revoluc - Holding technologique",
    },
    description: {
      en: "Learn Revoluc's origin, mission, operating model, principles, shared infrastructure, geographic reach, leadership and corporate information.",
      es: "Conoce el origen, misión, modelo operativo, principios, infraestructura compartida, alcance geográfico, liderazgo e información corporativa de Revoluc.",
      fr: "Découvrez l'origine, la mission, le modèle opérationnel, les principes, l'infrastructure partagée, la portée géographique, la direction et les informations corporatives de Revoluc.",
    },
  });
}

const About = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(aboutContent.title, lang)}</h1>
        <div className={`${styles.paragraphs} ${styles.narrow}`}>
          {aboutContent.paragraphs[lang].map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.sectionStack}>
          {aboutSections.map((section) => (
            <section className={styles.infoBlock} id={section.id} key={section.id}>
              <h2 className={styles.sectionTitle}>{localize(section.title, lang)}</h2>
              <div className={styles.paragraphs}>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.en}>{localize(paragraph, lang)}</p>
                ))}
              </div>
              {section.items ? (
                <ul className={styles.inlineList}>
                  {section.items.map((item) => (
                    <li key={item.en}>{localize(item, lang)}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className={styles.infoBlock} id="corporate-information">
            <h2 className={styles.sectionTitle}>{localize(corporateTitle, lang)}</h2>
            <dl className={styles.factGrid}>
              <div>
                <dt>{localize(corporateLabels.legalName, lang)}</dt>
                <dd>{corporateTruth.legalName}</dd>
              </div>
              <div>
                <dt>{localize(corporateLabels.incorporationState, lang)}</dt>
                <dd>{corporateTruth.incorporationState}</dd>
              </div>
              <div>
                <dt>{localize(corporateLabels.incorporationYear, lang)}</dt>
                <dd>{localize(corporateTruth.incorporationYear, lang)}</dd>
              </div>
              <div>
                <dt>{localize(corporateLabels.email, lang)}</dt>
                <dd>{corporateTruth.publicEmail}</dd>
              </div>
              <div>
                <dt>{localize(corporateLabels.phone, lang)}</dt>
                <dd>{corporateTruth.phone}</dd>
              </div>
              <div>
                <dt>{localize(corporateTruth.addressLabel, lang)}</dt>
                <dd>{corporateTruth.mailingAddress}</dd>
              </div>
              <div>
                <dt>{localize(corporateLabels.founder, lang)}</dt>
                <dd>{founderProfile.name}, {founderProfile.role}</dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>
                  <a href={founderProfile.linkedin} target="_blank" rel="noopener noreferrer">
                    {founderProfile.linkedin}
                  </a>
                </dd>
              </div>
            </dl>
          </section>
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

const corporateTitle = {
  en: "Corporate information",
  es: "Información corporativa",
  fr: "Informations corporatives",
};

const corporateLabels = {
  legalName: {
    en: "Legal name",
    es: "Nombre legal",
    fr: "Nom légal",
  },
  incorporationState: {
    en: "Incorporation state",
    es: "Estado de constitución",
    fr: "État de constitution",
  },
  incorporationYear: {
    en: "Incorporation year",
    es: "Año de constitución",
    fr: "Année de constitution",
  },
  email: {
    en: "Official email",
    es: "Correo oficial",
    fr: "Email officiel",
  },
  phone: {
    en: "Official phone",
    es: "Teléfono oficial",
    fr: "Téléphone officiel",
  },
  founder: {
    en: "Leadership",
    es: "Liderazgo",
    fr: "Direction",
  },
};
