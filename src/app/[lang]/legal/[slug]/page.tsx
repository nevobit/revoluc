import { notFound } from "next/navigation";
import { i18n, Locale } from "../../../../../i18n-config";
import { corporateTruth, localize } from "@/content/site";
import styles from "../../ContentPage.module.css";

const documents = {
  "privacy-policy": {
    title: "Privacy Policy",
    sections: [
      {
        heading: "Controller",
        body: `${corporateTruth.legalName}, a Delaware company, is responsible for this website and contact inquiries submitted through it.`,
      },
      {
        heading: "Data collected",
        body: "The contact form asks for full name, work email, company or project, country, reason for contacting, message, privacy consent, source path and query parameters such as UTM values when present.",
      },
      {
        heading: "Use of data",
        body: "Revoluc uses contact information to review inquiries, classify the opportunity type, respond to the sender and route the conversation internally.",
      },
      {
        heading: "Storage and providers",
        body: "The current website source does not include a connected CRM, database, analytics provider or email delivery provider. This policy must be updated before those services are enabled.",
      },
      {
        heading: "Cookies and analytics",
        body: "The current website source does not include custom analytics scripts or custom cookie-setting code. Essential platform behavior may depend on the hosting provider.",
      },
      {
        heading: "Retention and access",
        body: "Only people responsible for reviewing Revoluc inquiries should access submitted information. Retention periods should be defined before persistent lead storage is enabled.",
      },
      {
        heading: "Deletion requests",
        body: `Requests about personal information can be sent to ${corporateTruth.publicEmail}.`,
      },
    ],
  },
  "terms-of-use": {
    title: "Terms of Use",
    sections: [
      {
        heading: "Website use",
        body: "This website provides corporate information about Revoluc Inc., its public companies, venture building work and contact channels.",
      },
      {
        heading: "No investment offer",
        body: "Information on this website is not an offer to sell securities, solicit investment or guarantee any commercial outcome.",
      },
      {
        heading: "Portfolio information",
        body: "Company statuses describe operating maturity and may change as products, markets and legal relationships evolve.",
      },
      {
        heading: "Contact",
        body: `Questions about these terms can be sent to ${corporateTruth.publicEmail}.`,
      },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    sections: [
      {
        heading: "Current cookie use",
        body: "The current website source does not include custom cookie-setting code or custom analytics tags.",
      },
      {
        heading: "Future services",
        body: "If analytics, advertising, CRM, security or personalization tools are added, this policy should be updated with provider names, purposes and retention details.",
      },
      {
        heading: "Contact",
        body: `Cookie questions can be sent to ${corporateTruth.publicEmail}.`,
      },
    ],
  },
  "security-policy": {
    title: "Security Policy",
    sections: [
      {
        heading: "Scope",
        body: "This policy covers the public Revoluc website and contact intake flow.",
      },
      {
        heading: "Current measures",
        body: "The contact endpoint validates required fields and includes a basic honeypot field for spam reduction. Additional rate limiting, storage controls and alerting should be added when persistent lead capture is connected.",
      },
      {
        heading: "Responsible disclosure",
        body: `Security issues can be reported to ${corporateTruth.publicEmail}.`,
      },
    ],
  },
  "accessibility-statement": {
    title: "Accessibility Statement",
    sections: [
      {
        heading: "Commitment",
        body: "Revoluc aims to maintain a website that is usable, readable and navigable across modern devices.",
      },
      {
        heading: "Known work",
        body: "The site should continue to be reviewed for keyboard navigation, semantic labels, color contrast, form errors and responsive layout issues.",
      },
      {
        heading: "Feedback",
        body: `Accessibility feedback can be sent to ${corporateTruth.publicEmail}.`,
      },
    ],
  },
} as const;

type LegalSlug = keyof typeof documents;

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return i18n.locales.flatMap((lang) =>
    Object.keys(documents).map((slug) => ({
      lang,
      slug,
    })),
  );
}

const LegalPage = async ({ params }: PageProps) => {
  const { lang: rawLang, slug } = await params;
  const lang = rawLang as Locale;
  const document = documents[slug as LegalSlug];

  if (!document) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>{corporateTruth.legalName}</p>
        <h1>{document.title}</h1>
        <p className={styles.lead}>
          {localize(lastUpdatedLabel, lang)} July 21, 2026
        </p>
        <div className={styles.paragraphs}>
          {document.sections.map((section) => (
            <section key={section.heading}>
              <h2 className={styles.sectionTitle}>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
};

export default LegalPage;

const lastUpdatedLabel = {
  en: "Last updated:",
  es: "Última actualización:",
  fr: "Dernière mise à jour :",
};
