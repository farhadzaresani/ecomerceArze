import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MobileSearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div>
      <div className='relative md:hidden p-4  '>
        {!isEmpty && !searchInputValue && (
          <div className=' pointer-events-none absolute top-7 right-6 flex  justify-center items-center gap-2 text-gray-400 z-0 '>
            <MagnifyingGlassIcon className={` h-8 w-8   `} />
            <span className='text-regalBlue'>جستجو در فروشگاه</span>
          </div>
        )}
        <input
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          onFocus={() => setIsEmpty(true)}
          onBlur={() => setIsEmpty(false)}
          // placeholder={`       جستجو در فروشگاه`}
          className={`outline-none rounded-lg py-4 px-5 shadow-md w-full  empty bg-gray-100 font-medium text-base placeholder:text-navy `}
        />
      </div>
    </div>
  );
};

export default MobileSearchInput;
