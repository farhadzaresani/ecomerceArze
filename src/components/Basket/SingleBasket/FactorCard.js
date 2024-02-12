import useRialStyle from "@/hooks/useRialStyle";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const FactorCard = ({ total, itemList, itemData }) => {
  console.log(itemData);
  return (
    <div className="mt-8 border  m-auto mx-4 p-3 rounded-md flex flex-col gap-3">
      {itemList.map((item) => {
        return (
          <div
            key={item?.key}
            className="flex text-xs font-normal justify-between"
          >
            <div className="flex items-start justify-between gap-4 w-full">
              <label className="w-2/3">{item?.product?.title}</label>
              <span className="flex justify-center items-center">
                <XMarkIcon className="w-3 h-3 text-red-600" />
                {item?.quantity}
              </span>
            </div>
            <p className="w-full flex justify-end">
              {useRialStyle(item?.total_price)} تومان
            </p>
          </div>
        );
      })}
      <div className="flex text-xs font-normal justify-between">
        <div className="flex gap-4">
          <label>هزینه ارسال</label>
        </div>
        <p>{useRialStyle(10000)} تومان</p>
      </div>
      <div className="flex text-xs font-normal justify-between">
        <div className="flex gap-4">
          <label>بارگیری</label>
        </div>
        <p>{useRialStyle(itemData?.loading_off_fee)} تومان</p>
      </div>
      <div className="flex text-xs font-normal justify-between">
        <div className="flex gap-4">
          <label>تخلیه بار</label>
        </div>
        <p>{useRialStyle(itemData?.loading_on_fee)} تومان</p>
      </div>
      <div className="flex text-xs font-normal justify-between text-teal-400">
        <div className="flex gap-4">
          <label>تخفیف</label>
        </div>
        <p>{useRialStyle(0)} تومان</p>
      </div>
      <div className="flex text-xs font-normal justify-between text-green-400 border-t pt-4 pb-2">
        <div className="flex gap-4">
          <label>قابل پرداخت</label>
        </div>
        <p>{useRialStyle(total)} تومان</p>
      </div>
    </div>
  );
};

export default FactorCard;
