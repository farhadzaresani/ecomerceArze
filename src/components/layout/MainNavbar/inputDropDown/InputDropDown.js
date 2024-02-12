import React from "react";
import EmptyInput from "./EmptyInput";
import FillInput from "./FillInput";

const InputDropDown = ({ isEmpty }) => {
  return (
    <>
      <div className='fixed w-full z-20 h-full bg-black/50 top-[17%] right-0'></div>
      <div className='absolute top-14 -right-10 z-40 overflow-y-hidden'>
        {isEmpty ? <EmptyInput /> : <FillInput />}
      </div>
    </>
  );
};

export default InputDropDown;
