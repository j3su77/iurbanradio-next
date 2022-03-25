import { useContext } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { RiCloseLine } from "react-icons/ri";

import styles from "./SideMenu.module.css";
import { UIContext } from "../../context";
import { itemsNav } from "../../database";

export const SideMenu = () => {
  const { toggleSideMenu, isMenuOpen } = useContext(UIContext);

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
