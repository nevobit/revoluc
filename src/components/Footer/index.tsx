'use client'

import Link from 'next/link'
import { useLocale } from '@/hooks/useLocale'
import styles from './Footer.module.css'

const Footer = () => {
  const { t, locale } = useLocale()

  return (
    <footer className={styles.footer}>
    <div className={styles.copyrights}>
        <div className={styles.dots}>
            <i className='bx bx-dots-horizontal-rounded' ></i>
            <i className='bx bx-dots-horizontal-rounded' ></i>
        </div>
        <div className={styles.copyrightstypingp}>
            <p>2026 Revoluc Inc. <span className={styles.footerall}>All rights reserved.</span></p>
        </div>
    </div>
    <div className={styles.socials}>
        <p className={styles.socialsP}>
            <Link href={`/${locale}/social`} aria-label="Revoluc social channels" title='Revoluc social channels'>
                {t['banner'].social}
            </Link>
            <span>/</span>
            <a href="mailto:hi@revoluc.com" aria-label="Email Revoluc" title='Email Revoluc'>Email</a>
            <span>/</span>
            <Link href={`/${locale}/legal/privacy-policy`}>Privacy</Link>
            <span>/</span>
            <Link href={`/${locale}/legal/terms-of-use`}>Terms</Link>
            <span>/</span>
            <Link href={`/${locale}/legal/cookie-policy`}>Cookies</Link>
            <span>/</span>
            <Link href={`/${locale}/legal/security-policy`}>Security</Link>
            <span>/</span>
            <Link href={`/${locale}/legal/accessibility-statement`}>Accessibility</Link>
        </p>
    </div>
</footer>
  )
}

export default Footer
