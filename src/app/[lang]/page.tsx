import React from 'react'
import { getTranslations } from '../../dictionaries';
import styles from './Home.module.css';
import { Locale } from '../../../i18n-config';

interface PageProps {
  params: Promise<{
    lang: Locale;
  }>;
}


export default async function IndexPage({ params }: PageProps) {
  const lang = (await params).lang;
  const t = await getTranslations(lang);
  return (
        <div className={styles.banner}>
        <section>
          <div>
          <h1 className={styles.title}>
            <span>{t['banner'].improve}</span>
            <br />
            <span>{t['banner'].steps}</span>
          </h1>
          </div>
          <div className={styles.callToAction}>
            <div className={styles.callToActionBtn}>
              <div className={styles.seeMoreHolder}>
                <p className={styles.callToActionCopy}>{t['banner'].seeMore}</p>
              </div>
              <i className={styles.callToActionBtnIcon + ' bx bx-chevron-down'}></i>
            </div>
   
          </div>
          <div  className={styles.callToActionBackground}> 
            <svg width="121" height="121" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.88 60.827c0-33.137 26.863-60 60-60s60 26.863 60 60-26.862 60-60 60c-33.137 0-60-26.863-60-60z" fill="url(#paint0_radial)"></path><path d="M110.618 40.3c-8.842-18.947-21.316-26.052-29.21-30-9.475-4.737-11.843 5.527-8.685 12.632 3.158 7.105 5.526 18.158 7.105 32.369 1.22 10.985 41.842 8.683 30.79-15z" fill="url(#paint1_linear)" fillOpacity=".6"></path><path opacity=".4" d="M49.828 114.511c-36-13.263-43.948-46.053-43.421-60.79 6.316-45 56.842-46.578 64.737-35.526 7.894 11.053 23.684 112.895-21.316 96.316z" fill="url(#paint2_linear)"></path><path opacity=".4" d="M32.233 98.585c-5.625 1.852-19.376-15.638-21.25-24.075-4.391-19.755 15.625-16.669 16.875 0 .745 9.927 10.001 22.224 4.375 24.075z" fill="url(#paint3_linear)"></path><g filter="url(#filter0_f)"><path d="M83.147 24.154c-1.171-2.524-1.64-3.61-3.663-6.218-1.321-1.705-1.377-2.904.337-3.491 1.715-.587 5.32.991 7.642 4.415s-2.853 8.45-4.316 5.294z" fill="url(#paint4_linear)" fillOpacity=".6"></path></g><defs><linearGradient id="paint1_linear" x1="76.67" y1="10.301" x2="91.634" y2="60.044" gradientUnits="userSpaceOnUse"><stop stopColor="#22E4FC"></stop><stop offset="1" stopColor="#22E4FC" stopOpacity="0"></stop></linearGradient><linearGradient id="paint2_linear" x1="43.38" y1="12.473" x2="43.38" y2="116.331" gradientUnits="userSpaceOnUse"><stop offset=".398" stopColor="#209AFC" stopOpacity="0"></stop><stop offset="1" stopColor="#1971e4"></stop></linearGradient><linearGradient id="paint3_linear" x1="22.233" y1="69.571" x2="22.197" y2="98.722" gradientUnits="userSpaceOnUse"><stop stopColor="#1971e4" stopOpacity=".78"></stop><stop offset=".664" stopColor="#209AFC"></stop></linearGradient><linearGradient id="paint4_linear" x1="81.701" y1="13.801" x2="85.282" y2="24.258" gradientUnits="userSpaceOnUse"><stop stopColor="#34E9FF"></stop><stop offset="1" stopColor="#34E9FF" stopOpacity="0"></stop></linearGradient><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(-33.725 187.328 50.201) scale(109.844 106.789)"><stop stopColor="#2A85FF"></stop><stop offset="1" stopColor="#1971e4"></stop></radialGradient><filter id="filter0_f" x="77.13" y="11.527" width="13.104" height="15.627" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation=".5" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs></svg>
          </div>
        </section>
      </div>
  )
}
