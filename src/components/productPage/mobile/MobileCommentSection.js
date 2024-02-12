import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbDownIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const MobileCommentSection = ({ setShowCommentsPage }) => {
  const openCommentPageHandler = () => {
    setShowCommentsPage(true);
  };
  return (
    <div className=' flex flex-col justify-center items-center bg-white md:hidden px-4 py-4 mt-2  '>
      <div className='w-full'>
        <div className='flex justify-between my-2 '>
          <h4 className='text-gray-900 font-medium text-base'>
            نظرات کاربران (35)
          </h4>
          {/* <button
            // onClick={openMoreProductPage}
            className=' text-teal-400 font-bold text-xs'
          >
            35 نظر
          </button> */}
        </div>
        <p className='text-[10px] text-gray-400'>
          در مورد این کالا نظر بدهید یا سوالاتتان را بپرسید
        </p>
      </div>
      <div className='w-full flex justify-between mt-4 overflow-x-scroll py-6 '>
        <div className='shadow-lg border-[1px] p-2 min-w-[258px] rounded-lg'>
          <h1 className='text-sm font-bold'>مرغ کشتار روز زربال دو کیلوگرمی</h1>
          <div className='flex gap-2 mt-2'>
            <div className='text-gray-400 bg-gray-100 flex justify-center items-center gap-1 p-1 rounded'>
              <span className='text-[7px] font-bold'>پاسخ دهید</span>
              <ArrowUturnLeftIcon className='h-3 w-3 ' />
            </div>
            <div className='text-green-400 bg-gray-100 flex justify-center items-center gap-1 p-1 rounded'>
              <span>1</span>
              <HandThumbUpIcon className='h-5 w-5 text-gray-500' />
            </div>
            <div className='text-gray-400 bg-gray-100 flex justify-center items-center gap-1 p-1 rounded'>
              <span>0</span>
              <HandThumbDownIcon className='h-5 w-5 text-gray-500' />
            </div>
          </div>
          <div className='mt-3'>
            <h2 className='text-[10px] text-gray-700'>
              ممنون از فروشگاه خوب شما
            </h2>
          </div>
          <div className='mt-9'>
            <span className='text-[10px] text-gray-500'>دو ماه پیش</span>
          </div>
        </div>
        <button
          onClick={openCommentPageHandler}
          className='flex flex-col justify-center items-center text-teal-400 min-w-[200px] '
        >
          <div className=' border-2 border-teal-400 rounded-full p-4'>
            <ArrowLeftIcon className='h-6 w-6 ' />
          </div>
          <h1 className='text-sm font-bold'>مشاهده همه</h1>
        </button>
      </div>
      <div className=' w-screen h-3 bg-white p-2 -translate-y-2  ' />
    </div>
  );
};

export default MobileCommentSection;
