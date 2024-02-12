import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/outline";

const EmptyInput = () => {
  return (
    <div
      className={`bg-gray-100  w-[677px] flex flex-col justify-between items-center   rounded-lg 
        shadow-[0px_4px_10px_rgba(0,0,0,0.12)] `}
    >
      <div className='bg-gray-100 w-full rounded-lg '>
        <div className='pt-5 pb-3 px-8 flex justify-between rounded-t-xl '>
          <h1 className='flex text-navy font-bold gap-2'>
            <ClockIcon className='h-6 w-6 ' />
            آخرین جستجو های شما
          </h1>
          <TrashIcon className='h-6 w-6 text-gray-500' />
        </div>
        <div className='flex justify-between items-center w-full bg-white  py-2 pl-8 pr-14 '>
          <div className=' flex gap-2'>
            <div className='px-2.5 py-1 border-[1px] rounded-full text-gray-500  text-sm font-medium border-gray-500'>
              <p>میلگرد</p>
            </div>
          </div>
          <ChevronLeftIcon className='h-4 w-4 text-gray-500' />
        </div>
      </div>
      <div className='bg-gray-100 w-full mt-4 '>
        <div className='pt-5 pb-3 px-8 flex justify-between bg-white '>
          <h1 className='flex text-navy font-bold gap-2'>
            <FireIcon className='h-6 w-6 ' />
            جستجو های محبوب
          </h1>
        </div>
        <div className='flex justify-between items-center w-full bg-gray-100  py-2 pl-8 pr-14 '>
          <div className=' flex gap-2'>
            <div className='px-2.5 py-1 border-[1px] rounded-full text-gray-500  text-sm font-medium border-gray-500'>
              <p>میلگرد</p>
            </div>
            <div className='px-2.5 py-1 border-[1px] rounded-full text-gray-500  text-sm font-medium border-gray-500'>
              <p>پروفیل</p>
            </div>
          </div>
          <ChevronLeftIcon className='h-4 w-4 text-gray-500' />
        </div>
      </div>
      <div className='bg-white w-full h-4 rounded-b-xl'></div>
    </div>
  );
};

export default EmptyInput;
