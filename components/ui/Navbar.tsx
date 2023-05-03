import { useContext, useState } from "react";
import Link from "next/link";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

// import { UIContext } from "../../context";
import { IurbanSvg } from "./";

import { itemsNav } from "../../database";

import styles from "./Navbar.module.css";
import { useLoaded } from "../../hooks";

import { useSession } from "next-auth/react";
import { UIContext } from "../../context";
import { AuthContext } from "../../context";
import { useRouter } from "next/router";

export const Navbar = () => {
  const loadedPage = useLoaded();
  const { data, status } = useSession();
  const { toggleSideMenu, toggleTheme, isDark } = useContext(UIContext);
  const { logout } = useContext(AuthContext);

  const [scrolledTrue, setScrolledTrue] = useState(false);

  const router = useRouter();

  const navigateTo = (url: string) => {
    router.push(url);
  };

  const handleLogout = async () => {
    await logout("");
  };
  return (
    <>
      {loadedPage && (
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
              {!isDark ? (
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

            {/* -----------Iurban Radio icon - text ------------- */}
            <div className={styles["nav__content-userandlogo"]}>
              <Link href="/">
                <a className={styles.nav__logo}>
                  <IurbanSvg className={styles["nav__logo-icon"]} />
                  <span className={styles["text__logo-i"]}>i</span>
                  <span className={styles.text__logo}>Urban Radio</span>
                </a>
              </Link>
            </div>

            <div className={styles.separate__item} />

            {/* -----------Icon Button toggle------------ */}
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
              {!(status == "authenticated") ? (
                <a
                  onClick={() => navigateTo(`/auth/login?p=${router.asPath}`)}
                  className={styles.nav__link}
                >
                  Ingresar
                </a>
              ) : (
                <button onClick={() => handleLogout()}>
                  <a className={styles.nav__link}>Salir</a>
                </button>
              )}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};
