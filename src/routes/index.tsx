import { useRoutes, RouteObject } from "react-router-dom";
import { Loading } from "../components/elements/loading";
import { useAuth } from "../lib/auth";
import { publicRoutes } from "./public";
import { protectedAdminRoutes, protectedTeacherRoutes } from "./protected";

export const AppRoutes = () => {
  const { user, isLoading } = useAuth();

  let routes: RouteObject[] = [];

  if (!isLoading) {
    console.log(user);

    switch (user?.role) {
      case "admin":
        routes = protectedAdminRoutes;
        break;
      case "teacher":
        routes = protectedTeacherRoutes;
        break;
      default:
        routes = publicRoutes;
    }
  }
  // console.log(routes);

  const commonRoutes = [{ path: "*", element: <Loading /> }];

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
