import React from "react";
import { Route, Switch } from "@react-router";
import {
  RoutePath,
  RoutesPaths,
  RoutesProvider,
  useRouterHelper,
} from "@shared/core";

import {  ProductList, ProductEdit, ProductLanding } from "./components";

export type RoutesNames =  "productList" | "productEdit" | "productView";

export const routePaths: RoutesPaths<RoutesNames> = {
   productList: {
    path: "list",
    goToPath: () => "list",
  },
  productEdit: {
    path: "edit",
    goToPath: () => "edit",
  },
  productView: {
    path: ":id",
    goToPath: () => ":id",
  },
};

const RoutesSearch: React.FC = () => {
  const routeHelpers = useRouterHelper();
  const routes: Array<RoutePath<{}>> = [
    {
      path: routeHelpers.buildPath(routePaths.productList.path),
      component: ({ history }) => <ProductList />,
    },
    {
      path: routeHelpers.buildPath(routePaths.productEdit.path),
      component: ({ history }) => <ProductEdit />,
    },
    {
      path: routeHelpers.buildPath(routePaths.productView.path),
      component: (props) => <ProductLanding  {...props} />,
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
