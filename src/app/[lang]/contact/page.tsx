import { Locale } from "../../../../i18n-config";
import { contactContent, localize } from "@/content/site";
import styles from "../ContentPage.module.css";

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
        <p className={styles.eyebrow}>Partnerships</p>
        <h1>{localize(contactContent.title, lang)}</h1>
        <p className={styles.lead}>{localize(contactContent.copy, lang)}</p>
        <a className={styles.button} href="mailto:hi@revoluc.com">
          {localize(contactContent.emailLabel, lang)}
        </a>
      </section>
    </main>
  );
};

export default Contact;
