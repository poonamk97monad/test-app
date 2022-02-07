import type { RoutePath } from "@shared/core/router.helper/useRouterHelper";
import { Home, ProductLanding, ProductApp, AuthApp, ProfileApp } from "@apps";

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
    path: "/products/:id",
    component: (props) => <ProductLanding name="product" {...props} />,
  },
  {
    path: "/product",
    component: () => <ProductApp name="product" />,
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
