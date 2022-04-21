import { FC, useReducer, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";

import Cookies from "js-cookie";

import { AuthContext, authReducer } from "./";
import { iurbanApi } from "../../api";
import { IUser } from "../../interfaces";

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log({ user: data.user });

      dispatch({ type: "[Auth] - Login", payload: data.user as IUser });
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
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,

        // Methods
        loginUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
