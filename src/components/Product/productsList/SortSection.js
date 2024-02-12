import React from "react";

const SortSection = () => {
  return (
    <div className=' text-navy font-medium  gap-4 mt-5 hidden md:block '>
      <h2>مرتب سازی : </h2>
      <button className='py-1 px-4 bg-cream rounded hover:bg-white transition-all duration-200 '>
        ارزانترین
      </button>
      <button className='py-1 px-4 rounded hover:bg-white transition-all duration-200 '>
        گرانترین
      </button>
      <button className='py-1 px-4 rounded hover:bg-white transition-all duration-200 '>
        پرفروش ترین{" "}
      </button>
      <button className='py-1 px-4 rounded hover:bg-white transition-all duration-200 '>
        محبوب ترین
      </button>
    </div>
  );
};

export default SortSection;
