import React from "react";
import { RouterAccount, RoutesNames } from "./route.paths";

interface Props {
  appUrl: RoutesNames;
}

// the App must be a default export due to `loadable`
//   so we have to do some conditional logic :(
export const AuthApp: React.FC<Props> = ({ appUrl }) => {
  return <RouterAccount appUrl={appUrl} />;
};

export default AuthApp;
