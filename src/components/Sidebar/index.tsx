import { getTranslations } from '@/dictionaries';
import styles from './Sidebar.module.css'
import Link from 'next/link'
import { Locale } from '../../../i18n-config';


interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

export default async function Sidebar({ params }: PageProps) {
  const lang = (await params).lang;
  const t = await getTranslations(lang);

    return (
        <div className={styles.sidemenu}>
            <Link href={`/${lang}`} title='Home'>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].home}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/about`} title='About'>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].about}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/mission`} title='Mission'>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].mission}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            {/* <Link href="/blog">
            <a>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </a>
            </Link> */}
            <Link href={`/${lang}/team`} title='Team'>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].team}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            {/* <Link href={`/${lang}/contact`} title='Contact'>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].contact}</p>

                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link> */}
              
        </div>
    )
}