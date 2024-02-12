import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { HandThumbDownIcon } from "@heroicons/react/24/outline";

const CommentCard = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className='text-gray-500 flex items-center'>
          <p className='bg-cream px-3 py-1 rounded-lg font-bold text-base text-gray-600'>
            3.0
          </p>
          <p className='font-medium text-sm '> 20 فروردین 1402</p>
          <p className='font-bold text-sm'>احمد رحمانی (خریدار)</p>
        </div>
        <div className='font-bold text-gray-400 text-sm flex '>
          <button className='p-3 bg-gray-100 rounded-lg flex items-center justify-center gap-3.5 ml-3.5'>
            پاسخ دهید
            <ArrowUturnLeftIcon className='h-6 w-6 ' />
          </button>
          <button className='p-3 bg-gray-100 rounded-lg flex justify-center items-center ml-2 '>
            1
            <HandThumbUpIcon className='h-6 w-6 ' />
          </button>
          <button className='p-3 bg-gray-100 rounded-lg flex justify-center items-center text-red-500 '>
            2
            <HandThumbDownIcon className='h-6 w-6 ' />
          </button>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CommentCard;
