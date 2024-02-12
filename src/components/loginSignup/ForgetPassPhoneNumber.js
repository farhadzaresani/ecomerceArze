import React from "react";

const ForgetPassPhoneNumber = ({ onClick }) => {
  return (
    <form
      className='bg-white w-[431px]  flex flex-col justify-between items-center py-8 px-4 rounded-3xl
     shadow-[0px_4px_10px_rgba(0,0,0,0.12)]'
    >
      <div className='flex flex-col justify-center items-center gap-2 '>
        <h1 className='font-bold text-3xl text-gray-900'>فراموشی رمز عبور</h1>
        <p className='font-medium text-gray-600 text-xs'>
          لطفا برای تغییر رمز عبور، شماره موبایل خود را وارد کنید
        </p>
      </div>
      <div className='flex flex-col justify-center w-full gap-2 mt-8 '>
        <label className='font-medium text-sm text-gray-700 '>
          شماره تلفن همراه
        </label>
        <input
          className='p-2 outline-none border-2 rounded-lg  '
          placeholder='09123456789'
          type='number'
        />
      </div>
      <button
        onClick={onClick}
        className='bg-cream text-navy w-full py-2.5 font-bold rounded-lg mt-6 '
      >
        ورود
      </button>
      <div className='flex justify-center items-center w-full mt-4'>
        <div className='w-full h-[1px] bg-gray-300'></div>
      </div>
      <button className=' text-navy w-full py-2.5 font-bold rounded-lg  mt-4'>
        بازگشت
      </button>
    </form>
  );
};

export default ForgetPassPhoneNumber;
