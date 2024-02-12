import React from "react";

const SubsidiSkeletonLoading = () => {
  return (
    <div className='h-full flex flex-col gap-6 px-8 py-4 '>
      <div className='w-32 h-6 skeleton bg-gray-100 rounded-sm ' />
      <div className='full h-6 skeleton bg-gray-100 rounded-sm  ' />
      <div className='flex flex-col justify-center items-center gap-8 '>
        {[...Array(3)].map((item, i) => {
          return (
            <div key={i} className='flex flex-col gap-4'>
              <div className='flex items-center gap-4'>
                <div className='w-4 h-4 skeleton bg-gray-100 rounded-full ' />
                <div className='w-full h-4 skeleton bg-gray-100 rounded-sm ' />
              </div>
              <div className=' w-56 h-36 skeleton bg-gray-100 rounded-2xl  ' />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubsidiSkeletonLoading;
