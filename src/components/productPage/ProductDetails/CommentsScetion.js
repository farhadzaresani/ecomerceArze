import { BarsArrowDownIcon } from "@heroicons/react/24/solid";
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import Star from "@/components/ui/icons/Star";
import React from "react";
import CommentCard from "./CommentCard";

const CommentsScetion = () => {
  return (
    <div className='bg-white p-4 mt-4 rounded-lg '>
      <div className='text-gray-400 flex flex-col gap-2'>
        <h5 className='font-bold text-base text-navy'>نظرات کاربران (50)</h5>
        <p className='text-sm font-medium'>
          در مورد این کالا نظر بدهید یا سوالاتتان را بپرسید
        </p>
        <p className='text-base font-bold'>
          اگر این محصول را قبلا خریده‌اید تجربه‌تان را به دیگران بگویید. اگر در
          مورد این محصول سوالی دارید همینجا بپرسید؛ کارشناسان و سایر کاربران به
          سوالتان پاسخ می‌دهند.
        </p>
      </div>
      <div className='mt-10 flex gap-4'>
        <div className='flex items-center gap-1'>
          <Star />
          <h5 className='text-navy font-bold text-lg'>4.2</h5>
          <p className='text-gray-400 text-sm font-bold'>
            ( از مجموع 30 امتیاز )
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <HandThumbUpIcon className='h-6 w-6 text-green-400' />
          <h5 className='text-gray-400 font-medium text-sm'>
            80 درصد(60 نفر) از خریداران این کالا را پیشنهاد داده اند
          </h5>
        </div>
      </div>
      <div className='text-gray-600 flex items-center gap-3'>
        <div className='flex items-center gap-2'>
          <BarsArrowDownIcon className='h-6 w-6 ' />
          <p className='text-base font-medium'>مرتب سازی براساس : </p>
        </div>
        <div className='font-medium flex items-center gap-5'>
          <h6 className='font-bold border-b-2 border-cream '>جدیدترین نظرات</h6>
          <h6>مفید ترین نظرات</h6>
          <h6>دیدگاه خریداران</h6>
        </div>
      </div>
      {[...Array(4)].map((item, i) => {
        return <CommentCard key={i} />;
      })}
    </div>
  );
};

export default CommentsScetion;
