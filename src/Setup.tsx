import React from "react";
import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "@shared/components/AuthProvider";
import { LoginManager } from "@shared/core";

interface SetupProps
  extends Readonly<{
    helmetContext?: Object;
    loginManager: LoginManager;
  }> {}

const GlobalStyle = createGlobalStyle`
  #root {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    /* min-height: fill-available; */
    display: flex;
    flex-direction: column;
    > *:first-child {
      flex: 1;
    }
    @media screen and (min-width: 480px) {
      min-height: 100vh;
    }
  }

  body.overlay-open {
    overflow: hidden;
    padding-right: 15px;
  }

  *,::after,::before { 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const Setup: React.FC<SetupProps> = ({ loginManager, children }) => {
  return (
    <AuthProvider loginManager={loginManager}>
      <>
        <GlobalStyle />
        {children}
      </>
    </AuthProvider>
  );
};
