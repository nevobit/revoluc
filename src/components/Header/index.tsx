'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import { useLocale } from '@/hooks/useLocale';
import { usePathname, useRouter } from 'next/navigation'
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { t, locale } = useLocale();
  
  const changeLanguage = (e: { target: { value: string; }; }) => {
    const locale = e.target.value;
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;

    router.push(segments.join("/"));
  }


  
  return (
    <header className={styles.header}>
      <Link href={`/${locale}`}>
          <Image
          className={styles.logo}
            src="/img/logo192.png"
            alt="Revoluc logo"
            height={100}
            width={100}
          />
      </Link>
      <button
        className={styles.menu}
        type="button"
        aria-label={openMenu ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={openMenu}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <span className={styles.menu_bar}></span>
        <span className={styles.menu_bar}></span>
      </button>

      <div className={openMenu? styles.menucontentopen : styles.menucontent}>
        <div className={styles.menulinks}>
          <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href={`/${locale}`}>
                {t['banner'].home}
              </Link>
            </p>
          </div>
          <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href={`/${locale}/portfolio`}>
                {t['banner'].portfolio}
              </Link>
            </p>
          </div>
          <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href={`/${locale}/about`}>
                {t['banner'].about}
              </Link>
            </p>
          </div>
          {/* <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href="/apply">
                {t['banner'].apply}
              </Link>
            </p>
          </div> */}
          <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href={`/${locale}/mission`}>
                {t['banner'].mission}
              </Link>
            </p>
          </div>
          <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href={`/${locale}/startups`}>
                {t['banner'].startups}
              </Link>
            </p>
          </div>
          <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href={`/${locale}/team`} >
                {t['banner'].team}
              </Link>
            </p>
          </div>
          <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href={`/${locale}/social`}>
                {t['banner'].social}
              </Link>
            </p>
          </div>
          <div className={styles.pageone}>
            <i className="bx bx-chevron-right"></i>
            <p>
              <Link href={`/${locale}/contact`}>
                {t['banner'].contact}
              </Link>
            </p>
          </div>
          
          <div className={styles.select_language}>
            <select onChange={changeLanguage} value={locale} >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
        
        <div className={styles.menucontact}>
          <a href="mailto:hi@revoluc.com">
            <i className="bx bx-chevron-right"></i> <p>hi@revoluc.com</p>
          </a>
          <a href="tel:+12567156920">
            <i className="bx bx-chevron-right"></i> <p>+1 (256) 715-6920</p>
          </a>
          <a href="https://goo.gl/maps/8VfDrMoDQbmUJ4vT8" target="_blank" rel="noopener noreferrer">
            <i className="bx bx-chevron-right"></i>
            <p>
              2261 Market Street STE 22620
              <br />
              San Francisco, CA 94114
            </p>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
