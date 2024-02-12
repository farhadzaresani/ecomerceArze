import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const BadgeButton = ({ number }) => {
  return (
    <>
      <div className='relative'>
        <button className='border-[1px] border-[#003349] p-2.5 rounded-[8px]   '>
          <ShoppingCartIcon className='h-6 w-6 text-black' />
        </button>
      </div>
      {number > 0 && (
        <div className='absolute top-2 left-16 bg-green-400 text-white w-6 h-6 flex justify-center items-center rounded-md '>
          {number}
        </div>
      )}
    </>
  );
};

export default BadgeButton;
