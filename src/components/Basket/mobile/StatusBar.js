import React from "react";

const StatusBar = ({ status }) => {
  return (
    <div className="min-h-[5.688rem] w-full bg-gray-50 flex flex-col py-6 border-b-2 sticky top-0">
      <div className="flex items-center m-auto w-full px-10 ">
        <div
          className={` w-[66px] h-3.5 rounded-full outline  outline-3 
           ${
             status === 0
               ? "outline-dashed outline-navy outline-3  animate-spin-slow bg-teal-400 "
               : status < 0
               ? "outline-gray-300 bg-gray-100"
               : "bg-teal-400"
           }`}
        />

        <div
          className={`w-full h-1  ${status >= 2 ? "bg-navy" : "bg-gray-300"}`}
        />
        <div
          className={` w-[66px] h-3.5 rounded-full outline  outline-3  
          ${
            status === 2
              ? " outline-dashed outline-navy outline-3  animate-spin-slow bg-teal-400 "
              : status < 2
              ? "outline-gray-300 bg-gray-100"
              : "bg-teal-400"
          }
          `}
        />
        <div
          className={`w-full h-1  ${status >= 3 ? "bg-navy" : "bg-gray-300"}`}
        />
        <div
          className={` w-[66px] h-3.5 rounded-full outline  outline-3 
          ${
            status === 3
              ? "outline-dashed outline-navy outline-3  animate-spin-slow  bg-teal-400"
              : status < 3
              ? "outline-gray-300 bg-gray-100"
              : "bg-teal-400"
          }`}
        />
        <div
          className={`w-full h-1  ${status >= 4 ? "bg-navy" : "bg-gray-300"}`}
        />
        <div
          className={` w-[66px] h-3.5 rounded-full outline  outline-3 
          ${
            status === 4
              ? "outline-dashed outline-navy outline-3  animate-spin-slow  bg-teal-400"
              : status < 4
              ? "outline-gray-300 bg-gray-100"
              : "bg-teal-400"
          }`}
        />
        <div
          className={`w-full h-1  ${status == 5 ? "bg-navy" : "bg-gray-300"}`}
        />
        <div
          className={` w-[66px] h-3.5 rounded-full outline  outline-3 
           ${
             status === 5
               ? "outline-dashed outline-navy outline-3  animate-spin-slow bg-teal-400 "
               : status < 5
               ? "outline-gray-300 bg-gray-100"
               : "bg-teal-400"
           }`}
        />
      </div>
      <div className="flex items-center justify-between  text-[0.625rem] font-medium text-gray-400 w-full m-auto px-2">
        <p className={` w-full text-center ${status > 0 && "text-navy"}`}>
          ایجاد سبد خرید
        </p>

        <p className={` w-full  text-center ${status > 1 && "text-navy"}`}>
          لیست سفارش
        </p>
        <p className={` w-full  text-center ${status > 2 && "text-navy"}`}>
          محل تحویل
        </p>
        <p className={` w-full  text-center ${status > 2 && "text-navy"}`}>
          زمان تحویل
        </p>
        <p className={` w-full  text-center ${status > 2 && "text-navy"}`}>
          پرداخت
        </p>
      </div>
    </div>
  );
};

export default StatusBar;
