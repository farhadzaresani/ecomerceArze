import Star from "@/components/ui/icons/Star";
import React from "react";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import PardakhtDarMahal from "@/components/ui/icons/product/PardakhtDarMahal";
import ZemanateAslBodan from "@/components/ui/icons/product/ZemanateAslBodan";
import TahvileFori from "@/components/ui/icons/product/TahvileFori";
import ZemanateBazgasht from "@/components/ui/icons/product/ZemanateBazgasht";
import useRialStyle from "@/hooks/useRialStyle";

const InfoSection = ({ productData }) => {
  return (
    <div className="w-full  md:max-w-[609px] bg-white md:bg-transparent px-4 pb-4 rounded-b-xl mb-2 md:mb-0 ">
      <div className="md:px-24 ">
        <div className="md:border-b-2 pb-2 flex md:flex-col justify-between">
          <h1 className="font-bold text-base text-black">
            {productData?.title}
          </h1>
          <h3 className="text-xl font-bold">
            {useRialStyle(productData?.price)}{" "}
            <sub className="text-xs font-normal">تومان</sub>{" "}
          </h3>
          <h3 className="font-medium text-base text-gray-400 mt-2 hidden md:block ">
            کشتار روز از عرضه کننده معتبر
          </h3>
        </div>
        <div className="flex gap-2 my-2">
          <div className="w-[3px] h-4 bg-cream hidden md:block" />
          {/* <h5 className='font-bold text-xs text-teal-400 md:text-gray-600'>
            35 نظر
          </h5> */}
          <div className="flex gap-2">
            <Star />
            <h5 className="font-bold text-xs text-gray-600">
              <span className="text-[8px] text-gray-400">(30)</span>
              {productData?.avg_rating}
            </h5>
          </div>
        </div>

        {/* <div className='flex gap-1 items-center  md:border-0 pb-4 md:pb-0 '>
          <HandThumbUpIcon className='h-6 w-6 text-green-400' />
          <p className='font-light text-gray-400 text-[10px]'>
            80 درصد(60 نفر) از خریداران این کالا را پیشنهاد داده اند
          </p>
        </div> */}
        {/* <div className="md:hidden flex items-center gap-2 text-sm font-semibold py-4 border-t">
          <label htmlFor="checkbox">انتخاب رنگ</label>
          <div className="relative">
            <input
              id="checkbox"
              type="checkbox"
              className="appearance-none ring-4 ring-cream w-3.5 h-3.5 rounded-full"
            />

            <CheckIcon className="h-4 w-4 text-gray-500 absolute top-0 right-0" />
          </div>
        </div> */}
        <div className=" hidden md:flex flex-col gap-5 mt-9">
          <h1 className="font-medium text-base text-gray-900 ">
            ویژگی های محصول
          </h1>
          <h6 className="flex gap-3 items-center text-gray-500 text-xs font-medium">
            <div className="bg-cream h-2 w-2 rounded-full"></div>
            دارای گواهینامه مغتبر از سازمان غذا و دارو
          </h6>
          <h6 className="flex gap-3 items-center text-gray-500 text-xs font-medium">
            <div className="bg-cream h-2 w-2 rounded-full"></div>
            نشان استاندارد کیفیت مواد غذایی
          </h6>
          <h6 className="flex gap-3 items-center text-gray-500 text-xs font-medium">
            <div className="bg-cream h-2 w-2 rounded-full" />
            بسته بندی بهداشتی در ظرف پروپیلن
          </h6>
        </div>
      </div>
      {/* <div className='text-gray-600 flex justify-center items-start gap-2  bg-cream px-3 py-2 rounded-2xl mt-11'>
        <InformationCircleIcon className='h-6 w-6 ' />

        <p className='font-normal text-xs'>
          درخواست مرجوع کردن کالا با دلیل "انصراف از خرید" تنها در صورتی قابل
          تایید است که کالا در شرایط اولیه باشد (در صورت پلمپ بودن، کالا نباید
          باز شده باشد).
        </p>
      </div> */}
      {/* <div className='flex mt-6'> */}
      {/* <div className='m-auto flex gap-11'>
          <ZemanateBazgasht />
          <TahvileFori />
          <ZemanateAslBodan />
          <PardakhtDarMahal />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default InfoSection;
