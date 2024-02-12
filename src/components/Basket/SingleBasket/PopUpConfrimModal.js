import React from "react";

const PopUpConfrimModal = ({ onClick }) => {
  return (
    <div className="absolute top-0 bg-gray-600/50 h-screen w-full z-50 flex justify-center items-center px-4">
      <div className="bg-white flex flex-col justify-center items-center  p-4 rounded-lg">
        <h1 className="text-base font-normal text-regalBlue">
          سفارش شما با موفقیت ثبت شد
        </h1>
        <p className="text-xs font-medium text-gray-500 mx-10 text-center">
          برای مشاهده جزئیات و وضعیت سفارش خود به صفحه سفارشات مراجعه کنید
        </p>
        <hr className="bg-gray-200 w-full my-3" />
        <button
          onClick={onClick}
          className="text-sm font-bold text-white bg-green-500 w-full py-2.5 rounded-lg"
        >
          رفتن به صفحه سفارشات
        </button>
      </div>
    </div>
  );
};

export default PopUpConfrimModal;
