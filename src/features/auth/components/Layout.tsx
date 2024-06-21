import * as React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="h-screen flex justify-end w-full">
        <div className="h-screen bg-color4 flex flex-col relative w-full">
          <div className="w-full absolute sm:hidden right-0 flex justify-end p-10">
            {/* <img
              className="w-32 h-32"
              src={require("../../../assets/Logo.png")}
              alt="Logo"
            /> */}
            logo here
          </div>

          <div className="flex justify-center items-center flex-col h-full">
            {children}
          </div>
        </div>
        {/* <div
          className="sm:flex hidden justify-center items-center w-full"
          style={{
            backgroundImage: `url(${require("../../../assets/gradient.jpeg")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}> */}
        some style here
        {/* <img
            className="w-64 h-auto"
            src={require("../../../assets/Logo.png")}
            alt="Logo"
          /> */}{" "}
        logo here
        {/* </div> */}
      </div>
    </>
  );
};
