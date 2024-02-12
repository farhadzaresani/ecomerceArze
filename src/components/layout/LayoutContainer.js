import React, { Fragment } from "react";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import { useRouter } from "next/router";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const LayoutContainer = ({ children }) => {
  const location = useRouter();

  return (
    <Fragment>
      <div>
        <MainNavbar route={location.pathname.includes("auth")} />
        <div
          className={` md:py-0 flex flex-col m
        `}
        >
          {children}
        </div>
        <MainFooter route={location.pathname.includes("auth")} />
        <MobileNavbar />
      </div>
    </Fragment>
  );
};

export default LayoutContainer;
