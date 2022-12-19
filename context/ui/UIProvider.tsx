import { FC, useEffect, useReducer } from 'react';
import Cookies from "js-cookie"

import { UIContext, uiReducer } from './';


export interface UIState {
  isMenuOpen: boolean,
  isDark: boolean,
}

const UI_INITIAL_STATE: UIState = {
  isMenuOpen: false,
  isDark: Cookies.get("theme") === "false" ? false : true
}


export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  //  useEffect(() => {
    
  //    const cookieTheme = Cookies.get("theme") 
  //    dispatch({ type: "[UI] - LoadTheme from cookies | storage" })
  
  //  }, [])
  
  useEffect(() => {
    Cookies.set("theme", state.isDark.toString())
   
  }, [state.isDark])



  const toggleSideMenu = () => {
      dispatch({ type: "[UI] - ToggleMenu" })
  }

 const toggleTheme = () => {
    
   dispatch({ type: "[UI] - UpdateTheme" })
   Cookies.set("theme", state.isDark.toString())
   

}



 return (
    <UIContext.Provider value={{
       ...state,

       // Methods
       toggleSideMenu,
      toggleTheme
    }}>
        {children}
    </UIContext.Provider>
 );
};