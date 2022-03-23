import {  useContext } from "react";
import Link from "next/link";
import OutsideClickHandler from "react-outside-click-handler";
import { RiCloseLine } from "react-icons/ri";


import styles from "./SideMenu.module.css";
import { UIContext } from "../../context";
import { itemsNav } from "../../database";

export const SideMenu = () => {
  const { toggleSideMenu, isMenuOpen } = useContext(UIContext);

  return (
   
      <OutsideClickHandler
        onOutsideClick={() => {
          isMenuOpen && toggleSideMenu();
        }}
        display="contents"
      >
        <div
          className={`${styles.nav__menu} ${isMenuOpen && styles["show-menu"]}`}
          id="nav-menu"
        >
         <ul className={styles.nav__list}>
            {itemsNav.map((item) => (
              <Link href={item.link}>
                <a className={styles.nav__link}>{item.title}</a>
              </Link>
            ))}

          </ul>

          {isMenuOpen && (
            <div className={styles.nav__close} id="nav-close">
              <RiCloseLine onClick={toggleSideMenu} />
            </div>
          )}
        </div>
      </OutsideClickHandler>

    
 
  );
};
