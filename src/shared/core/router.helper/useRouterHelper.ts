import { useContext } from "react";
import type { RouteComponentProps } from "@react-router";
import { RoutesContext } from "./RoutesContext";

export interface RoutePath<T>
  extends Readonly<{
    path: string;
    exact?: boolean;
    requiredAuth?: boolean;
    component: (args: RouteComponentProps<T>) => JSX.Element | null;
  }> {}

export const useRouterHelper = () => {
  const context = useContext(RoutesContext);
  if (context === undefined) {
    throw new Error("Routes context not defined");
  }
  return context;
};
