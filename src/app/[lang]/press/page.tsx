import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import { localize, pressKitCards, pressKitContent } from "@/content/site";
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
    path: "/press",
    title: {
      en: "Press Kit - Revoluc",
      es: "Press Kit - Revoluc",
      fr: "Press Kit - Revoluc",
    },
    description: {
      en: "Official press kit for Revoluc Inc., including company boilerplate, corporate facts, leadership information, portfolio focus, brand assets and media contact.",
      es: "Press kit oficial de Revoluc Inc., con boilerplate corporativo, datos de la compañía, información de liderazgo, enfoque del portafolio, activos de marca y contacto de prensa.",
      fr: "Press kit officiel de Revoluc Inc., avec boilerplate, informations corporatives, direction, orientation du portefeuille, actifs de marque et contact presse.",
    },
  });
}

const Press = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(pressKitContent.title, lang)}</h1>
        <p className={styles.intro}>{localize(pressKitContent.intro, lang)}</p>

        <section className={cardStyles.groups} aria-label={localize(kitLabel, lang)}>
          <div className={cardStyles.group}>
            <h2>{localize(kitLabel, lang)}</h2>
            <div className={cardStyles.grid}>
              {pressKitCards.map((card) => (
                <article className={cardStyles.card} key={card.title.en}>
                  <div className={cardStyles.logo} aria-hidden="true">
                    {card.initials}
                  </div>
                  <div>
                    <p className={cardStyles.status}>{localize(card.status, lang)}</p>
                    <h3>{localize(card.title, lang)}</h3>
                    <p className={cardStyles.category}>{localize(card.category, lang)}</p>
                    <p className={cardStyles.description}>{localize(card.description, lang)}</p>
                    <dl className={cardStyles.meta}>
                      {card.facts.map((fact) => (
                        <div key={fact.label.en}>
                          <dt>{localize(fact.label, lang)}</dt>
                          <dd>{localize(fact.value, lang)}</dd>
                        </div>
                      ))}
                    </dl>
                    {card.initials === "AS" ? (
                      <a className={cardStyles.link} href="/img/logo192.png" target="_blank" rel="noopener noreferrer">
                        {localize(pressKitContent.logoCta, lang)}
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <p className={styles.note}>{localize(usageNote, lang)}</p>
        <Link className={styles.cta} href={`/${lang}/contact?reason=press`}>
          {localize(pressKitContent.cta, lang)}
        </Link>
      </section>
    </main>
  );
};

export default Press;

const eyebrowLabel = {
  en: "Media resources",
  es: "Recursos para medios",
  fr: "Ressources médias",
};

const kitLabel = {
  en: "Press resources",
  es: "Recursos de prensa",
  fr: "Ressources presse",
};

const usageNote = {
  en: "Please verify any unpublished claims, figures, product screenshots or founder images with Revoluc before publication.",
  es: "Verifica con Revoluc cualquier afirmación no publicada, cifra, captura de producto o imagen del fundador antes de publicar.",
  fr: "Veuillez vérifier auprès de Revoluc toute affirmation non publiée, chiffre, capture produit ou image du fondateur avant publication.",
};
