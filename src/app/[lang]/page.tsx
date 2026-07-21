import Link from "next/link";
import { Locale } from "../../../i18n-config";
import { companies, homeContent, localize, statusLabels } from "@/content/site";
import styles from "./Home.module.css";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function IndexPage({ params }: PageProps) {
  const lang = (await params).lang;
  const featuredCompanies = companies.slice(0, 6);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>{localize(homeContent.eyebrow, lang)}</p>
          <h1>{localize(homeContent.headline, lang)}</h1>
          <p className={styles.subtitle}>{localize(homeContent.subtitle, lang)}</p>
          <div className={styles.actions}>
            <Link className={styles.primaryAction} href={`/${lang}/portfolio`}>
              {localize(homeContent.primaryCta, lang)}
            </Link>
            <Link className={styles.secondaryAction} href={`/${lang}/startups`}>
              {localize(homeContent.secondaryCta, lang)}
            </Link>
          </div>
        </div>

        <div className={styles.portfolioSignal} aria-label={localize(homeContent.portfolioTitle, lang)}>
          {featuredCompanies.map((company) => (
            <div className={styles.signalCard} key={company.name}>
              <span>{company.name.slice(0, 2)}</span>
              <strong>{company.name}</strong>
              <small>{company.category}</small>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.portfolioPreview}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{localize(portfolioCountLabel, lang)}</p>
          <h2>{localize(homeContent.portfolioTitle, lang)}</h2>
          <p>{localize(homeContent.portfolioCopy, lang)}</p>
        </div>
        <div className={styles.companyGrid}>
          {featuredCompanies.map((company) => (
            <article className={styles.companyCard} key={company.name}>
              <div className={styles.companyLogo} aria-hidden="true">
                {company.name.slice(0, 2)}
              </div>
              <div>
                <p className={styles.companyStatus}>{localize(statusLabels[company.status], lang)}</p>
                <h3>{company.name}</h3>
                <p>{localize(company.description, lang)}</p>
                <dl>
                  <div>
                    <dt>{localize(fieldLabels.market, lang)}</dt>
                    <dd>{company.market}</dd>
                  </div>
                  <div>
                    <dt>{localize(fieldLabels.product, lang)}</dt>
                    <dd>{company.product}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
        <Link className={styles.textLink} href={`/${lang}/portfolio`}>
          {localize(homeContent.primaryCta, lang)}
        </Link>
      </section>
    </main>
  );
}

const portfolioCountLabel = {
  en: "Portfolio structure",
  es: "Estructura del portafolio",
  fr: "Structure du portefeuille",
};

const fieldLabels = {
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
