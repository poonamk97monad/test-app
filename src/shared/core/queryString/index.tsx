import qs from "query-string";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Location as HistoryLocation } from "history";

type QueryStringMap = { [key: string]: string | ReadonlyArray<string> | null };

const mapAsLowercaseKeys = (
  parsedQueryString: QueryStringMap
): QueryStringMap => {
  const map: QueryStringMap = {};
  Object.keys(parsedQueryString).forEach((key) => {
    const value = parsedQueryString[key];
    map[key] = value;
    map[key.toLowerCase()] = value;
  });
  return map;
};

const valueGetterForMap =
  (map: QueryStringMap) =>
  (key: string): string | ReadonlyArray<string> | undefined => {
    const retVal = map[key.toLowerCase()];
    return retVal as string;
  };

const valueArrayGetterForMap =
  (map: QueryStringMap) =>
  (key: string): ReadonlyArray<string> | undefined => {
    const retVal = map[key.toLowerCase()];
    return typeof retVal === "string" ? [retVal] : retVal || undefined;
  };

const valueStringGetterForMap =
  (map: QueryStringMap) =>
  (key: string): string | undefined => {
    const retVal = map[key.toLowerCase()];
    return typeof retVal === "string"
      ? retVal
      : retVal
      ? retVal?.join(",")
      : undefined;
  };

export const deriveQueryStringHelpersFromLocation = (
  location: Location | HistoryLocation
) => {
  const parsedQueryString = qs.parse(location?.search || "");
  const mapIncludingLowerCaseKeys = mapAsLowercaseKeys(parsedQueryString);

  return {
    /**
     * Fetches the value of a key in a case insensitive manner.
     * Converts any array values into comma separated strings.
     */
    getValue: valueGetterForMap(mapIncludingLowerCaseKeys),
    getValueArray: valueArrayGetterForMap(mapIncludingLowerCaseKeys),
    getValueString: valueStringGetterForMap(mapIncludingLowerCaseKeys),
  };
};

export function useQueryParamHelper() {
  // update map whenever location updates
  const location = useLocation();

  return useMemo(
    () => deriveQueryStringHelpersFromLocation(location),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location]
  );
}

export { qs };

// for client diagnostics and useTranslation, it's important to use
// global window's location and not useLocation's location from react-router
const parsedQueryString = qs.parse(window.location?.search || "");
const mapIncludingLowerCaseKeys = mapAsLowercaseKeys(parsedQueryString);

export default {
  getValue: valueGetterForMap(mapIncludingLowerCaseKeys),
  getValueArray: valueArrayGetterForMap(mapIncludingLowerCaseKeys),
  getValueString: valueStringGetterForMap(mapIncludingLowerCaseKeys),
};
