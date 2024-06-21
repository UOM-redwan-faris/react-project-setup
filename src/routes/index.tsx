import { useRoutes, RouteObject } from "react-router-dom";
import { Loading } from "../components/elements/loading";
import { useAuth } from "../lib/auth";
import { publicRoutes } from "./public";
import {
  protectedUserRole1Routes,
  protectedUserRole2Routes,
} from "./protected";

export const AppRoutes = () => {
  const { user, isLoading } = useAuth();

  let routes: RouteObject[] = [];

  if (!isLoading) {
    console.log(user);

    switch (user?.role) {
      case "userRole1":
        routes = protectedUserRole1Routes;
        break;
      case "userRole2":
        routes = protectedUserRole2Routes;
        break;
      default:
        routes = publicRoutes;
    } // case for the router of the user base on the role
  }
  // console.log(routes);

  const commonRoutes = [{ path: "*", element: <Loading /> }];

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
