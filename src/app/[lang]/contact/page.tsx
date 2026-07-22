import { Locale } from "../../../../i18n-config";
import { contactContent, localize } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import styles from "../ContentPage.module.css";
import ContactForm from "./ContactForm";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
  searchParams?: Promise<{
    reason?: string;
    company?: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const lang = (await params).lang as Locale;

  return pageMetadata({
    lang,
    path: "/contact",
    title: {
      en: "Contact Revoluc",
      es: "Contactar a Revoluc",
      fr: "Contacter Revoluc",
    },
    description: {
      en: "Contact Revoluc for company building, commercial partnerships, portfolio inquiries, investment conversations, press, careers or general inquiries.",
      es: "Contacta a Revoluc para construcción de empresas, alianzas comerciales, consultas del portafolio, conversaciones de inversión, prensa, carreras o consultas generales.",
      fr: "Contactez Revoluc pour la construction d'entreprises, les partenariats commerciaux, les demandes de portefeuille, les discussions d'investissement, la presse, les carrières ou les demandes générales.",
    },
  });
}

const Contact = async ({ params, searchParams }: PageProps) => {
  const lang = (await params).lang as Locale;
  const query = await searchParams;
  const initialReason = getInitialReason(query?.reason);
  const initialCompany = query?.company ?? "";

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <div className={styles.narrow}>
          <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
          <h1>{localize(contactContent.title, lang)}</h1>
          <p className={styles.lead}>{localize(contactContent.copy, lang)}</p>
          <ContactForm lang={lang} initialReason={initialReason} initialCompany={initialCompany} />
        </div>
      </section>
    </main>
  );
};

export default Contact;

const eyebrowLabel = {
  en: "Partnerships",
  es: "Alianzas",
  fr: "Partenariats",
};

const getInitialReason = (reason?: string) => {
  if (reason === "venture-building") {
    return "Build a company with Revoluc";
  }

  if (reason === "Portfolio company inquiry") {
    return "Portfolio company inquiry";
  }

  return "";
};
