import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const PaymentItem = ({ shop, data }) => {
  return (
    <div className='flex flex-col gap-3 mt-8 pb-12  '>
      <h1 className='text-base font-bold text-gray-700'>
        ساعت 18 تا 21 روز یکشنبه 07 /02 / 1402{" "}
      </h1>
      <h3 className='text-xs text-gray-500'>ارسال عادی - 36,000 تومان</h3>
      <h5 className='text-xs text-red-600 flex gap-1  items-center'>
        <BuildingStorefrontIcon className='h-4 w-4  ' />
        {shop}
      </h5>
      <div className='flex gap-4'>
        {data?.lines?.map((item) => {
          return (
            <div className='flex flex-col justify-end  gap-4 relative  '>
              <Image
                className='rounded-[20px] border-[1px]  border-gray-200'
                width={85}
                height={85}
                src={item?.product?.product?.productimage_set[0]?.url}
                alt='test'
              />
              <span
                className='w-6 h-6 rounded-md bg-regalBlue text-lg font-medium text-white flex justify-center items-center
            absolute -bottom-2 right-[6%]'
              >
                1
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentItem;
