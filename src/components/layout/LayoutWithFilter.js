import React from "react";
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import FilterSection from "../filters/FilterSection";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const LayoutWithFilter = ({ children }) => {
  return (
    <>
      <MainNavbar />
      <div className='flex justify-between bg-[#F3F4F6] min-h-screen'>
        <FilterSection />
        {children}
      </div>

      <MainFooter />
      <MobileNavbar />
    </>
  );
};

export default LayoutWithFilter;
