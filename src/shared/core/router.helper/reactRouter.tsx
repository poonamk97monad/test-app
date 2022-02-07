import { AuthProvider } from "@shared/components/AuthProvider";
import { useAuth } from "@shared/components/AuthProvider";

// eslint-disable-next-line no-restricted-imports
export type {
  MemoryRouterProps,
  RedirectProps,
  RouteComponentProps,
  RouteProps,
  SwitchProps,
  LinkProps,
  NavLinkProps,
  StaticRouterProps,
} from "react-router-dom";

// Re-export unmodified components + hooks
// eslint-disable-next-line no-restricted-imports
export {
  BrowserRouter,
  MemoryRouter,
  Redirect,
  Router,
  StaticRouter,
  Switch,
  matchPath,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

// eslint-disable-next-line
import {
  Route as RouteRR,
  RouteComponentProps as RouteComponentPropsRR,
  RouteProps as RoutePropsRR,
  Redirect,
} from "react-router-dom";

interface CustomRoutesProps extends RoutePropsRR {
  path: string;
  requiredAuth?: boolean;
}

export function Route<T extends CustomRoutesProps>(props: T) {
  const { render, children, path, requiredAuth = false } = props;
  const authProvider = useAuth();
  const shouldRedirect =
    requiredAuth && !authProvider.isLoggedIn && authProvider.hasInitializedOnce;
  const handleRenderProp = (renderProps: RouteComponentPropsRR) => {
    return render?.(renderProps);
  };

  const handleChildrenProp = () => {
    return children;
  };

  const maybeUseRenderer = (
    shouldUse: boolean,
    fn: typeof handleChildrenProp | typeof handleRenderProp
  ) => {
    return shouldUse ? fn : undefined;
  };

  // eslint-disable-next-line react/no-children-prop
  return (
    <>
      {shouldRedirect ? (
        <Redirect from={path} to="/" />
      ) : (
        <RouteRR
          {...props}
          children={maybeUseRenderer(!!children, handleChildrenProp)}
          render={maybeUseRenderer(!!render, handleRenderProp)}
        />
      )}
    </>
  );
}
