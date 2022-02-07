import React from 'react';
import { Location, LocationDescriptorObject } from 'history';

export interface NavigationOptions
  extends Readonly<{
    scrollToTop?: boolean;
    replace?: boolean;
  }> {}
interface RoutesContextProps
  extends Readonly<{
    isAdminRoute: boolean;
    location: Location;
    buildPath: (route: string) => string;
    goToAdmin: () => void;
    goToMe: () => void;
    setScrollToTop: () => void;
    goToAccountMeRoute: (route: string) => void;
    goToAdminRoute: (route: string) => void;
    goToAccountVendorsRoute: (route: string) => void;
    goToExactRoute: (route: string, queryParams?: string) => void;
    goToVendorRoute: (route: string, options?: LocationDescriptorObject, navigationOpts?: NavigationOptions) => void;
    goToVendorsRoute: (route: string, options?: LocationDescriptorObject, navigationOpts?: NavigationOptions) => void;
  }> {}

export const RoutesContext = React.createContext<RoutesContextProps | undefined>(undefined);
