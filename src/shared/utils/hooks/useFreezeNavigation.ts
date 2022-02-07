import { useHistory, useLocation } from 'react-router-dom';
import { withWindow } from '@shared/utils/withWindow';
import { Location } from 'history';
import { useEffect, useState } from 'react';

type FreezeState = {
  freeze: boolean;
};

// use freeze navigation's location for the <Switch /> you want to conditionally freeze navigation in
export const useFreezeNavigation = () => {
  const history = useHistory();
  const location = useLocation<FreezeState>();
  console.log("location", location)
  const [previousLocation, setPreviousLocation] = useState<Location<FreezeState>>(location);
  useEffect(() => {
    if (location.state?.freeze && !previousLocation) {
      // if the route soft-reloads, don't render the freeze
      // to test this locally, save a blank line with freeze open
      return;
    }
    if (location.state?.freeze) {
      withWindow(window => window.history.replaceState(null, ''));
    }
  }, [location, history, previousLocation]);

  useEffect(() => {
    if (!location.state?.freeze) {
      setPreviousLocation(location);
    }
  }, [location]);

  return {
    location: previousLocation
  };
};
