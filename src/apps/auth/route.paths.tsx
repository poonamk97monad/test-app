import React from "react";
import { Route, Switch } from "@react-router";
import {
  RoutePath,
  RoutesPaths,
  RoutesProvider,
  useRouterHelper,
} from "@shared/core";

import { Login, Register, ForgotPassword, ResetPassword } from './components'

export type RoutesNames = "account" | "login" | "register" | "forgotpassword" | "resetpassword";

/**
 * Example route paths. Has a path for the <Router /> and a function for history to push to.
 */
export const routePaths: RoutesPaths<RoutesNames> = {
  login: {
    path: "login",
  },
  register: {
    path: "register",
  },
  forgotpassword: {
    path: "forgotpassword",
  },
  resetpassword: {
    path: "resetpassword/:uid/:token",
  },
};

const RoutesAccount: React.FC = () => {
  const routeHelpers = useRouterHelper();
  const routes: Array<RoutePath<{}>> = [
    {
      exact: true,
      path: routeHelpers.buildPath(routePaths.login.path),
      component: () => <Login />,
    },
    {
      exact: true,
      path: routeHelpers.buildPath(routePaths.register.path),
      component: () => <Register />,
    },
    {
      exact: true,
      path: routeHelpers.buildPath(routePaths.forgotpassword.path),
      component: () => <ForgotPassword />,
    },
    {
      exact: true,
      path: routeHelpers.buildPath(routePaths.resetpassword.path),
      component: (props) => <ResetPassword {...props}/>,
    },
  ];

  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} render={route.component} />
      ))}
    </Switch>
  );
};

export const RouterAccount: React.FC<{ appUrl: string }> = ({ appUrl }) => {
  return (
    <RoutesProvider appUrl={appUrl}>
      <RoutesAccount />
    </RoutesProvider>
  );
};
