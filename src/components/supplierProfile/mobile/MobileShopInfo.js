import React from "react";
import dynamic from "next/dynamic";
const MyAwesomeMap = dynamic(() => import("../../littleMap/LittleMap"), {
  ssr: false,
});
import { XMarkIcon } from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { ClockIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MobileShopInfo = ({ shopData, setShowInfo }) => {
  const [open, isOpen] = useState(false);
  const closeHandler = () => {
    setShowInfo(false);
  };

  return (
    <div className='z-50 md:hidden fixed top-0  min-h-screen w-full bg-gray-100 '>
      <div className='flex items-center justify-between w-full bg-white h-16 px-7 shadow-lg mb-[1px] '>
        <button onClick={closeHandler}>
          <XMarkIcon className='h-6 w-6 text-gray-500' />
        </button>
        <h1 className='ml-4'>اطلاعات فروشگاه</h1>
        <div />
      </div>
      <div className='bg-white flex justify-between px-6 py-4 rounded-lg'>
        <div>
          <h1 className='text-sm font-bold text-navy'>{shopData?.title}</h1>
          <div className='flex items-center gap-2 mt-2'>
            <MapPinIcon className='h-6 w-6 text-red-600' />
            <span className='text-sm font-normal text-gray-700'>
              {shopData?.primary_address}
            </span>
          </div>
        </div>
        <div className='w-24 h-24 overflow-hidden rounded-lg border-2 border-gray-300 '>
          <MyAwesomeMap />
        </div>
      </div>
      <div className='bg-white p-3 mt-2 flex items-center gap-2.5 rounded-lg '>
        <PhoneIcon className='h-5 w-5 text-teal-400' />
        <h1>021-23456789</h1>
      </div>
      <div className={`bg-white  rounded-lg transition-all duration-300`}>
        <div
          onClick={() => isOpen(!open)}
          className=' p-3 mt-2 flex items-center justify-between '
        >
          <div className='flex items-center gap-2.5 '>
            <ClockIcon className='h-5 w-5 text-teal-400' />
            <h1 className='text-xs'>امروز از ساعت 8:00 الی 23:59</h1>
          </div>
          <ChevronDownIcon className='h-6 w-6 text-gray-500' />
        </div>

        <div
          className={`w-1/2 flex flex-col gap-2  overflow-hidden transition-all duration-300 mr-4 ${
            open ? "h-44" : "h-0"
          } `}
        >
          {DYMMY_DATA.map((item, i) => {
            return (
              <div
                className='flex justify-between text-xs text-gray-700 '
                key={item.day}
              >
                <h1 className=' w-full flex justify-end ml-6 font-bold'>
                  {item.day}
                </h1>
                <div className='flex gap-2'>
                  <h3>{item.start}</h3>
                  <h3>الی</h3>
                  <h3>{item.end}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileShopInfo;

const DYMMY_DATA = [
  { day: "شنبه", start: "8:00", end: "23:59" },
  { day: "یکشنبه", start: "8:00", end: "23:59" },
  { day: "دو شنبه", start: "8:00", end: "23:59" },
  { day: "سه شنبه", start: "8:00", end: "23:59" },
  { day: "چهار شنبه", start: "8:00", end: "23:59" },
  { day: "پنجشنبه", start: "8:00", end: "23:59" },
  { day: "جمعه", start: "8:00", end: "23:59" },
];
