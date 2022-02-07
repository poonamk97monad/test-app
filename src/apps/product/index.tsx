import React from "react";
import { RouterProfile, RoutesNames } from "./route.paths";

interface Props {
  appUrl: RoutesNames;
}

export const ProductApp: React.FC<Props> = ({ appUrl }) => {
  return <RouterProfile appUrl={appUrl} />;
};

export default ProductApp;
