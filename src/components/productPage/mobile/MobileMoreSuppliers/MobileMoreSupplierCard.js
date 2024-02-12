import React from "react";
import Image from "next/image";
import useRialStyle from "@/hooks/useRialStyle";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useEffect } from "react";

const MobileMoreSupplierCard = ({ item, basket, submitOrder }) => {
  console.log(item);
  // const [inputValue, setInputValue] = useState(0);
  // const [startBuy, setStartBuy] = useState(false);

  // const increase = () => {
  //   setStartBuy(true);
  //   setInputValue(inputValue + 1);
  // };
  // const decrease = () => {
  //   setInputValue(inputValue - 1);
  // };

  // const basketItem = () => {
  //   const list = [];
  //   const data = list.filter((elem) => elem?.item === item.id);
  //   if (data[0]?.quantity) {
  //     setInputValue(data[0]?.quantity);
  //     setStartBuy(true);
  //   }
  // };

  // useEffect(() => {
  //   basketItem();
  // }, []);

  // useEffect(() => {
  //   if (startBuy) {
  //     if (inputValue > 0) {
  //       const timeoutId = setTimeout(() => {
  //         submitOrder.mutate({
  //           itemId: item?.id,
  //           quan: inputValue,
  //           shopId: item?.shop?.id,
  //         });
  //       }, 1000);
  //       return () => clearTimeout(timeoutId);
  //     }
  //   }
  //   basketItem();
  // }, [inputValue]);

  //
  return (
    <div
      className="bg-white shadow-md flex flex-col gap-2  rounded-lg  overflow-hidden mt-2 border-2  active:border-teal-400 
      transition-all duration-300 "
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-4 px-4 pt-4  ">
          <div className="relative">
            <Image
              width={64}
              height={64}
              src={item?.shop_logo[0]}
              className="border-2 border-navy rounded-md w-16 h-16 "
              alt={item?.shop_title}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-sm font-bold text-gray-700">
              {item?.shop_title}
            </h1>
            <div className="flex gap-1 items-center text-gray-700 ">
              <h4 className="font-bold text-base ">
                {useRialStyle(item?.shop_product_price)}
              </h4>
              <span className="font-normal text-[10px] ">تومان</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <p className="bg-teal-400 px-3 py-1 text-[10px] font-medium text-white ">
            فروشگاه
          </p>
        </div>
      </div>
      <span className="text-[10px] font-medium text-gray-500 flex items-center gap-1 p-4 pt-0 ">
        <MapPinIcon className="h-5 w-5 text-red-600" />
        {item?.shop_address[0]}
      </span>
    </div>
  );
};

export default MobileMoreSupplierCard;
