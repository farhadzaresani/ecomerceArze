import Image from "next/image";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const FillInput = () => {
  return (
    <div
      className={`bg-gray-100  w-[677px] flex flex-col justify-between items-center   rounded-lg 
    shadow-[0px_4px_10px_rgba(0,0,0,0.12)] `}
    >
      <div className='bg-white w-full rounded-lg '>
        <div className='pt-5 pb-3 px-8 flex gap-3.5 justify-between rounded-t-xl overflow-hidden '>
          {[...Array(5)].map((i) => {
            return (
              <div
                key={i}
                className='text-gray-600 border-[1px] border-gray-200  break-words rounded-lg min-w-[218px] py-1.5 pr-5 pl-2 gap-3.5
             flex items-center justify-center  '
              >
                <Image
                  width={70}
                  height={70}
                  src='/assets/Images/product/proimg.png'
                  className='rounded-lg'
                  alt='seacrh'
                />
                <h1 className='text-sm font-medium'>تیرآهن سنگین 14 ذوب آهن</h1>
              </div>
            );
          })}
        </div>
        <div>
          <div className='flex justify-between items-center w-full gap-4  text-gray-500 bg-gray-100  pt-3 pb-1 pl-8 pr-8 '>
            <MagnifyingGlassIcon className='h-8 w-8 text-gray-400' />
            <div className='flex flex-col justify-between items-start w-full    '>
              <h1 className='text-gray-600 font-medium'>تیر</h1>
              <h1 className='flex gap-1'>
                در دسته
                <span className='text-teal-400'>تیرآهن</span>
              </h1>
            </div>
          </div>
          <div className='flex justify-between items-center w-full gap-4  text-gray-500 bg-gray-100  pt-3 pb-1 pl-8 pr-8 '>
            <MagnifyingGlassIcon className='h-8 w-8 text-gray-400' />
            <div className='flex flex-col justify-between items-start w-full    '>
              <h1 className='text-gray-600 font-medium'>تیر</h1>
              <h1 className='flex gap-1'>
                در دسته
                <span className='text-teal-400'>تیرآهن</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white w-full pb-2 rounded-b-lg'>
        {[...Array(3)].map((item, i) => {
          return (
            <div className='flex justify-between items-center w-full gap-4  text-gray-500   pt-3 pb-1 pl-8 pr-8 '>
              <MagnifyingGlassIcon className='h-8 w-8 text-gray-400' />
              <div className='flex flex-col justify-between items-start w-full    '>
                <h1 className='text-gray-600 font-medium'>تیر</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FillInput;
