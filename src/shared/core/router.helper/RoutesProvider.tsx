import { withWindow } from '@shared/utils/withWindow';
import { LocationDescriptorObject } from 'history';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { NavigationOptions, RoutesContext } from './RoutesContext';

export type RoutesPaths<T extends string> = Record<
  T,
  {
    path: string;
    goToPath: (...args: string[]) => string;
  }
>;

interface Props
  extends Readonly<{
    handle?: string;
    appUrl?: string;
    isGuestRoute?: boolean;
  }> {}

export const RoutesProvider: React.FC<Props> = ({ isGuestRoute, handle, appUrl, children }) => {
  const history = useHistory();
  const location = useLocation();
  const buildPath = (route: string) => {
    if (isGuestRoute) {
      const routePath = route ? '/' + route : '';
      return `/${handle}/${appUrl}${routePath}`;
    } else if (handle) {
      const routePath = route ? '/' + route : '';
      return appUrl ? `/${handle}/edit/${appUrl}${routePath}` : `/${handle}/edit${routePath}`;
    } else {
      return appUrl ? `/${appUrl}${route ? '/' + route : ''}` : route ? '/' + route : '';
    }
  };
  const setScrollToTop = () =>
    withWindow(window => {
      window.scrollTo(0, 0);
    });

  const goToAdmin = () => {
    history.push({
      pathname: handle ? `/${handle}/edit` : '/'
    });
  };

  const goToMe = () => {
    history.push({
      pathname: '/account/dashboard/my-events'
    });
  };

  const goToAccountMeRoute = (route: string) => {
    history.push({
      pathname: `/account/${route}`
    });
  };

  const goToAccountVendorsRoute = (route: string) => {
    history.push({
      pathname: `/account/vendors/${route}`
    });
  };

  const goToAdminRoute = (route: string) => {
    history.push({
      pathname: handle ? buildPath(route) : '/'
    });
  };

  const goToVendorRoute = (route: string, options?: LocationDescriptorObject, navigationOpts?: NavigationOptions) => {
    if (navigationOpts?.scrollToTop) {
      setScrollToTop();
    }
    if (navigationOpts?.replace) {
      history.replace({
        pathname: `/vendor/${route}`,
        ...options
      });
      return;
    }
    history.push({
      pathname: `/vendor/${route}`,
      ...options
    });
  };

  const goToVendorsRoute = (route: string, options?: LocationDescriptorObject, navigationOpts?: NavigationOptions) => {
    if (navigationOpts?.scrollToTop) {
      setScrollToTop();
    }
    if (navigationOpts?.replace) {
      history.replace({
        pathname: `/vendors/${route}`,
        ...options
      });
      return;
    }
    history.push({
      pathname: `/vendors/${route}`,
      ...options
    });
  };

  const goToExactRoute = (route: string, queryParams?: string) => {
    history.push({
      pathname: route,
      search: queryParams ?? undefined
    });
  };

  return (
    <RoutesContext.Provider
      value={{
        isAdminRoute: !!handle && !isGuestRoute && location.pathname.startsWith(`/${handle}/edit`),
        location,
        buildPath,
        goToAdminRoute,
        goToExactRoute,
        goToVendorRoute,
        goToAccountMeRoute,
        goToAdmin,
        goToMe,
        goToVendorsRoute,
        setScrollToTop,
        goToAccountVendorsRoute
      }}
    >
      {children}
    </RoutesContext.Provider>
  );
};

export const withRoutesProvider = (options: Props, component: React.ReactNode) => {
  return <RoutesProvider {...options}>{component}</RoutesProvider>;
};
