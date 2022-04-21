import { createContext } from 'react';
import { IUser } from '../../interfaces';


interface ContextProps {
    user?: IUser
    isLoggedIn: boolean,

   //--- Methods
    loginUser: (email: string, password: string) => Promise<boolean>

}


export const AuthContext = createContext({} as ContextProps)