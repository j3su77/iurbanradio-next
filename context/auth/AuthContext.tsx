import { createContext } from 'react';
import { IUser } from '../../interfaces';


interface ContextProps {
    user?: IUser
    isLoggedIn: boolean,
    errorMessage?: string

   //--- Methods
    loginUser: (email: string, password: string) => Promise<boolean>
    logout: (string: string) => void

}


export const AuthContext = createContext({} as ContextProps)
