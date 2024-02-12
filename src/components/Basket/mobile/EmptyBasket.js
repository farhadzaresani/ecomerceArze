import EmptyBasketIcon from "@/components/ui/icons/EmptyBasketIcon";
import React from "react";

const EmptyBasket = () => {
  return (
    <div className=' bg-white mt-10 min-h-[445px] min-w-[328px] px-4 flex flex-col justify-center items-center rounded-lg shadow-md'>
      <EmptyBasketIcon />
      <h1 className='text-regalBlue font-extrabold text-xl'>
        سبد خرید شما خالی است
      </h1>
      <span className='text-xs font-normal text-gray-500 mt-1 '>
        برای افزودن محصول کلیک کنید{" "}
      </span>
      <button className='bg-cream text-base font-medium text-navy w-full py-2.5 border-[1px] border-navy rounded-lg mt-6'>
        دسته بندی محصولات
      </button>
    </div>
  );
};

export default EmptyBasket;
