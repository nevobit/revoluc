import Link from "next/link";
import styles from "./ContentPage.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <section className={`${styles.content} ${styles.narrow}`}>
        <p className={styles.eyebrow}>404</p>
        <h1>Page not found</h1>
        <p className={styles.lead}>
          The page you are looking for does not exist or is no longer available.
        </p>
        <Link className={styles.button} href="/">
          Go to Revoluc
        </Link>
      </section>
    </main>
  );
}
