import React from "react";

const DetailTable = () => {
  return (
    <div className='bg-white p-6 mt-4 rounded-lg '>
      <h1 className='text-navy text-base font-bold mb-4'>جدول مشخصات</h1>
      <div className='flex flex-col gap-2'>
        <div className='flex bg-gray-100 py-4 text-base font-medium text-navy'>
          <div className='w-1/5 flex justify-center items-center'>
            <h4>ابعاد</h4>
          </div>
          <div className='w-4/5 flex justify-start items-center '>
            <h4>356 * 233 * 17.9 میلی متر</h4>
          </div>
        </div>
        <div className='flex bg-gray-100 py-4 text-base font-medium text-navy'>
          <div className='w-1/5 flex justify-center items-center'>
            <h4>وزن</h4>
          </div>
          <div className='w-4/5 flex justify-start items-center '>
            <h4>214.66 کيلوگرم</h4>
          </div>
        </div>
        <div className='flex bg-gray-100 py-4 text-base font-medium text-navy'>
          <div className='w-1/5 flex justify-center items-center'>
            <h4>جنس</h4>
          </div>
          <div className='w-4/5 flex justify-start items-center '>
            <h4>فلز</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTable;
