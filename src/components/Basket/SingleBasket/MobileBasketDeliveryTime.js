import React, { useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import FactorCard from "../SingleBasket/FactorCard";

const MobileBasketDeliveryTime = ({
  pickupTimes,
  isSuccess,
  BackStepHandler,
  NextStepHandler,
  selectDay,
  setSelectDay,
  data,
}) => {
  const dateFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "2-digit",
    day: "2-digit",
  });

  const pickedDate = selectDay && new Date(selectDay);

  return (
    <>
      <div className="bg-white m-4 p-4  rounded-lg">
        <h1 className="text-sm">زمان تحویل سفارش</h1>
        <div className="border-t-[1px] mt-3">
          <Swiper spaceBetween={50} slidesPerView={5}>
            {pickupTimes?.map((item, i) => {
              const day = new Date(item[0]);
              return (
                <SwiperSlide key={item[0]}>
                  <div
                    key={i}
                    onClick={() => setSelectDay(item[0])}
                    className="cursor-pointer text-[10px] flex flex-col justify-center items-center"
                  >
                    <div
                      className={` h-1 w-8 rounded-b ${
                        selectDay === item && "bg-teal-400"
                      }`}
                    />

                    <div className="flex flex-col gap-1 justify-center items-center">
                      <h4
                        className={` font-bold ${
                          selectDay === item && "text-teal-400"
                        }`}
                      >
                        {item[1]}
                      </h4>
                      <h4
                        className={` font-normal ${
                          selectDay === item && "text-teal-400"
                        }`}
                      >
                        {dateFormatter?.format(day)}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      {pickedDate && (
        <div className="flex gap-1 text-gray-700 text-xs mt-4 mx-4">
          <h5>زمان انتخاب شده :</h5>
          <h5 className="text-gray-500">{dateFormatter.format(pickedDate)}</h5>
        </div>
      )}
      <div className="mt-5  flex gap-2  items-start justify-start  mx-4">
        <ExclamationCircleIcon className="h-5 w-5 text-gray-700  " />
        <span className="text-gray-700 text-sm font-bold ">
          محصول تا ۳ روز کاری بعد از زمان مشخص شده به مقصد میرسد
        </span>
      </div>
      <FactorCard total={data?.total_price} itemList={data?.lines} />
      <div className="bg-white h-[60px] w-full max-w-[440px] flex justify-evenly items-center fixed bottom-0  mt-2">
        <button
          className="bg-red-600 w-40 h-11 rounded-lg text-white"
          onClick={BackStepHandler}
        >
          قبلی
        </button>
        <button
          disabled={!pickedDate}
          className="bg-green-600 w-40 h-11 rounded-lg text-white"
          onClick={NextStepHandler}
        >
          تایید
        </button>
      </div>
    </>
  );
};

export default MobileBasketDeliveryTime;
