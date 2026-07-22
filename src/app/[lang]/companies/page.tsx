import Link from "next/link";
import { Locale } from "../../../../i18n-config";
import {
  companies,
  groupLabels,
  localize,
  portfolioContent,
  publicStatusOrder,
  relationshipLabels,
  statusLabels,
} from "@/content/site";
import { pageMetadata } from "@/content/seo";
import pageStyles from "../ContentPage.module.css";
import styles from "../portfolio/Portfolio.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const lang = (await params).lang as Locale;

  return pageMetadata({
    lang,
    path: "/companies",
    title: {
      en: "Companies and Ventures - Revoluc",
      es: "Compañías y proyectos - Revoluc",
      fr: "Entreprises et projets - Revoluc",
    },
    description: {
      en: "Explore Revoluc's public portfolio organized by operating maturity, including operating companies, products in market, ventures in development and partner ventures.",
      es: "Explora el portafolio público de Revoluc organizado por madurez operativa: compañías operativas, productos en mercado, proyectos en desarrollo y ventures aliados.",
      fr: "Explorez le portefeuille public de Revoluc organisé par maturité opérationnelle : entreprises opérationnelles, produits sur le marché, projets en développement et ventures partenaires.",
    },
  });
}

const Companies = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={pageStyles.page}>
      <section className={pageStyles.content}>
        <div className={pageStyles.narrow}>
          <p className={pageStyles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
          <h1>{localize(portfolioContent.title, lang)}</h1>
          <p className={pageStyles.lead}>{localize(portfolioContent.intro, lang)}</p>
        </div>

        <div className={styles.groups}>
          {publicStatusOrder.map((status) => {
            const groupedCompanies = companies.filter((company) => company.status === status);

            if (groupedCompanies.length === 0) return null;

            return (
              <section className={styles.group} key={status}>
                <h2>{localize(groupLabels[status], lang)}</h2>
                <div className={styles.grid}>
                  {groupedCompanies.map((company) => (
                    <article className={styles.card} key={company.slug}>
                      <div className={styles.logo} aria-hidden="true">
                        {company.name.slice(0, 2)}
                      </div>
                      <div>
                        <p className={styles.status}>{localize(statusLabels[company.status], lang)}</p>
                        <h3>{company.name}</h3>
                        <p className={styles.category}>{localize(company.category, lang)}</p>
                        <p className={styles.description}>{localize(company.description, lang)}</p>
                        <dl className={styles.meta}>
                          <div>
                            <dt>{localize(fieldLabels.relationship, lang)}</dt>
                            <dd>{localize(relationshipLabels[company.relationship], lang)}</dd>
                          </div>
                          <div>
                            <dt>{localize(fieldLabels.market, lang)}</dt>
                            <dd>{localize(company.market, lang)}</dd>
                          </div>
                          <div>
                            <dt>{localize(fieldLabels.product, lang)}</dt>
                            <dd>{localize(company.productName, lang)}</dd>
                          </div>
                        </dl>
                        <Link className={styles.link} href={`/${lang}/companies/${company.slug}`}>
                          {localize(fieldLabels.viewProfile, lang)}
                        </Link>
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

export default Companies;

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
  viewProfile: {
    en: "View profile",
    es: "Ver ficha",
    fr: "Voir la fiche",
  },
};

const eyebrowLabel = {
  en: "Companies",
  es: "Compañías",
  fr: "Entreprises",
};
