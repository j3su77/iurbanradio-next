import { FC, useContext } from "react";
import Head from "next/head";
import { Navbar } from "../ui/Navbar";

import styles from "./AuthLayout.module.css";
import Link from "next/link";
import { IurbanSvg } from "../ui";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useLoaded } from "../../hooks";
import { UIContext } from "../../context/ui/UIContext";

interface Props {
  title: string;
  pageDescription: string;
}

export const AuthLayout: FC<Props> = ({ title, pageDescription, children }) => {
  const loadedPage = useLoaded();
  const { toggleSideMenu, toggleTheme, isDark } = useContext(UIContext);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>

      {loadedPage && (
        <header className={styles.header}>
          <nav className={styles.nav}>
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
            <div className={styles.separate__item} />

            <div className={styles["nav__content-logo"]}>
              <Link href="/">
                <a className={styles.nav__logo}>
                  <IurbanSvg className={styles["nav__logo-icon"]} />
                  <span className={styles["text__logo-i"]}>i</span>
                  <span className={styles.text__logo}>Urban Radio</span>
                </a>
              </Link>
            </div>
            <div className={styles.separate__item} />
            <div className={styles.separate__item} />
          </nav>
        </header>
      )}

      <main className="container">{children}</main>
    </>
  );
};
