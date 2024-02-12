import React from "react";

const ToggleButton = () => {
  return (
    <label className='relative inline-flex items-center mb-5 cursor-pointer'>
      <input type='checkbox' value='' className='sr-only peer' />
      <div
        className="w-9 h-5  peer-focus:outline-none rounded-full peer
    dark:bg-navy peer-checked:after:translate-x-full peer-checked:after:border-white 
    after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white
    after:border-gray-300  after:rounded-full after:h-4 after:w-4 after:transition-all
    peer-checked:bg-gray-200"
      ></div>
    </label>
  );
};

export default ToggleButton;
