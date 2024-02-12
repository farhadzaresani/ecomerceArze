import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const MobileSearchInput = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  return (
    <div>
      <div className='relative md:hidden p-4 '>
        {!isEmpty && !searchInputValue && (
          <div className=' pointer-events-none absolute top-6 right-6 flex  justify-center items-center gap-2 text-gray-400 z-0 '>
            <MagnifyingGlassIcon className={` h-8 w-8   `} />
            <span className='text-regalBlue'>جستجو در عرضه کالا </span>
          </div>
        )}
        <input
          value={searchInputValue}
          onFocus={() => setIsEmpty(true)}
          onBlur={() => setIsEmpty(false)}
          onChange={(e) => setSearchInputValue(e.target.value)}
          type='search'
          // placeholder={`       جستجو در عرضه کالا `}
          className={`  outline-none z-10  rounded-lg py-3.5 px-4  w-full  empty bg-gray-100 font-medium text-base `}
        />
      </div>
    </div>
  );
};

export default MobileSearchInput;
