import { Locale } from "../../../../i18n-config";
import { localize, socialContent, socialImpactAreas } from "@/content/site";
import { pageMetadata } from "@/content/seo";
import styles from "./Social.module.css";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const lang = (await params).lang as Locale;

  return pageMetadata({
    lang,
    path: "/social",
    title: {
      en: "Revoluc Foundation - Social Commitment",
      es: "Revoluc Foundation - Compromiso social",
      fr: "Revoluc Foundation - Engagement social",
    },
    description: {
      en: "Revoluc Foundation is the group's platform for nonprofit support, donations and technology-enabled social initiatives.",
      es: "Revoluc Foundation es la plataforma del grupo para apoyar organizaciones sin ánimo de lucro, donaciones e iniciativas sociales impulsadas por tecnología.",
      fr: "Revoluc Foundation est la plateforme du groupe pour soutenir les organisations à but non lucratif, les dons et les initiatives sociales appuyées par la technologie.",
    },
  });
}

const Social = async ({ params }: PageProps) => {
  const lang = (await params).lang as Locale;

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <p className={styles.eyebrow}>{localize(eyebrowLabel, lang)}</p>
        <h1>{localize(socialContent.title, lang)}</h1>
        <p className={styles.intro}>{localize(socialContent.intro, lang)}</p>

        <div className={styles.links}>
          {socialImpactAreas.map((area) => (
            <article className={styles.link} key={area.label.en}>
              <div>
                <strong>{localize(area.label, lang)}</strong>
                <p>{localize(area.description, lang)}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.note}>{localize(socialContent.note, lang)}</p>
      </section>
    </main>
  );
};

export default Social;

const eyebrowLabel = {
  en: "Social commitment",
  es: "Compromiso social",
  fr: "Engagement social",
};
