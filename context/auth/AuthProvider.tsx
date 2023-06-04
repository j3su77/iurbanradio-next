import { FC, useReducer, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

import Cookies from "js-cookie";

import { AuthContext, authReducer } from "./";
import { iurbanApi } from "../../apis";
import { IUser } from "../../interfaces";
import axios from 'axios';

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
  errorMessage?: string
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
  errorMessage: undefined
};

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log({ user: data.user });

      dispatch({ type: "[Auth] - Login", payload: data.user as IUser });
    } else {
      dispatch({type: '[Auth] - Logout', payload: ""})
    }
  }, [status, data]);

  
  

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await iurbanApi.post("/user/login", { email, password });
      const { token, user } = data;

      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return true;
    } catch (error) {
      if ( axios.isAxiosError(error) ) {
        console.log( error.response)
        }
        return false
    }
  };

  const logout = (error: string = "") => {
    Cookies.remove("userIn")
    signOut({redirect: false});
    // router.reload();
    // Cookies.remove('token');
    dispatch({ type: "[Auth] - Logout", payload: "error" + error });
}



  return (
    <AuthContext.Provider
      value={{
        ...state,

        // Methods
        loginUser,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
