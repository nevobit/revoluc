import { Locale } from "../../../../i18n-config";
import { contactContent, localize } from "@/content/site";
import styles from "../ContentPage.module.css";
import ContactForm from "./ContactForm";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

const Contact = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(contactContent.title, lang)}</h1>
        <p className={styles.lead}>{localize(contactContent.copy, lang)}</p>
        <ContactForm lang={lang} />
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
