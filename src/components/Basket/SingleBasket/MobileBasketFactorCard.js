import useRialStyle from "@/hooks/useRialStyle";
import React from "react";

const MobileBasketFactorCard = ({ price, listItem }) => {
  return (
    <div className="bg-white m-4 p-4 shadow-md rounded-lg">
      {listItem?.map((item, i) => {
        return (
          <div
            key={item?.id}
            className="flex gap-1 items-center text-xs text-gray-600 border-b-[1px] pb-3"
          >
            <h3>{item?.product?.title}</h3>
            <span className="text-red-600">x</span>
            <h3>{item?.quantity} (کیلوگرم)</h3>
          </div>
        );
      })}
      <div className="text-xs font-normal text-gray-700 flex flex-col gap-3 py-3 border-b-[1px] ">
        <div className="flex justify-between items-center">
          <h2>مجموع</h2>
          <span>{useRialStyle(price)} تومان</span>
        </div>
        <div className="flex justify-between items-center">
          <h2>هزینه ارسال</h2>
          <span>0 تومان</span>
        </div>
        <div className="flex justify-between items-center">
          <h2>مالیات</h2>
          <span>0 تومان</span>
        </div>
        <div className="flex justify-between items-center text-teal-400">
          <h2>یارانه</h2>
          <span>{useRialStyle(price)} تومان</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center text-green-400 text-xs font-bold mt-3 ">
          <h2>جمع کل </h2>
          <span>{useRialStyle(price)} تومان</span>
        </div>
      </div>
    </div>
  );
};

export default MobileBasketFactorCard;
