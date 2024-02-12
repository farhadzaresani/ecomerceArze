import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const FilterByLocation = () => {
  return (
    <div className='py-10 mx-8 border-b-2'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <h2 className='text-navy font-medium'>موقعیت مکانی</h2>
          <div className='h-1.5 w-1.5 bg-cream rounded-full'></div>
        </div>
        <ChevronUpIcon className='h-5 w-5 text-gray-500' />
      </div>
      <div>
        <MagnifyingGlassIcon className='h-7 w-7 text-gray-400 translate-y-[35px] -translate-x-[190px] ' />
        <input
          className=' w-full px-1 py-2 rounded border-[1px] border-gray-300 font-medium outline-none '
          type='text'
          placeholder='   جستجو   '
        />
      </div>
      <div className=' overflow-y-scroll max-h-[98px] mt-3'>
        <div className='h-[20vh] flex flex-col gap-5 '>
          <div className='flex gap-2'>
            <input type='checkbox' className=' accent-navy outline-none w-4 ' />
            <p className='text-navy font-medium text-sm'>تهران</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterByLocation;
