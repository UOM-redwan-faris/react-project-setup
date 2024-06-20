import * as React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="h-screen flex justify-end w-full">
        <div className="h-screen bg-color4 flex flex-col relative w-full">
          {/* Logo at the top right with padding */}
          <div className="absolute top-11 right-11 sm:hidden block">
            <img
              className="w-32 h-32"
              src={require("../../../assets/Logo.png")}
              alt="Logo"
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full flex flex-col justify-end pr-40 items-end">
              <div className="font-inter font-bold">تسجيل الدخول</div>
              {children}
            </div>
          </div>
        </div>
        <div
          className="sm:flex hidden justify-center items-center w-full"
          style={{
            backgroundImage: `url(${require("../../../assets/gradient.jpeg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <img
            className="w-64 h-auto"
            src={require("../../../assets/Logo.png")}
            alt="Logo"
          />
        </div>
      </div>
    </>
  );
};
