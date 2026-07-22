import Link from "next/link";
import { Locale } from "../../../i18n-config";
import {
  companies,
  focusAreas,
  homeContent,
  localize,
  operationalModel,
  placeholderCompanyLogo,
  sharedInfrastructure,
} from "@/content/site";
import { pageMetadata } from "@/content/seo";
import styles from "./Home.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const lang = (await params).lang as Locale;

  return pageMetadata({
    lang,
    title: {
      en: "Revoluc - Technology Holding and Venture Builder",
      es: "Revoluc - Holding tecnológica y constructora de empresas",
      fr: "Revoluc - Holding technologique et construction d'entreprises",
    },
    description: {
      en: "Revoluc Inc. builds, operates, supports and scales technology companies across software, commerce, real estate technology, professional networks and customer operations.",
      es: "Revoluc Inc. crea, opera, apoya y escala compañías tecnológicas en software, comercio, tecnología inmobiliaria, redes profesionales y operaciones de clientes.",
      fr: "Revoluc Inc. crée, exploite, soutient et développe des entreprises technologiques dans le logiciel, le commerce, la technologie immobilière, les réseaux professionnels et les opérations client.",
    },
  });
}

export default async function IndexPage({ params }: PageProps) {
  const lang = (await params).lang as Locale;
  const featuredCompanies = companies.slice(0, 6);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{localize(homeContent.eyebrow, lang)}</p>
          <h1>{localize(homeContent.headline, lang)}</h1>
          <p className={styles.subtitle}>{localize(homeContent.subtitle, lang)}</p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href={`/${lang}/companies`}>
              {localize(homeContent.primaryCta, lang)}
            </Link>
            <Link className={styles.secondaryAction} href={`/${lang}/startups`}>
              {localize(homeContent.secondaryCta, lang)}
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.groupBand} aria-label={localize(groupBandAriaLabel, lang)}>
        <p className={styles.groupBandTitle}>{localize(groupBandLabel, lang)}</p>
        <div className={styles.groupLogoViewport}>
          <div className={styles.groupLogoTrack}>
            {[0, 1].map((set) => (
              <div className={styles.groupLogoSet} aria-hidden={set === 1} key={set}>
                {featuredCompanies.map((company) => (
                  <div className={styles.groupLogoSlot} data-logo={company.slug} key={`${company.slug}-${set}`}>
                    {company.logo !== placeholderCompanyLogo ? (
                      <img
                        className={styles.groupLogoImage}
                        src={company.logo}
                        alt={`${company.name} ${localize(logoAltLabel, lang)}`}
                      />
                    ) : (
                      <span className={styles.groupLogoWordmark}>{company.name}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.modelSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{localize(modelLabels.eyebrow, lang)}</p>
          <h2>{localize(modelLabels.title, lang)}</h2>
          <p>{localize(modelLabels.copy, lang)}</p>
        </div>
        <div className={styles.modelGrid}>
          {operationalModel.map((item) => (
            <article className={styles.modelItem} key={item.label.en}>
              <strong>{localize(item.label, lang)}</strong>
              <p>{localize(item.description, lang)}</p>
            </article>
          ))}
        </div>
        <div className={styles.listColumns}>
          <div>
            <h3>{localize(modelLabels.infrastructure, lang)}</h3>
            <ul>
              {sharedInfrastructure.map((item) => (
                <li key={item.en}>{localize(item, lang)}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{localize(modelLabels.focus, lang)}</h3>
            <ul>
              {focusAreas.map((item) => (
                <li key={item.en}>{localize(item, lang)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}

const portfolioCountLabel = {
  en: "Portfolio structure",
  es: "Estructura del portafolio",
  fr: "Structure du portefeuille",
};

const groupBandLabel = {
  en: "Revoluc group",
  es: "Grupo Revoluc",
  fr: "Groupe Revoluc",
};

const groupBandAriaLabel = {
  en: "Revoluc group companies",
  es: "Compañías del grupo Revoluc",
  fr: "Entreprises du groupe Revoluc",
};

const logoAltLabel = {
  en: "logo",
  es: "logo",
  fr: "logo",
};

const fieldLabels = {
  relationship: {
    en: "Relationship",
    es: "Relación",
    fr: "Relation",
  },
  market: {
    en: "Market",
    es: "Mercado",
    fr: "Marché",
  },
  product: {
    en: "Product",
    es: "Producto",
    fr: "Produit",
  },
};

const modelLabels = {
  eyebrow: {
    en: "Operating model",
    es: "Modelo operativo",
    fr: "Modèle opérationnel",
  },
  title: {
    en: "How Revoluc builds",
    es: "Cómo construye Revoluc",
    fr: "Comment Revoluc construit",
  },
  copy: {
    en: "Revoluc contributes execution, shared infrastructure and operating responsibility across the companies it builds and supports.",
    es: "Revoluc aporta ejecución, infraestructura compartida y responsabilidad operativa a las compañías que construye y acompaña.",
    fr: "Revoluc apporte exécution, infrastructure partagée et responsabilité opérationnelle aux entreprises qu'il construit et soutient.",
  },
  infrastructure: {
    en: "Shared infrastructure",
    es: "Infraestructura compartida",
    fr: "Infrastructure partagée",
  },
  focus: {
    en: "Focus areas",
    es: "Áreas de enfoque",
    fr: "Domaines d'intervention",
  },
};
