import ToggleButton from "@/components/ui/Buttons/ToggleButton";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";

const PriceType = () => {
  return (
    <div className='py-10 mx-10 '>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <h2 className='text-navy font-medium'>قیمت گذاری</h2>
          <div className='h-1.5 w-1.5 bg-cream rounded-full'></div>
        </div>
        <ChevronUpIcon className='h-5 w-5 text-gray-500' />
      </div>
      <div className='mt-5'>
        <div className='flex gap-4'>
          <ToggleButton />
          <p className='text-navy font-medium text-sm'>تخفیف دار </p>
        </div>
        <div className='flex gap-4'>
          <ToggleButton />
          <p className='text-navy font-medium text-sm'>عادی</p>
        </div>
      </div>
    </div>
  );
};

export default PriceType;
