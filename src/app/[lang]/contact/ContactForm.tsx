"use client";

import { FormEvent, useState } from "react";
import { contactContent, contactReasons, corporateTruth, localize } from "@/content/site";
import { Locale } from "../../../../i18n-config";
import styles from "../ContentPage.module.css";

type ContactFormProps = {
  lang: Locale;
};

const labels = {
  fullName: {
    en: "Full name",
    es: "Nombre completo",
    fr: "Nom complet",
  },
  workEmail: {
    en: "Work email",
    es: "Correo de trabajo",
    fr: "Email professionnel",
  },
  company: {
    en: "Company or project",
    es: "Compañía o proyecto",
    fr: "Entreprise ou projet",
  },
  country: {
    en: "Country",
    es: "País",
    fr: "Pays",
  },
  reason: {
    en: "Reason for contacting",
    es: "Motivo de contacto",
    fr: "Motif de contact",
  },
  message: {
    en: "Message",
    es: "Mensaje",
    fr: "Message",
  },
  selectReason: {
    en: "Select a reason",
    es: "Selecciona un motivo",
    fr: "Sélectionner un motif",
  },
  failed: {
    en: "Something went wrong. Please email hi@revoluc.com.",
    es: "Algo salió mal. Por favor escribe a hi@revoluc.com.",
    fr: "Une erreur est survenue. Veuillez écrire à hi@revoluc.com.",
  },
};

export default function ContactForm({ lang }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFailed(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...payload,
          sourcePath: window.location.pathname,
          sourceQuery: window.location.search,
        }),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      const reason = String(payload.reason ?? "General inquiry");
      const body = [
        `Full name: ${payload.fullName ?? ""}`,
        `Work email: ${payload.workEmail ?? ""}`,
        `Company or project: ${payload.companyOrProject ?? ""}`,
        `Country: ${payload.country ?? ""}`,
        `Reason: ${reason}`,
        "",
        "Message:",
        `${payload.message ?? ""}`,
        "",
        `Source: ${window.location.pathname}${window.location.search}`,
      ].join("\n");

      form.reset();
      setSubmitted(true);
      window.location.href = `mailto:${corporateTruth.publicEmail}?${new URLSearchParams({
        subject: `Revoluc inquiry: ${reason}`,
        body,
      }).toString()}`;
    } catch {
      setFailed(true);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label>
          <span>{localize(labels.fullName, lang)}</span>
          <input name="fullName" autoComplete="name" required />
        </label>
        <label>
          <span>{localize(labels.workEmail, lang)}</span>
          <input name="workEmail" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>{localize(labels.company, lang)}</span>
          <input name="companyOrProject" autoComplete="organization" required />
        </label>
        <label>
          <span>{localize(labels.country, lang)}</span>
          <input name="country" autoComplete="country-name" required />
        </label>
      </div>

      <label>
        <span>{localize(labels.reason, lang)}</span>
        <select name="reason" defaultValue="" required>
          <option value="" disabled>
            {localize(labels.selectReason, lang)}
          </option>
          {contactReasons.map((reason) => (
            <option value={reason.value} key={reason.value}>
              {localize(reason.label, lang)}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>{localize(labels.message, lang)}</span>
        <textarea name="message" rows={7} required />
      </label>

      <label className={styles.consent}>
        <input name="privacyConsent" type="checkbox" required />
        <span>{localize(contactContent.privacyConsent, lang)}</span>
      </label>

      <label className={styles.honeyField} aria-hidden="true">
        Company website
        <input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <button className={styles.button} type="submit">
        {localize(contactContent.submit, lang)}
      </button>

      {submitted ? <p className={styles.success}>{localize(contactContent.confirmation, lang)}</p> : null}
      {failed ? <p className={styles.error}>{localize(labels.failed, lang)}</p> : null}
    </form>
  );
}
