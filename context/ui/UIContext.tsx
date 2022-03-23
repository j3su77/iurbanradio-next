import { createContext } from 'react';



interface ContextProps {
    isMenuOpen: boolean,
    isDark: boolean,

    // Methods
    toggleSideMenu: () => void
    toggleTheme: () => void
}


export const UIContext = createContext({} as ContextProps)