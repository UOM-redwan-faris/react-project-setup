import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
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
    path: "*", // Redirect all other routes to the dashboard
    element: <Navigate to="/dashboard" />,
  },
];
