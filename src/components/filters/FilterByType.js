import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const DUMMY_Types = [
  { name: "میلگرد" },
  { name: "تیرآهن" },
  { name: "پروفیل" },
];

const FilterByType = () => {
  return (
    <div className='py-10 border-b-2 mx-10'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <h2 className='text-navy font-medium'>نوع</h2>
          <div className='h-1.5 w-1.5 bg-cream rounded-full'></div>
        </div>
        <ChevronUpIcon className='h-5 w-5 text-gray-500' />
      </div>
      <div>
        <MagnifyingGlassIcon className='h-7 w-7 text-gray-400 translate-y-[40px] -translate-x-[250px] ' />
        <input
          className='w-72 p-3 rounded border-[1px] border-gray-300 font-medium outline-none '
          type='text'
          placeholder='   جستجو   '
        />
      </div>
      <div className=' overflow-y-scroll max-h-[98px] mt-3'>
        <div className='h-[20vh] flex flex-col gap-5 '>
          {DUMMY_Types.map((item) => {
            return (
              <div className='flex gap-2'>
                <input
                  type='checkbox'
                  className=' accent-navy outline-none w-4 '
                />
                <p className='text-navy font-medium text-sm'>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilterByType;
