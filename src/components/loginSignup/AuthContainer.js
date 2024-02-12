import React from "react";
import LoginBackGround from "../ui/BackGrounds/LoginBackGround";

const AuthContainer = ({ children }) => {
  return (
    <div className='flex justify-center items-center w-full md:h-screen  pt-28 md:pt-0 '>
      <LoginBackGround />
      <div className='md:relative '>{children}</div>
    </div>
  );
};

export default AuthContainer;
