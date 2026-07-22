'use client'

import Link from 'next/link'
import { useLocale } from '@/hooks/useLocale'
import { localize } from '@/content/site'
import { Locale } from '../../../i18n-config'
import styles from './Footer.module.css'

const Footer = () => {
  const { locale } = useLocale()
  const activeLocale = locale as Locale

  return (
    <footer className={styles.footer}>
    <div className={styles.copyrights}>
        <div className={styles.dots}>
            <i className='bx bx-dots-horizontal-rounded' ></i>
            <i className='bx bx-dots-horizontal-rounded' ></i>
        </div>
        <div className={styles.copyrightstypingp}>
            <p>2026 Revoluc Inc. <span className={styles.footerall}>{localize(footerLabels.rights, activeLocale)}</span></p>
        </div>
    </div>
    <div className={styles.socials}>
        <p className={styles.socialsP}>
            <Link href={`https://linkedin.com/company/revoluc-inc/`} aria-label={localize(footerLabels.foundation, activeLocale)} title={localize(footerLabels.foundation, activeLocale)}>
                IN
            </Link>
            <span>/</span>
            <Link href={`/${locale}/legal/privacy-policy`}>{localize(footerLabels.privacy, activeLocale)}</Link>
            <span>/</span>
            <Link href={`/${locale}/legal/terms-of-use`}>{localize(footerLabels.terms, activeLocale)}</Link>
            <span>/</span>
            <Link href={`/${locale}/legal/cookie-policy`}>{localize(footerLabels.cookies, activeLocale)}</Link>
            <span>/</span>
            <Link href={`/${locale}/legal/security-policy`}>{localize(footerLabels.security, activeLocale)}</Link>
            <span>/</span>
            <Link href={`/${locale}/legal/accessibility-statement`}>{localize(footerLabels.accessibility, activeLocale)}</Link>
        </p>
    </div>
</footer>
  )
}

export default Footer

const footerLabels = {
  rights: {
    en: 'All rights reserved.',
    es: 'Todos los derechos reservados.',
    fr: 'Tous droits réservés.',
  },
  foundation: {
    en: 'Revoluc Foundation',
    es: 'Revoluc Foundation',
    fr: 'Revoluc Foundation',
  },
  email: {
    en: 'Email Revoluc',
    es: 'Enviar correo a Revoluc',
    fr: 'Envoyer un email à Revoluc',
  },
  emailShort: {
    en: 'Email',
    es: 'Correo',
    fr: 'Email',
  },
  privacy: {
    en: 'Privacy',
    es: 'Privacidad',
    fr: 'Confidentialité',
  },
  terms: {
    en: 'Terms',
    es: 'Términos',
    fr: 'Conditions',
  },
  cookies: {
    en: 'Cookies',
    es: 'Cookies',
    fr: 'Cookies',
  },
  security: {
    en: 'Security',
    es: 'Seguridad',
    fr: 'Sécurité',
  },
  accessibility: {
    en: 'Accessibility',
    es: 'Accesibilidad',
    fr: 'Accessibilité',
  },
}
