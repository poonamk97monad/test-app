import { useHistory, useLocation } from "react-router-dom";
import qs from "query-string";
import { Mode, Provider } from "./types";
import { History, Location } from "history";
import { withWindow } from "@shared/utils/withWindow";
import { config } from "src/static/js/env.config";

type LocationArg = Location<History.LocationState>;
interface Args
  extends Readonly<{
    mode: Mode;
    providers: Array<Provider>;
    location: LocationArg;
  }> {}

const calcLocationObj = ({ mode, providers, location }: Args) => ({
  pathname: "/account",
  search: qs.stringify({
    mode: mode,
    provider: providers,
    prev: `${location.pathname}${location.search ? `?${location.search}` : ""}${
      location.hash ? `#${location.hash}` : ""
    }`,
  }),
});

const reloadWithLocation = ({
  pathname,
  search,
}: Readonly<{ pathname: string; search: string }>) =>
  withWindow(
    (window) =>
      (window.location.href = new URL(
        `${pathname}?${search}`,
        config.clientUri
      ).href)
  );

export const useAccountRouteHelper = () => {
  const location = useLocation();
  const history = useHistory();
  // generate the sign-in/up link that will take you back to the page you're on
  const signInAndReturnToCurrentPath = (
    providers: Array<Provider>,
    reload?: boolean
  ) => {
    const locationInfo = calcLocationObj({
      mode: "signin",
      providers,
      location,
    });
    if (reload === true) {
      return reloadWithLocation(locationInfo);
    }
    history.push(locationInfo);
  };
  const signUpAndReturnToCurrentPath = (
    providers: Array<Provider>,
    reload?: boolean
  ) => {
    const locationInfo = calcLocationObj({
      mode: "signup",
      providers,
      location,
    });
    if (reload === true) {
      return reloadWithLocation(locationInfo);
    }
    history.push(locationInfo);
  };
  const signUpAndGoToPath = (
    providers: Array<Provider>,
    intendedLocation: LocationArg,
    reload?: boolean
  ) => {
    const locationInfo = calcLocationObj({
      mode: "signup",
      providers,
      location: intendedLocation,
    });
    if (reload === true) {
      return reloadWithLocation(locationInfo);
    }
    history.push(locationInfo);
  };
  const signInAndGoToPath = (
    providers: Array<Provider>,
    intendedLocation: LocationArg,
    reload?: boolean
  ) => {
    const locationInfo = calcLocationObj({
      mode: "signin",
      providers,
      location: intendedLocation,
    });
    if (reload === true) {
      return reloadWithLocation(locationInfo);
    }
    history.push(locationInfo);
  };
  return {
    signInAndReturnToCurrentPath,
    signUpAndReturnToCurrentPath,
    signInAndGoToPath,
    signUpAndGoToPath,
  };
};
