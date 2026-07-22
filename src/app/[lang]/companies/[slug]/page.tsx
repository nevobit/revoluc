import Link from "next/link";
import { notFound } from "next/navigation";
import { i18n, Locale } from "../../../../../i18n-config";
import {
  companies,
  getCompanyBySlug,
  localize,
  relationshipLabels,
  statusLabels,
} from "@/content/site";
import styles from "../../portfolio/Portfolio.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    companies.map((company) => ({
      lang,
      slug: company.slug,
    })),
  );
}

const CompanyProfile = async ({ params }: PageProps) => {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const company = getCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <div className={styles.detailHeader}>
          <Link className={styles.backLink} href={`/${lang}/companies`}>
            {localize(labels.back, lang)}
          </Link>
          <p className={styles.status}>{localize(statusLabels[company.status], lang)}</p>
          <h1>{company.name}</h1>
          <p>{localize(company.description, lang)}</p>
        </div>

        <div className={styles.detailGrid}>
          <section className={styles.detailSection}>
            <h2>{localize(labels.problem, lang)}</h2>
            <p>{localize(company.problem, lang)}</p>
          </section>

          <section className={styles.detailSection}>
            <h2>{localize(labels.solution, lang)}</h2>
            <p>{localize(company.solution, lang)}</p>
          </section>

          <section className={styles.detailSection}>
            <h2>{localize(labels.evidence, lang)}</h2>
            {company.screenshot ? (
              <img src={company.screenshot} alt={`${company.name} screenshot`} />
            ) : null}
            <ul className={styles.evidenceList}>
              {company.evidenceItems.map((item) => (
                <li key={item.en}>{localize(item, lang)}</li>
              ))}
            </ul>
          </section>

          <aside className={styles.factPanel}>
            <dl className={styles.meta}>
              <div>
                <dt>{localize(labels.status, lang)}</dt>
                <dd>{localize(statusLabels[company.status], lang)}</dd>
              </div>
              <div>
                <dt>{localize(labels.product, lang)}</dt>
                <dd>{company.productName}</dd>
              </div>
              <div>
                <dt>{localize(labels.market, lang)}</dt>
                <dd>{company.market}</dd>
              </div>
              <div>
                <dt>{localize(labels.relationship, lang)}</dt>
                <dd>{localize(relationshipLabels[company.relationship], lang)}</dd>
              </div>
              <div>
                <dt>{localize(labels.responsible, lang)}</dt>
                <dd>{company.internalResponsible}</dd>
              </div>
              {company.headquarters ? (
                <div>
                  <dt>{localize(labels.headquarters, lang)}</dt>
                  <dd>{company.headquarters}</dd>
                </div>
              ) : null}
              <div>
                <dt>{localize(labels.proof, lang)}</dt>
                <dd>{localize(company.proof, lang)}</dd>
              </div>
            </dl>

            {company.website ? (
              <a className={styles.link} href={company.website} target="_blank" rel="noopener noreferrer">
                {localize(company.ctaLabel, lang)}
              </a>
            ) : (
              <Link className={styles.link} href={`/${lang}/contact?reason=Portfolio%20company%20inquiry`}>
                {localize(company.ctaLabel, lang)}
              </Link>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CompanyProfile;

const labels = {
  back: {
    en: "Back to companies",
    es: "Volver a compañías",
    fr: "Retour aux entreprises",
  },
  problem: {
    en: "Problem",
    es: "Problema",
    fr: "Problème",
  },
  solution: {
    en: "Solution",
    es: "Solución",
    fr: "Solution",
  },
  evidence: {
    en: "Evidence and scope",
    es: "Evidencia y alcance",
    fr: "Preuve et périmètre",
  },
  status: {
    en: "Status",
    es: "Estado",
    fr: "Statut",
  },
  product: {
    en: "Product",
    es: "Producto",
    fr: "Produit",
  },
  market: {
    en: "Market",
    es: "Mercado",
    fr: "Marché",
  },
  relationship: {
    en: "Relationship",
    es: "Relación",
    fr: "Relation",
  },
  responsible: {
    en: "Internal responsible",
    es: "Responsable interno",
    fr: "Responsable interne",
  },
  headquarters: {
    en: "Headquarters",
    es: "Sede",
    fr: "Siège",
  },
  proof: {
    en: "Proof of existence",
    es: "Prueba de existencia",
    fr: "Preuve d'existence",
  },
};
