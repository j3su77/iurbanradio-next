import React, { FC } from "react";
import Cookies from "js-cookie";
import { useContext, useEffect } from "react";
import { UIContext } from "../../context/ui/UIContext";

export const SeletedTheme: FC = ({ children }) => {
  const { isDark } = useContext(UIContext);
  let isTheme;
  useEffect(() => {
    isTheme = isDark ? "dark-theme" : "light-theme";
    if (process.browser)  document.querySelector("body")!.classList.add(isTheme)
  }, []);

  useEffect(() => {
    isTheme = isDark ? "dark-theme" : "light-theme";
    if (process.browser) {
      document.querySelector("body")!.classList.remove("light-theme");
      document.querySelector("body")!.classList.remove("dark-theme");
      document.querySelector("body")!.classList.add(isTheme);
    }
  }, [isDark]);

  return <>{children}</>;
};
