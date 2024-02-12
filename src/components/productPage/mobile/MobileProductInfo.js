import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const MobileProductInfo = ({ setShowProductInfo }) => {
  const closeHandler = () => {
    setShowProductInfo(false);
  };
  return (
    <div className='z-50 md:hidden fixed top-0  min-h-screen w-full bg-white '>
      <div className='flex items-center gap-5 w-full bg-white h-16 px-7  mb-[1px] '>
        <button onClick={closeHandler}>
          <ArrowRightIcon className='h-6 w-6 text-regalBlue' />
        </button>
        <h1 className='ml-4'>مشخصات</h1>
      </div>
      <div className='bg-gray-100 flex justify-between px-6 py-4 rounded-lg mx-3'>
        <div className='flex items-center gap-11 text-sm font-medium'>
          <span className='text-gray-500'>وزن</span>
          <h1 className=' text-navy'>2 کيلوگرم</h1>
        </div>
      </div>
    </div>
  );
};

export default MobileProductInfo;
