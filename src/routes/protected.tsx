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

export const protectedTeacherRoutes = [
  {
    path: "/profile",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة الشخصية</div> }],
  },
  {
    path: "*", // Redirect all other routes to the dashboard
    element: <Navigate to="/profile" />,
  },
];

export const protectedAdminRoutes = [
  {
    path: "/teachers/*",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة الرئيسية</div> }],
  },
  {
    path: "/attendance/*",
    element: <App />,
    children: [{ path: "*", element: <div>تقرير الحضور</div> }],
  },
  {
    path: "/holidays-types/*",
    element: <App />,
    children: [{ path: "*", element: <div>انواع الاجازات</div> }],
  },
  {
    path: "/holidays/*",
    element: <App />,
    children: [{ path: "*", element: <div>أيام العطل</div> }],
  },
  {
    path: "/request-for-vacations/*",
    element: <App />,
    children: [{ path: "*", element: <div>طلب اجازات</div> }],
  },
  {
    path: "/profile/*",
    element: <App />,
    children: [{ path: "*", element: <div>الصفحة الشخصية</div> }],
  },
  {
    path: "*", // Redirect all other routes to the dashboard
    element: <Navigate to="/teachers" />,
  },
];
