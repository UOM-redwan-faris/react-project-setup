import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MainLayout } from "../components/elements/MainLayout";

const App = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export const protectedTeacherRoutes = [
  {
    path: "*", // Redirect all other routes to the dashboard
    element: <Navigate to="/dashboard" />,
  },
];

export const protectedAdminRoutes = [
  {
    path: "/dashboard/*",
    element: <App />,
    children: [{ path: "*", element: <div>dashboard</div> }],
  },
  {
    path: "*", // Redirect all other routes to the dashboard
    element: <Navigate to="/dashboard" />,
  },
];
