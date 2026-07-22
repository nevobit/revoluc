"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale } from "../../../i18n-config";
import { localize } from "@/content/site";
import styles from "./ContentPage.module.css";

export default function NotFound() {
  const pathname = usePathname();
  const locale = ((pathname?.split("/")[1] || "en") as Locale);

  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>404</p>
        <h1>{localize(copy.title, locale)}</h1>
        <p className={styles.lead}>
          {localize(copy.lead, locale)}
        </p>
        <Link className={styles.button} href={`/${locale}`}>
          {localize(copy.cta, locale)}
        </Link>
      </section>
    </main>
  );
}

const copy = {
  title: {
    en: "Page not found",
    es: "Página no encontrada",
    fr: "Page introuvable",
  },
  lead: {
    en: "The page you are looking for does not exist or is no longer available.",
    es: "La página que buscas no existe o ya no está disponible.",
    fr: "La page que vous recherchez n'existe pas ou n'est plus disponible.",
  },
  cta: {
    en: "Go to Revoluc",
    es: "Ir a Revoluc",
    fr: "Aller à Revoluc",
  },
};
