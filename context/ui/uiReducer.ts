import { UIState } from './';
import Cookies from 'js-cookie';


type UIActionType =
| { type: '[UI] - ToggleMenu' }
| { type: '[UI] - LoadTheme from cookies | storage' }
| { type: '[UI] - UpdateTheme' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case '[UI] - ToggleMenu':
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            };
        case '[UI] - LoadTheme from cookies | storage':
            return {
                ...state,
                isDark: Boolean(Cookies.get("theme"))
            };

        case '[UI] - UpdateTheme':
            return {
                ...state,
                isDark: !state.isDark
            };

        default:
            return state;
   }
 };