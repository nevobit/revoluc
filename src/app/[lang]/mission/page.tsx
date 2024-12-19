import React from 'react'
import styles from './Mission.module.css';
import { Locale } from '../../../../i18n-config';
import { getTranslations } from '@/dictionaries';

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Mission = async ({ params }: PageProps) => {
  const lang = (await params).lang;
  const t = await getTranslations(lang);
  return (
    <div className={styles.mainsections}>
    <div className={styles.about}>
        <div className={styles.aboutcontent}>
            <div className={styles.abouttext}>
                <h1> {t['banner'].mission}</h1>
                <p>
                    {t.p3}
                </p>
                <p>
                    {t.p4}
                </p>
            </div>
        </div>
        <div className={styles.missionimgpng}>
            <img src="/img/mission-img.png" alt="" />
        </div>
    </div>

</div>
  )
}

export default Mission