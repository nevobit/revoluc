import { getTranslations } from '@/dictionaries';
import React from 'react'
import { Locale } from '../../../../i18n-config';
import styles from './About.module.css';

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const About = async({ params }: PageProps) => {
  const lang = (await params).lang;
  const t = await getTranslations(lang);
  return (
    <div className={styles.mainsections}>

    <div className={styles.about}>
        <div className={styles.aboutcontent}>
            <div className={styles.abouttext}>
                <h1>{t['banner'].about}</h1>
                <p>{t['p1']}</p>
                <p >
                {t.p2}
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About