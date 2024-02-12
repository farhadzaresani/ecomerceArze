import Image from "next/image";
import React from "react";
import dummyImage from "../../../../public/assets/Images/homePage/pic4.png";

const MobileShopCategories = () => {
  return (
    <div className='md:hidden'>
      <div className='w-full '>
        <h1 className='text-sm font-bold text-gray-700 mr-5'>
          همه دسته بندی ها
        </h1>
      </div>
      <div className='grid grid-cols-3 mt-2'>
        {[...Array(9)].map((item, i) => {
          return (
            <div className='flex flex-col justify-center items-center gap-2 w-full h-28 even:bg-gray-50  '>
              <Image
                width={63}
                height={63}
                src={dummyImage}
                className='rounded-full border-2 border-regalBlue'
              />
              <p className='font-normal text-[8px]'>آهن آلات</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileShopCategories;
