import { Locale } from "../../../../i18n-config";
import {
  companies,
  CompanyStatus,
  groupLabels,
  localize,
  portfolioContent,
  statusLabels,
} from "@/content/site";
import styles from "./Portfolio.module.css";

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const groupOrder: CompanyStatus[] = [
  "Operating company",
  "Product in market",
  "Venture in development",
  "Experiment",
  "Partner venture",
];

const Portfolio = async ({ params }: PageProps) => {
  const lang = (await params).lang;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Companies</p>
          <h1>{localize(portfolioContent.title, lang)}</h1>
          <p>{localize(portfolioContent.intro, lang)}</p>
        </div>

        <div className={styles.groups}>
          {groupOrder.map((status) => {
            const groupedCompanies = companies.filter((company) => company.status === status);

            if (groupedCompanies.length === 0) return null;

            return (
              <section className={styles.group} key={status}>
                <h2>{localize(groupLabels[status], lang)}</h2>
                <div className={styles.grid}>
                  {groupedCompanies.map((company) => (
                    <article className={styles.card} key={company.name}>
                      <div className={styles.logo} aria-hidden="true">
                        {company.name.slice(0, 2)}
                      </div>
                      <div>
                        <p className={styles.status}>{localize(statusLabels[company.status], lang)}</p>
                        <h3>{company.name}</h3>
                        <p className={styles.category}>{company.category}</p>
                        <p className={styles.description}>{localize(company.description, lang)}</p>
                        <dl className={styles.meta}>
                          <div>
                            <dt>{localize(fieldLabels.market, lang)}</dt>
                            <dd>{company.market}</dd>
                          </div>
                          <div>
                            <dt>{localize(fieldLabels.product, lang)}</dt>
                            <dd>{company.product}</dd>
                          </div>
                        </dl>
                        {company.href ? (
                          <a className={styles.link} href={company.href} target="_blank" rel="noopener noreferrer">
                            {localize(fieldLabels.visit, lang)}
                          </a>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Portfolio;

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
  visit: {
    en: "Visit website",
    es: "Visitar sitio",
    fr: "Visiter le site",
  },
};
