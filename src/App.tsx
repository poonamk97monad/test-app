import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { RoutePath } from "@shared/core";
import { BrowserRouter, Route, Switch } from "@react-router";
import { ssrRoutes } from "./router.ssr";
import { AuthProvider } from "@shared/components/AuthProvider";
import { setup } from "@shared/core";

export type AppProps = Readonly<
  Partial<{
    routes: Array<RoutePath<any>>;
  }>
>;

const App: React.FC<AppProps> = ({ routes = ssrRoutes }) => {
  const setupConfig = setup();
  return (
    <AuthProvider {...setupConfig}>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              requiredAuth={route.requiredAuth}
              render={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
