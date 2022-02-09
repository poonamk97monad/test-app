import type { RoutePath } from "@shared/core/router.helper/useRouterHelper";
import { Home, ProductApp, AuthApp, ProfileApp } from "@apps";

function NotFound() {
  return <h1>404 Page Not Found</h1>;
}

export const ssrRoutes: Array<RoutePath<{}>> = [
  {
    exact: true,
    path: "/",
    component: () => <Home name="home" />,
  },
  {
    path: "/product",
    component: () => <ProductApp appUrl="product" />,
  },
  {
    path: "/account",
    requiredAuth: false,
    component: () => <AuthApp appUrl="account" />,
  },
  {
    path: "/profile",
    requiredAuth: false,
    component: () => <ProfileApp appUrl="profile" />,
  },
  {
    path: "*",
    component: () => <NotFound />,
  },
];
