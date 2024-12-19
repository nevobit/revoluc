import styles from './Footer.module.css'

const Footer = () => {
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
            <a href="https://www.linkedin.com/company/92734934" title='Linkedin' target="_blank" rel="noopener noreferrer">
                In
            </a>
            <span>/</span>
            <a href="https://www.linkedin.com/company/92734934" title='Twitter'>Tw</a>
        </p>
    </div>
</footer>
  )
}

export default Footer