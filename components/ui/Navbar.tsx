import { useContext, useState } from "react";
import Link from "next/link";

import { RiCloseLine, RiMoonFill, RiSunFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { UIContext } from "../../context";
import { IurbanSvg } from "./";

import OutsideClickHandler from "react-outside-click-handler";

import styles from "./Navbar.module.css";

export const Navbar = () => {
  const { toggleSideMenu, isMenuOpen, toggleTheme, isDark } =
    useContext(UIContext);
    const [scrolledTrue, setScrolledTrue] = useState(false);


/*=============== SCROLL NAV VIEW SHADOW ===============*/
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 80) {
        setScrolledTrue(true);
      } else if (scrolled <= 80) {
        setScrolledTrue(false);
      }
    };
    if (process.browser) window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <header
        className={`${styles.header} ${scrolledTrue && styles["scroll-header"]}`}
        id="header"
      >
        <nav className={`${styles.nav} container`}>

          <OutsideClickHandler
            onOutsideClick={() => {
              isMenuOpen && toggleSideMenu();
            }}
            display="contents"
          >
            <div
              className={`${styles.nav__menu} ${
                isMenuOpen && styles["show-menu"]
              }`}
              id="nav-menu"
            >
              <ul className={styles.nav__list} onClick={toggleSideMenu}>
                {/* <!-- _____home______ --> */}

                <Link href="/">
                  <a className={styles.nav__link}>Inicio</a>
                </Link>

                {/* <!-- _____About______ --> */}
                <Link href="#publicaciones">
                  <a className={styles.nav__link}>publicaciones</a>
                </Link>
              </ul>

              {isMenuOpen && (
                <div className={styles.nav__close} id="nav-close">
                  <RiCloseLine onClick={toggleSideMenu} />
                </div>
              )}
            </div>
          </OutsideClickHandler>

          {/* -----------item 1------------- */}
          <div className={styles.nav__btns}>
            {/* <!-- Theme change button --> */}
            {isDark !== true ? (
              <RiMoonFill
                onClick={() => toggleTheme()}
                className={styles["change-theme"]}
                id="theme-button"
                name="theme-button"
              />
            ) : (
              <RiSunFill
                onClick={() => toggleTheme()}
                className={styles["change-theme"]}
                id="theme-button"
                name="theme-button"
              />
            )}
          </div>

          {/* -----------item 2------------- */}
          <div className={styles["nav__content-userandlogo"]}>
            <Link href="/">
              <a className={styles.nav__logo}>
                <IurbanSvg className={styles["nav__logo-icon"]} />
                <span className={styles.text__logo}>iUrban Radio</span>
              </a>
            </Link>
          </div>

          {/* -----------item 3------------- */}
          <div className={styles.nav__toggle} id="nav-toggle">
            <FaBars onClick={toggleSideMenu} />
          </div>
        </nav>
      </header>
    </>
  );
};
