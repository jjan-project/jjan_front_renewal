import { ReactNode } from "react";

type Route = {
  path: string;
  element: ReactNode;
  isPublic: boolean;
};

type AuthRoute = {
  isAuthenticated: boolean;
  link: string;
  children: ReactNode;
};

type Routes = Array<Route>;

export type { Route, AuthRoute, Routes };
