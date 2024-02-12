import React from "react";
import MainLogo from "../icons/layout/MainLogo";
import MainName from "../icons/layout/MainName";
import LoadingDots from "./LoadingDots";

const Loading = ({ isLoading }) => {
  return (
    <>
      <div className=' w-full h-screen z-20 top-0 fixed left-0 bg-white md:bg-black/50 flex justify-center items-center'>
        <div className='flex flex-col gap-2 justify-center items-center bg-white w-[180px] h-[180px] rounded-3xl '>
          <MainLogo />
          {/* <MainName /> */}
          <LoadingDots />
        </div>
      </div>
    </>
  );
};

export default Loading;
