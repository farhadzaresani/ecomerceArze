import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";

const LoginPassword = ({
  forgetPass,
  loginWithOtp,
  login,
  setLoginData,
  loginData,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    login.mutate();
  };

  const onChangeHandler = (e) => {
    setLoginData({
      ...loginData,
      password: e.target.value,
    });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='bg-white w-[431px]  flex flex-col justify-between items-center py-8 px-4 rounded-3xl
shadow-[0px_4px_10px_rgba(0,0,0,0.12)]'
    >
      <div className='flex flex-col justify-center items-center gap-2 '>
        <h1 className='font-bold text-3xl text-gray-900'>ورود با رمز عبور</h1>
        <p className='font-medium text-gray-600 text-xs'>
          رمز عبور تنظیم شده برای شماره موبایل خود را وارد کنید
        </p>
      </div>
      <div className='flex flex-col justify-center  w-full gap-2 mt-8 '>
        <label className='font-medium text-sm text-gray-700 '>رمز عبور</label>
        <input
          onChange={onChangeHandler}
          value={loginData.password}
          className='p-2 w-full outline-none border-2 rounded-lg  relative '
          placeholder={`${showPassword ? "Password" : "••••••••"}`}
          type={`${showPassword ? "text" : "password"}`}
        />
        {showPassword ? (
          <EyeSlashIcon
            onClick={() => setShowPassword(!showPassword)}
            className='h-5 w-5 text-gray-600 -translate-x-[23em] -translate-y-10 cursor-pointer '
          />
        ) : (
          <EyeIcon
            onClick={() => setShowPassword(!showPassword)}
            className='h-5 w-5 text-gray-600 -translate-x-[23em] -translate-y-10 cursor-pointer '
          />
        )}
      </div>
      <div className='flex justify-between w-full '>
        <div>
          <div className='flex justify-center items-center gap-2'>
            <input
              className='w-4 h-4 outline-none appearance-none ring-1 ring-slate-200 checked:bg-blue-600 border-[2px] border-white rounded-sm '
              type='checkBox'
            />

            <label>مرا به خاطر بسپار</label>
          </div>
        </div>
        <div className=' flex flex-col  items-end '>
          <button
            onClick={forgetPass}
            className=' text-teal-400 text-sm font-medium '
          >
            رمز عبور خود را فراموش کرده ام
          </button>
          <button
            onClick={loginWithOtp}
            className=' text-teal-400 text-sm font-medium max-w-max mt-6'
          >
            ورود با رمز یکبار مصرف
          </button>
        </div>
      </div>
      <button className='bg-cream text-navy w-full py-2.5 font-bold rounded-lg mt-6 '>
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

export default LoginPassword;
