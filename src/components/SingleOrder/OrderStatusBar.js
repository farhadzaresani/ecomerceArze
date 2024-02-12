import React from "react";

const OrderStatusBar = ({ status }) => {
  return (
    <div className="min-h-[5.688rem]  bg-white flex flex-col py-2 ">
      <div className="flex items-center justify-center gap-7  text-[0.625rem] font-medium text-gray-400 w-full m-auto px-2">
        <p className={`  text-center ${status > 0 && "text-navy"}`}>
          درخواست پیک
        </p>

        <p className={`   text-center ${status > 1 && "text-navy"}`}>
          در حال بارگیری
        </p>
        <p className={`   text-center ${status > 3 && "text-navy"}`}>
          پیک در راه
        </p>
        <p className={`   text-center ${status > 4 && "text-navy"}`}>
          در حال تخلیه بار
        </p>
      </div>
      <div className="flex items-center m-auto w-full px-4 ">
        <div
          className={` w-16 h-3.5 rounded-full outline  outline-3 
           ${
             status == 0
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
          className={` w-16 h-3.5 rounded-full outline  outline-3  
          ${
            status == 2
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
          className={` w-16 h-3.5 rounded-full outline  outline-3 
          ${
            status == 3
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
          className={` w-16 h-3.5 rounded-full outline  outline-3 
          ${
            status == 4
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
          className={` w-16 h-3.5 rounded-full outline  outline-3 
           ${
             status == 5
               ? "outline-dashed outline-navy outline-3  animate-spin-slow bg-teal-400 "
               : status < 5
               ? "outline-gray-300 bg-gray-100"
               : "bg-teal-400"
           }`}
        />
      </div>
      <div className="flex items-center justify-between  text-[0.625rem] font-medium text-gray-400 w-full m-auto ">
        <p className={` w-full text-center ${status > 0 && "text-navy"}`}>
          ثبت شده
        </p>

        <p className={` w-full  text-center ${status > 1 && "text-navy"}`}>
          پیک در فروشگاه
        </p>
        <p className={` w-full  text-center ${status > 3 && "text-navy"}`}>
          اتمام بارگیری
        </p>
        <p className={` w-full  text-center ${status > 4 && "text-navy"}`}>
          پیک در مقصد
        </p>
        <p className={` w-full  text-center ${status > 5 && "text-navy"}`}>
          سفارش تحویل داده شد
        </p>
      </div>
    </div>
  );
};

export default OrderStatusBar;
