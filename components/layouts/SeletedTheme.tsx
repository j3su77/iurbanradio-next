import { FC, useContext, useEffect  } from "react";


import { UIContext } from "../../context";


export const SeletedTheme: FC = ({ children }) => {
   const { isDark } = useContext(UIContext);

  let isTheme: string;


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

  // useEffect(() => {
  
  //   if (process.browser)  document.querySelector("body")!.classList.toggle("menu__open", isMenuOpen)
  //   }, [isMenuOpen]);



  return <>{children}</>;
};
