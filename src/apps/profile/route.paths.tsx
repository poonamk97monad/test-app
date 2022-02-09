import React from "react";
import { Route, Switch } from "@react-router";
import {
  RoutePath,
  RoutesPaths,
  RoutesProvider,
  useRouterHelper,
} from "@shared/core";

import { Profile, ProfileEdit } from "./components";

export type RoutesNames = "profile" | "profileEdit" ;

export const routePaths: RoutesPaths<RoutesNames> = {
  profile: {
    path: "/",
    goToPath: () => "",
  },
  profileEdit: {
    path: "edit",
    goToPath: () => "edit",
  }
};

const RoutesSearch: React.FC = () => {
  const routeHelpers = useRouterHelper();
  const routes: Array<RoutePath<{}>> = [
    {
      exact: true,
      path: routeHelpers.buildPath(routePaths.profile.path),
      component: ({ history }) => <Profile />,
    },
    {
      exact: true,
      path: routeHelpers.buildPath(routePaths.profileEdit.path),
      component: ({ history }) => <ProfileEdit />,
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

export const RouterProfile: React.FC<{ appUrl: string }> = ({ appUrl }) => {
  return (
    <RoutesProvider appUrl={appUrl}>
      <RoutesSearch />
    </RoutesProvider>
  );
};
