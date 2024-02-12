import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { ShieldExclamationIcon } from "@heroicons/react/24/outline";

const SetNewPassword = ({ submit }) => {
  const [showPassword, setShowPassword] = useState({
    input_1: false,
    input_2: false,
  });
  return (
    <form
      className='bg-white w-[431px]  flex flex-col justify-between items-center py-8 px-4 rounded-3xl
shadow-[0px_4px_10px_rgba(0,0,0,0.12)]'
    >
      <div className='flex flex-col justify-center items-center gap-2 '>
        <h1 className='font-bold text-3xl text-gray-900'>بازنشانی رمز عبور</h1>
        <p className='font-medium text-gray-600 text-xs'>
          برای بازنشانی رمز عبور خود، به صورت صحیح فیلد های زیر را پر کنید
        </p>
      </div>
      <div className='flex flex-col justify-center  w-full gap-2 mt-8 '>
        <label className='font-medium text-sm text-gray-700 '>
          {" "}
          رمز عبور جدید
        </label>
        <input
          className='p-2 w-full outline-none border-2 rounded-lg  relative '
          placeholder={`${showPassword.input_1 ? "Password" : "••••••••"}`}
          type={`${showPassword.input_1 ? "text" : "password"}`}
        />
        {showPassword.input_1 ? (
          <EyeSlashIcon
            onClick={() => setShowPassword({ ...showPassword, input_1: false })}
            className='h-5 w-5 text-gray-600 -translate-x-[23em] -translate-y-10 cursor-pointer '
          />
        ) : (
          <EyeIcon
            onClick={() => setShowPassword({ ...showPassword, input_1: true })}
            className='h-5 w-5 text-gray-600 -translate-x-[23em] -translate-y-10 cursor-pointer '
          />
        )}
      </div>
      <div className='flex flex-col justify-center  w-full gap-2 '>
        <label className='font-medium text-sm text-gray-700 '>
          {" "}
          تکرار رمز عبور جدید
        </label>
        <input
          className='p-2 w-full outline-none border-2 rounded-lg  relative '
          placeholder={`${showPassword.input_2 ? "Password" : "••••••••"}`}
          type={`${showPassword.input_2 ? "text" : "password"}`}
        />
        {showPassword.input_2 ? (
          <EyeSlashIcon
            onClick={() => setShowPassword({ ...showPassword, input_2: false })}
            className='h-5 w-5 text-gray-600 -translate-x-[23em] -translate-y-10 cursor-pointer '
          />
        ) : (
          <EyeIcon
            onClick={() => setShowPassword({ ...showPassword, input_2: true })}
            className='h-5 w-5 text-gray-600 -translate-x-[23em] -translate-y-10 cursor-pointer '
          />
        )}
      </div>
      <div className=' w-full flex flex-col gap-2 items-start '>
        <div className='font-medium text-xs text-gray-600 flex justify-center items-center gap-2'>
          <ShieldCheckIcon className='h-5 w-5 text-green-400' />
          <p>حداقل 8 کاراکتر</p>
        </div>
        <div className='font-medium text-xs text-gray-600 flex justify-center items-center gap-2'>
          <ShieldExclamationIcon className='h-5 w-5 text-orange-600' />
          <p>شامل حروف بزرگ و کوچک </p>
        </div>
      </div>

      <button
        onClick={submit}
        className='bg-cream text-navy w-full py-2.5 font-bold rounded-lg mt-6 '
      >
        ورود
      </button>
    </form>
  );
};

export default SetNewPassword;
