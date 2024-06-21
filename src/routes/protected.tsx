import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainLayout } from "../components/Layout/MainLayout";

const App = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export const protectedUserRole1Routes = [
  {
    path: "/page-1",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة 1</div> }],
  },
  {
    path: "*", // Redirect all other routes to the dashboard
    element: <Navigate to="/page-1" />,
  },
];

export const protectedUserRole2Routes = [
  {
    path: "/page-2/*",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة 2</div> }],
  },
  {
    path: "/page-3/*",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة 3</div> }],
  },
  {
    path: "/page-4/*",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة 4</div> }],
  },
  {
    path: "/page-5/*",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة 5</div> }],
  },
  {
    path: "/page-6/*",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة 6</div> }],
  },
  {
    path: "/page-1/*",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة 1</div> }],
  },
  {
    path: "*", // Redirect all other routes to the dashboard
    element: <Navigate to="/page-2" />,
  },
];
