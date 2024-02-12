import { UserCircleIcon } from "@heroicons/react/20/solid";
import React from "react";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { WindowIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/outline";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/outline";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { KeyIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const ProfileMenu = ({
  thisUser,
  signOutHandler,
  currentOrderQuan,
  deliverOrderQuan,
}) => {
  const router = useRouter();
  const MENU_LIST = [
    {
      title: " مجوز ها",
      icon: <KeyIcon className="h-5 w-5" />,
      onClick: () => router.push("profile/permissions"),
    },
    {
      title: "آدرس ها",
      icon: <MapIcon className="h-5 w-5" />,
      onClick: () => router.push("profile/addresses"),
    },
    {
      title: "سفارشات من",
      icon: <ShoppingCartIcon className="h-5 w-5" />,
      onClick: () => router.push("/orders"),
    },
    {
      title: " نظرات",
      icon: <ChatBubbleOvalLeftIcon className="h-5 w-5" />,
    },
    // {
    //   title: "پیام ها",
    //   icon: <BellIcon className='h-5 w-5' />,
    // },

    {
      title: "اطلاعات حساب کاربری",
      icon: <UserIcon className="h-5 w-5" />,
    },
  ];
  return (
    <div
      className="bg-white mb-16  md:sticky top-10 md:m-8 rounded-3xl md:w-[285px] w-full  md:max-h-[492px] 
     text-regalBlue "
    >
      <div className="flex mt-2">
        <div className=" w-full flex items-center justify-center md:justify-between  ">
          <div className="flex flex-col justify-center items-center gap-2">
            <div>
              <UserCircleIcon className="h-14 w-14 " />
            </div>
            <h2 className="text-xl font-bold">
              {thisUser?.first_name} {thisUser?.last_name}
            </h2>
            <h4 className="text-gray-400 text-xs font-semibold">
              {thisUser?.phone_number}
            </h4>
          </div>
        </div>
        {/* <div className='ml-4'>
          <PencilSquareIcon className='h-6 w-6 text-teal-400' />
        </div> */}
      </div>
      {/* <div className=' text-regalBlue flex justify-center items-center gap-1 mt-5'>
        <WindowIcon className='h-6 w-6' />
        <h1>خلاصه فعالیت ها</h1>
      </div> */}
      <div className="flex justify-center items-center gap-10 px-12 mt-3">
        <div
          onClick={() => router.push("/orders")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img src="./assets/Svgs/profile/jari.svg" />
          <h3 className="flex gap-1 text-xs">سفارشات</h3>
          <p className="text-[10px] text-gray-400">
            جاری <span>({currentOrderQuan})</span>
          </p>
        </div>
        <div
          onClick={() => router.push("/orders")}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <img src="./assets/Svgs/profile/money.svg" />
          <h3 className="flex gap-1 text-xs">
            {/* <span>({deliverOrderQuan})</span> */}
            اعتبار خرید
          </h3>
          <p className="text-[10px] text-gray-400">۲۰۰,۰۰۰ تومان</p>
        </div>
        {/* <div className='flex flex-col  justify-center items-center'>
          <img src='./assets/Svgs/profile/sefaresh.svg' />
          <h3 className='flex gap-1 text-xs '>
            <span>(1)</span>
            سفارش
          </h3>
          <p className='text-[10px] text-gray-400'>لغو شده</p>
        </div> */}
      </div>
      <div className="mt-8 mx-4">
        {MENU_LIST.map((item) => {
          return (
            <button
              key={item.title}
              onClick={item.onClick}
              className="flex justify-between items-center border-t-[1px] border-gray-200 py-3  w-full "
            >
              <div className="flex gap-2">
                {item.icon}
                <h3 className="text-base font-medium text-[#004765]">
                  {item.title}
                </h3>
              </div>

              <ChevronLeftIcon className="h-4 w-4 text-navy " />
            </button>
          );
        })}
        <button
          onClick={signOutHandler}
          className="flex justify-between items-center border-t-[1px] border-gray-200 py-3  w-full "
        >
          <div className="flex gap-2">
            <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-600" />
            <h3 className="text-base font-medium text-red-600">خروج از حساب</h3>
          </div>
          {/* <ChevronLeftIcon className='h-4 w-4 text-navy ' /> */}
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
