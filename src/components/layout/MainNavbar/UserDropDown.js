import { HeartIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const UserDropDown = ({ signOutHandler, user, setOpenDropDown }) => {
  return (
    <div className='hidden md:block'>
      <div
        onClick={() => setOpenDropDown(false)}
        className='bg-black/10 fixed w-full h-full z-40 '
      ></div>
      <div
        className='bg-white fixed top-14 left-28 z-50 text-navy font-bold text-base rounded-lg
     flex flex-col justify-center items-center gap-3 pt-3 shadow-[0px_2px_15px_rgba(0,0,0,0.3)] '
      >
        <div className='flex gap-6 items-center justify-between border-b-2 border-gray-100 pb-1 mx-4'>
          <div className='flex gap-1 items-center justify-center'>
            <div>
              <UserCircleIcon className='h-8 w-8 text-navy' />
            </div>
            <div className=' flex flex-col -space-y-2 '>
              <h2>
                {user.first_name.length > 0
                  ? `${user.first_name}  ${user.last_Name}`
                  : "مهمان"}
              </h2>
              <h4 className='text-black text-[10px]'>{user.phone_number}</h4>
            </div>
          </div>
          <ChevronLeftIcon
            onClick={() => setOpenDropDown(false)}
            className='h-8 w-10  cursor-pointer '
          />
        </div>

        <div className='flex flex-col justify-center items-center  w-full'>
          <button className='flex justify-start px-4 items-center py-3 gap-2 hover:bg-gray-100 w-full '>
            <ShoppingCartIcon className='h-6 w-6 ' />
            سفارشات من
          </button>
          <button className='flex justify-start px-4 items-center py-3 gap-2 hover:bg-gray-100  w-full '>
            <HeartIcon className='h-6 w-6 ' />
            ذخیره شده ها
          </button>
          <button
            onClick={signOutHandler}
            className='flex justify-start px-4 items-center py-3 gap-2 hover:bg-gray-100  w-full rounded-b-lg '
          >
            <ArrowRightOnRectangleIcon className='h-6 w-6  ' />
            خروج از حساب
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDropDown;
