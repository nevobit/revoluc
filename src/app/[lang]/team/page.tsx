import React from 'react'
import styles from './Team.module.css';
import { getTranslations } from '@/dictionaries';
import { Locale } from '../../../../i18n-config';

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Team = async ({ params }: PageProps) => {
  const lang = (await params).lang;
  const t = await getTranslations(lang);
  return (
    <div className={styles.mainsections}>
    <div className={styles.about}>
     <div className={styles.content}>
      <div className={styles.text}>
       <h1>{t['banner'].team}</h1>
       <p>{t.p5}</p>
       <p>{t.p6}</p>
       <p>{t.p7}</p>
      </div>
     </div>
    </div>
  </div>
  )
}

export default Team