import React from "react";
import { Route, Switch } from "@react-router";
import {
  RoutePath,
  RoutesPaths,
  RoutesProvider,
  useRouterHelper,
} from "@shared/core";

import {  ProductList, ProductEdit, } from "./components";

export type RoutesNames =  "productList" | "productEdit";

export const routePaths: RoutesPaths<RoutesNames> = {
  productEdit: {
    path: "product/edit",
    goToPath: () => "product/edit",
  },
  productList: {
    path: "products",
    goToPath: () => "products",
  },
 
};

const RoutesSearch: React.FC = () => {
  const routeHelpers = useRouterHelper();
  const routes: Array<RoutePath<{}>> = [
    {
      exact: true,
      path: routeHelpers.buildPath(routePaths.productList.path),
      component: ({ history }) => <ProductList />,
    },
    {
      exact: true,
      path: routeHelpers.buildPath(routePaths.productEdit.path),
      component: ({ history }) => <ProductEdit />,
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
