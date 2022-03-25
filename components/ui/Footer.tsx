
import { IurbanSvg } from "./"
import { RiFacebookFill, RiInstagramFill, RiTwitterFill } from "react-icons/ri"

import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <footer className={`${styles.footer} section`}>
      <div className={`${styles["footer__content-logo"]} " container"`}>
        <div className={styles.footer__logo}>
        <IurbanSvg className={styles["footer__logo-icon"]} />
          iUrban Radio
        </div>

        <div className={styles.box}>
          <div className={`${styles["box-sm"]} ${styles.red}`}></div>
          <div className={`${styles["box-sm"]}  ${styles.orange}`}></div>
          <div className={`${styles["box-sm"]}  ${styles.yellow}`}></div>
          <div className={`${styles["box-sm"]}  ${styles.green}`}></div>
          <div className={`${styles["box-sm"]}  ${styles.blue}`}></div>
          <div className={`${styles["box-sm"]}  ${styles.purple}`}></div>
        </div>
      </div>
      <div className={`${styles.footer__container} container grid`}>
        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>Dirección</h3>

          <ul className={styles.footer__data}>
            <li className={styles.footer__information}>Soledad - Atlántico</li>
            <li className={styles.footer__information}><strong>C.P :</strong> 083006</li>

          </ul>
        </div>

        <div className={styles.footer__content}>
          <h3 className={styles.footer__title}>Contactanos</h3>

          <ul className={styles.footer__data}>
            <li className={styles.footer__information}>+57 301 678 2082</li>

            <div className={styles.footer__social}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles["footer__social-link"]}
              >
                <RiFacebookFill />
              </a>
              <a
                href="https://www.instagram.com"
                rel="noreferrer noopener"
                className={styles["footer__social-link"]}
              >
                <RiInstagramFill />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className={styles["footer__social-link"]}
              >
                <RiTwitterFill />
              </a>
            </div>
          </ul>
        </div>

      
      </div>
      <div className={`${styles.footer__images} container`}>
          <h3 className={styles.footer__title}>Lorem ipsum, dolor sit amet consectetur adipisicing.</h3>

          {/* <div className="footer__cards">
            <img src="assets/img/card1.png" alt="" className="footer__card" />
            <img src="assets/img/card2.png" alt="" className="footer__card" />
            <img src="assets/img/card3.png" alt="" className="footer__card" />
            <img src="assets/img/card4.png" alt="" className="footer__card" />
          </div> */}
        </div>

      <p className={styles.footer__copy}>&#169; {new Date().getFullYear()} J3su. Todos los derechos reservados.</p>
    </footer>
  )
}
