import React from "react";

const SectionTag = ({ title }) => {
  return (
    <div className='flex'>
      <div className='bg-cream flex justify-center items-center gap-2 py-1 pl-4 rounded-l-md'>
        <div>
          <div className='flex justify-center items-center'>
            <div className=' h-[1px] w-12 bg-navy '></div>
            <div className='w-3 h-3 rotate-45 bg-[#003349] '></div>
          </div>
        </div>
        <h1 className='text-navy font-medium text-sm'>{title}</h1>
      </div>
    </div>
  );
};

export default SectionTag;
