import React from "react";

const HomePageSkeleton = () => {
  return (
    <div className='p-5 pb-20 flex flex-col items-center'>
      <div className='bg-gray-100 w-full h-12 rounded-xl skeleton ' />
      <div className='bg-gray-100 w-5/6 h-56 rounded-xl skeleton mt-6 ' />
      <div className='bg-gray-100 w-2/4 h-10  skeleton mt-8 ' />
      <div className=' grid grid-cols-2 gap-10 w-full  mt-12 px-4 '>
        {[...Array(4)].map((_, i) => {
          return (
            <div
              key={i}
              className='flex flex-col justify-center items-center gap-2 w-full'
            >
              <div className='bg-gray-100 w-28 h-28 rounded-full  skeleton ' />
              <div className='bg-gray-100  mx-2 w-3/5 h-5  skeleton ' />
            </div>
          );
        })}
      </div>
      <div className='bg-gray-100 w-2/4 h-6  skeleton mt-8 ' />
      <div className='bg-gray-100 w-full h-4  skeleton mt-8 ' />
      <div className='w-full flex justify-between '>
        <div className='bg-gray-100 w-2/5 h-10  skeleton mt-8 ' />
        <div className='bg-gray-100 w-1/5 h-4  skeleton mt-8 ' />
      </div>
      <div className='w-full flex gap-16 overflow-hidden mt-8 '>
        {[...Array(3)].map((_, i) => {
          return (
            <div key={i} className='w-full flex flex-col items-end gap-4'>
              <div className='bg-gray-100 w-24 h-28 rounded-lg  skeleton  ' />
              <div className='bg-gray-100 w-24 h-10  skeleton ' />
              <div className='bg-gray-100 w-12 h-5  skeleton ' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageSkeleton;
