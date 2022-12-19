import { useContext } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { RiCloseLine } from "react-icons/ri";

import styles from "./SideMenu.module.css";
// import { UIContext } from "../../context";
import { UIContext, AuthContext } from "../../context";
import { itemsNav } from "../../database";

import { useSession } from "next-auth/react";
import {} from "../../context";
import { useRouter } from "next/router";

export const SideMenu = () => {
  const { status } = useSession();
  const router = useRouter();
  const { toggleSideMenu, isMenuOpen } = useContext(UIContext);
  const { logout } = useContext(AuthContext);

  const navigateTo = (url: string) => {
    router.push(url);
  };

  return (
    <>
      <div
        className={`${styles.nav__menu} ${isMenuOpen && styles["show-menu"]}`}
        id="nav-menu"
      >
        <OutsideClickHandler
          onOutsideClick={() => {
            isMenuOpen && toggleSideMenu();
          }}
          display="contents"
        >
          <ul className={styles.nav__list} onClick={toggleSideMenu}>
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
              <div className={styles.nav__link}>
                <a onClick={() => logout("")}>Cerrar Sessión</a>
              </div>
            )}
          </ul>
        </OutsideClickHandler>

        {isMenuOpen && (
          <div className={styles.nav__close} id="nav-close">
            <RiCloseLine onClick={toggleSideMenu} />
          </div>
        )}
      </div>

      {isMenuOpen && <div className={styles.dark__screen} />}
    </>
  );
};
