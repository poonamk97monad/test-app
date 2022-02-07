import React, { useContext } from "react";
import { History } from "history";
import { UserProfile } from "./AuthProvider.reducer";
import { LoginManager } from "@shared/core";
import { LoginVariables, LogoutVariables } from "./AuthProvider";

export type AuthContextValue = {
  isLoggedIn: boolean;
  hasInitializedOnce: boolean;
  currentUser: UserProfile;
  willRefetch: boolean;
  loginManager: LoginManager;
  provideLogout: (variables: LogoutVariables) => Promise<void>;
};


export const AuthContext = React.createContext<AuthContextValue | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
};
