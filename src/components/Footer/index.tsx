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
            <p>Revoluc <span className={styles.footerall}><span className={styles.footerbar}>/</span> All rights reserved</span></p>
        </div>
    </div>
    <div className={styles.socials}>
        <p className={styles.socialsP}>
            <Link href={`/${locale}/social`} aria-label="Revoluc social channels" title='Revoluc social channels'>
                {t['banner'].social}
            </Link>
            <span>/</span>
            <a href="mailto:hi@revoluc.com" aria-label="Email Revoluc" title='Email Revoluc'>Email</a>
        </p>
    </div>
</footer>
  )
}

export default Footer
