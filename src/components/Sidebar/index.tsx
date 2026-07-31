import { getTranslations } from '@/dictionaries';
import styles from './Sidebar.module.css'
import Link from 'next/link'
import { Locale } from '../../../i18n-config';


interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function Sidebar({ params }: PageProps) {
  const lang = (await params).lang as Locale;
  const t = await getTranslations(lang);

    return (
        <div className={styles.sidemenu}>
            <Link href={`/${lang}`} title={t['banner'].home}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].home}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/about`} title={t['banner'].about}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].about}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/companies`} title={t['banner'].portfolio}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].portfolio}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/startups`} title={t['banner'].startups}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].startups}</p>
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
            <Link href={`/${lang}/team`} title={t['banner'].team}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].team}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/social`} title={t['banner'].social}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].social}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/careers`} title={t['banner'].careers}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].careers}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/press`} title={t['banner'].press}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].press}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
            <Link href={`/${lang}/contact`} title={t['banner'].contact}>
                    <div className={styles.btn}>
                        <div className={styles.btn1}>
                        <p>{t['banner'].contact}</p>
                            <div className={styles.dot}></div>
                        </div>    
                    </div>        
            </Link>
              
        </div>
    )
}
