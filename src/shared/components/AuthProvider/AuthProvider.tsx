import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { LoginManager } from "@shared/core";
import { AuthContext, AuthContextValue } from "./AuthProvider.context";
import { useAuthProviderReducer } from "./AuthProvider.reducer";
import {
  identifyUserAction,
  handleMissingTokenAction,
  initiateIdentifyUserAction,
} from "./AuthProvider.actions";
import { useDocumentVisibility } from "@shared/utils/hooks/useDocumentVisibility";
import axios from "axios";
import { config } from "@static/js/env.config";

export type LoginVariables = {
  username: string;
  password: string;
};

interface Props {
  loginManager: LoginManager;
}

export const AuthProvider: React.SFC<Props> = ({ children, loginManager }) => {
  const [{ hasInitializedOnce, user }, dispatch] = useAuthProviderReducer();

  const identifyCurrentUser = (token: string) => {
    const payload = {};
    axios({
      method: "get",
      url: config.serverUri + "/auth/users/me/",
      data: payload,
      headers: {
        "Authorization": "Token " + token,
      },
    })
      .then(({ data }) => {
        dispatch(identifyUserAction({ data }));
      })
      .catch((error) => {
        dispatch(identifyUserAction({ error }));
      });
  };

  const processToken = useCallback(
    (token: string | null) => {
      if (token) {
        dispatch(initiateIdentifyUserAction);
        // If token exists, request user identity and event ACLs
        // Executing the lazy query will update the QueryResult value in the result tuple.
        identifyCurrentUser(token);
      } else {
        // If token does not exist, user is not logged in.
        dispatch(handleMissingTokenAction);
      }
    },
    [dispatch, identifyCurrentUser]
  );

  useEffect(() => {
    // Initiate ACL request flow
    if (!hasInitializedOnce) {
      loginManager.getTokenAsync().then(processToken);
    }
  }, [identifyCurrentUser, loginManager, processToken]);

  useDocumentVisibility({
    onVisible: () => {
      loginManager.getTokenAsync().then(processToken);
    },
  });

  const authContextValue: AuthContextValue = useMemo(() => {
    async function provideLogout(): Promise<void> {
      const { authService } = loginManager;
      try {
        await authService.signout();
      } catch (err) {
        console.error("could not provide Logout");
        console.error(err);
      }
    }

    return {
      hasInitializedOnce,
      isLoggedIn: !!user.user,
      currentUser: user,
      willRefetch: false,
      loginManager: loginManager,
      provideLogout,
    };
  }, [hasInitializedOnce, user, loginManager]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
