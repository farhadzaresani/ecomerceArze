import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const FilterCard = ({ name, removeItem }) => {
  return (
    <div
      className='text-gray-600 bg-white border-[1px] border-gray-300 rounded 
      flex justify-center items-center gap-2 px-1.5 py-[5px] max-w-max text-sm font-medium '
    >
      <p>{name}</p>
      <button onClick={removeItem}>
        <XMarkIcon className='h-4 w-4 ' />
      </button>
    </div>
  );
};

export default FilterCard;
