import React, { useEffect, useState } from "react";
import { useAuth } from "../../lib/auth";
import { useAuthorization } from "../../lib/authorization";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Face3Icon from "@mui/icons-material/Face3";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { Divide as Hamburger } from "hamburger-react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import SettingsIcon from "@mui/icons-material/Settings";
type MenuItem = Required<MenuProps>["items"][number];

type MainLayoutProps = {
  children: React.ReactNode;
};

type NavBarItem = {
  name: string;
  to: string;
  icon: JSX.Element;
};

const NavBar = () => {
  // Accept collapsed prop
  const { checkAccess } = useAuthorization();
  const location = useLocation();

  const { user, logout } = useAuth();
  const navigation: NavBarItem[] = [
    checkAccess({ allowedRoles: ["TEACHER"] }) && {
      name: "الصفحة الشخصية",
      to: "/teacher-profile",
      icon: <Face3Icon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "الصفحة الرئيسية",
      to: "/dashboard",
      icon: <DashboardIcon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "تقرير الحضور",
      to: "/attendance",
      icon: <DocumentScannerIcon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "انواع الاجازات",
      to: "/holidays-types",
      icon: <AppRegistrationIcon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "أيام العطل",
      to: "/holidays",
      icon: <EventBusyIcon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "طلب اجازات",
      to: "/request-for-vacations",
      icon: <FormatListNumberedRtlIcon style={{ fontSize: 24 }} />,
    },
  ].filter(Boolean) as NavBarItem[];

  const handleLogout = () => {
    logout();
  };

  const navigate = useNavigate();
  const items: MenuItem[] = [
    {
      key: "sub1",
      label: (
        <div className="flex justify-start text-color2 text-sm font-tajawal items-center w-full h-full font-bold">
          <div className="flex justify-center items-center text-sm font-tajawal pt-1 pr-3 h-12">
            <SettingsIcon />
          </div>
          <div className="pr-6 flex justify-center items-center h-12">
            الاعدادات
          </div>
        </div>
      ),
      children: [
        {
          key: "1-1",
          label: (
            <div
              className="flex justify-center items-center w-full h-full text-lg text-color2"
              onClick={() => navigate("/")}>
              الملف الشخصي
            </div>
          ),
        },
        {
          key: "1-2",
          label: (
            <div
              className="flex justify-center items-center w-full h-full text-lg text-color2 "
              onClick={handleLogout}>
              تسجيل الخروج
            </div>
          ),
        },
      ],
    },
  ];
  return (
    <>
      <div className="h-screen flex flex-col justify-between">
        <div>
          <div className="flex items-center w-full justify-center py-6 pr-4">
            <Link
              to="/dashboard"
              className="flex items-center w-full justify-center cursor-pointer"
              style={{
                color: "inherit", // Inherit color from parent
              }}>
              <div className="flex justify-center items-center text-center text-lg text-color2 font-tajawal font-bold">
                <div className="">ثانوية نينوى للمتميزات</div>
              </div>
              <img
                className="w-16 h-auto my-3 ml-4"
                src={require("../../assets/Logo.png")}
                alt=""
              />
            </Link>
          </div>
          <div className="">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className=""
                style={{
                  color: "inherit", // Inherit color from parent
                }}>
                <div
                  className={`flex mt-2 justify-end items-center font-tajawal font-semibold ${
                    location.pathname === item.to ||
                    location.pathname.includes(`${item.to}/`)
                      ? "bg-color1-light text-color1"
                      : "hover:bg-white text-color2"
                  }`}
                  style={{ position: "relative", minHeight: "50px" }}>
                  <div className="flex justify-center items-center text-sm font-tajawal pt-1 pr-3 h-12">
                    {item.name}
                  </div>
                  <div className="pr-6 flex justify-center items-center h-12">
                    {item.icon}
                  </div>
                  {location.pathname === item.to ||
                  location.pathname.includes(`${item.to}/`) ? (
                    <div
                      className="h-full w-2 bg-color1"
                      style={{
                        position: "absolute",
                        right: "0",
                        top: "0",
                        bottom: "0",
                        marginLeft: "10px",
                      }}></div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-6">
          <Menu
            style={{ width: 256 }}
            mode="vertical"
            items={items}
            className="rtl-menu rounded-none no-blue-selection"
          />
        </div>
      </div>
    </>
  );
};
const MobileNavBar = () => {
  // Accept collapsed prop
  const { checkAccess } = useAuthorization();
  const location = useLocation();

  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  const navigation: NavBarItem[] = [
    checkAccess({ allowedRoles: ["TEACHER"] }) && {
      name: "الصفحة الشخصية",
      to: "/teacher-profile",
      icon: <Face3Icon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "الصفحة الرئيسية",
      to: "/dashboard",
      icon: <DashboardIcon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "تقرير الحضور",
      to: "/attendance",
      icon: <DocumentScannerIcon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "انواع الاجازات",
      to: "/holidays-types",
      icon: <AppRegistrationIcon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "أيام العطل",
      to: "/holidays",
      icon: <EventBusyIcon style={{ fontSize: 24 }} />,
    },
    checkAccess({ allowedRoles: ["ADMIN"] }) && {
      name: "طلب اجازات",
      to: "/request-for-vacations",
      icon: <FormatListNumberedRtlIcon style={{ fontSize: 24 }} />,
    },
  ].filter(Boolean) as NavBarItem[];
  const navigate = useNavigate();
  const items2: MenuItem[] = [
    {
      key: "sub1",
      label: (
        <div className="flex justify-start text-color2 text-sm font-tajawal items-center w-full h-full font-bold">
          <div className="flex justify-center items-center text-sm font-tajawal pt-1 pr-3 h-12">
            <SettingsIcon />
          </div>
          <div className="pr-6 flex justify-center items-center h-14 font-semibold text-base">
            الاعدادات
          </div>
        </div>
      ),
      children: [
        {
          key: "1-1",
          label: (
            <div
              className="flex justify-center items-center w-full h-full text-lg text-color2"
              onClick={() => navigate("/")}>
              الملف الشخصي
            </div>
          ),
        },
        {
          key: "1-2",
          label: (
            <div
              className="flex justify-center items-center w-full h-full text-lg text-color2 "
              onClick={handleLogout}>
              تسجيل الخروج
            </div>
          ),
        },
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col">
        <div>
          {" "}
          <div className="flex items-center w-full justify-center pt-6">
            <Link
              to="/dashboard"
              style={{
                color: "inherit", // Inherit color from parent
              }}>
              <div className="flex items-center w-full justify-center cursor-pointer p-4">
                <div className="flex items-center justify-center h-20 pr-4 text-color2 font-tajawal font-bold">
                  ثانوية نينوى للمتميزات
                </div>
                <div className="h-20 flex justify-center items-center">
                  <img
                    className="w-16 h-auto my-3"
                    src={require("../../assets/Logo.png")}
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="pt-4">
            {navigation.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className=""
                style={{
                  color: "inherit", // Inherit color from parent
                }}>
                <div
                  className={`flex mt-2 w-full justify-center items-center font-tajawal font-semibold ${
                    location.pathname === item.to ||
                    location.pathname.includes(`${item.to}/`)
                      ? "bg-color1-light text-color1"
                      : "hover:bg-white text-color2"
                  }`}
                  style={{ position: "relative", minHeight: "50px" }}>
                  {location.pathname === item.to ||
                  location.pathname.includes(`${item.to}/`) ? (
                    <div
                      className="h-full w-2 bg-color1"
                      style={{
                        position: "absolute",
                        right: "0",
                        top: "0",
                        bottom: "0",
                        marginLeft: "10px",
                      }}></div>
                  ) : (
                    ""
                  )}
                  <div className="w-full flex justify-end pr-32">
                    <div className="flex justify-center items-center font-tajawal pt-1 h-12">
                      {item.name}
                    </div>
                    <div className="pl-6 flex justify-center items-center h-12">
                      {item.icon}
                    </div>
                  </div>
                  {location.pathname === item.to ||
                  location.pathname.includes(`${item.to}/`) ? (
                    <div
                      className="h-full w-2 bg-color1"
                      style={{
                        position: "absolute",
                        right: "98%",
                        top: "0",
                        bottom: "0",
                        marginLeft: "10px",
                      }}></div>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="py-6 w-full flex justify-center">
          <Menu
            style={{ width: "100%" }}
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            items={items2}
            className="rtl-menu pr-24 rounded-none no-blue-selection"
          />
        </div>
      </div>
    </>
  );
};
export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isOpen, setOpen] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 639) {
        setOpen(false);
        setCollapsed(false);
      } else {
        setOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="h-screen bg-fill snap-none overflow-hidden flex w-full">
      {/* Content section */}
      <div className="flex flex-col overflow-y-auto w-full">
        {isOpen && (
          <div
            className="flex sm:hidden justify-end items-center p-2 bg-white w-full"
            onClick={() => setCollapsed(!collapsed)}>
            <Hamburger
              color="#29667E"
              size={20}
              toggled={collapsed}
              toggle={setCollapsed}
            />
          </div>
        )}

        {isOpen && collapsed && (
          <div className="w-full">
            <div className="bg-white">
              <MobileNavBar />
            </div>
          </div>
        )}

        {children}
      </div>
      <div className="w-72 bg-white sm:block hidden">
        <NavBar />
      </div>
    </div>
  );
};
