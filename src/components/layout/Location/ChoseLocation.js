import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

const ChoseLocation = ({ closeMenu }) => {
  return (
    <div className='fixed  z-30'>
      <div
        onClick={closeMenu}
        className='absolute bg-black/20 w-[100vw] z-20  h-[100vh] flex '
      ></div>
      <div className='right-[40%] mt-20 fixed z-50 '>
        <form
          className='bg-white max-w-[332px] max-h-[481px]  flex flex-col justify-center items-center gap-5 py-8 px-4 rounded-3xl
          shadow-[0px_4px_10px_rgba(0,0,0,0.12)]'
        >
          <div className='flex flex-col justify-center items-center gap-2 '>
            <XMarkIcon
              onClick={closeMenu}
              className='h-6 w-6 text-black absolute left-4 top-4 cursor-pointer'
            />
            <h1 className='font-bold text-base text-gray-700'>
              لطفا ادرس خود را انتخاب کنید
            </h1>
            <p className='font-medium text-gray-600 text-xs text-center'>
              برای عملکرد بهتر سامانه و ارائه پیشنهاد های بهتر به شما ، استان،
              شهر و محله خود را انتخاب کنید
            </p>
          </div>
          <div className='flex flex-col justify-center  w-full gap-2   relative'>
            <label className='font-medium text-sm text-gray-700 '>استان</label>
            <select className='border-[1px] p-2  rounded-lg appearance-none'>
              <option>یک گزینه را انتخاب کنید ...</option>
            </select>
            <ChevronDownIcon className='h-6 w-6 text-black absolute left-2 top-9' />
          </div>
          <div className='flex flex-col justify-center  w-full gap-2   relative'>
            <label className='font-medium text-sm text-gray-700 '>شهر</label>
            <select className='border-[1px] p-2  rounded-lg appearance-none'>
              <option>یک گزینه را انتخاب کنید ...</option>
            </select>
            <ChevronDownIcon className='h-6 w-6 text-black absolute left-2 top-9' />
          </div>
          <div className='flex flex-col justify-center  w-full gap-2   relative'>
            <label className='font-medium text-sm text-gray-700 '>محله</label>
            <select className='border-[1px] p-2  rounded-lg appearance-none'>
              <option>یک گزینه را انتخاب کنید ...</option>
            </select>
            <ChevronDownIcon className='h-6 w-6 text-black absolute left-2 top-9' />
          </div>

          <button className='bg-cream text-navy w-full py-2.5 font-bold rounded-lg mt-6 '>
            تایید ادرس
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChoseLocation;
