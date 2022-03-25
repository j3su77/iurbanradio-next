import { useContext, useState } from "react";
import Link from "next/link";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

import { UIContext } from "../../context";
import { IurbanSvg } from "./";

import styles from "./Navbar.module.css";
import { itemsNav } from "../../database";

export const Navbar = () => {
  const { toggleSideMenu, toggleTheme, isDark } = useContext(UIContext);
  const [scrolledTrue, setScrolledTrue] = useState(false);

  
  return (
    <>
      <header
        className={`${styles.header} ${
          scrolledTrue && styles["scroll-header"]
        }`}
        id="header"
      >
        <nav className={`${styles.nav} container`}>
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

          <div className={styles.separate__item} />

          {/* -----------item 3------------- */}
          <div className={styles.nav__toggle} id="nav-toggle">
            <FaBars onClick={toggleSideMenu} />
          </div>

          {/* -----------item link navbar------------- */}

          <ul className={styles.nav__list}>
            {itemsNav.map((item) => (
              <Link key={item.id} href={item.link}>
                <a className={styles.nav__link}>{item.title}</a>
              </Link>
            ))}

          </ul>
        </nav>
      </header>
    </>
  );
};
