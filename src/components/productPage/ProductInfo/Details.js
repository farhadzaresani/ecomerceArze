import React from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const Details = ({ setShowProductInfo }) => {
  const OpenProductInfoPage = () => {
    setShowProductInfo(true);
  };
  return (
    <div className="md:hidden bg-white rounded-lg p-4 pb-4 mt-2">
      <h1 className="text-sm font-medium text-gray-900 ">ویژگی های محصول</h1>
      <ul className=" mt-5 flex flex-col gap-4 ">
        <li className="text-xs text-gray-500 flex items-center gap-2  ">
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <h2>لورم ایپسوم 1 :</h2>
          <span className="text-gray-700">لورم ایپسوم</span>
        </li>
        <li className="text-xs text-gray-500 flex items-center gap-2">
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <h2>لورم ایپسوم 1 :</h2>
          <span className="text-gray-700">لورم ایپسوم</span>
        </li>
        <li className="text-xs text-gray-500 flex items-center gap-2">
          <div className="w-1 h-1 bg-gray-300 rounded-full" />
          <h2>لورم ایپسوم 1 :</h2>
          <span className="text-gray-700">لورم ایپسوم</span>
        </li>
      </ul>
      {/* <button
        onClick={OpenProductInfoPage}
        className='flex justify-between items-center border-t-[1px] py-3 mt-7 w-full'
      >
        <h1>مشخصات</h1>
        <ChevronLeftIcon className='h-6 w-6 text-gray-500' />
      </button> */}
    </div>
  );
};

export default Details;
