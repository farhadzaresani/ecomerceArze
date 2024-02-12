import React from "react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const MobileShopDetail = ({
  setShowMoreSuppliers,
  shopId,
  supplierName,
  shopNumber,
}) => {
  const openMoreProductPage = () => {
    setShowMoreSuppliers(true);
  };
  return (
    <div className="bg-white md:border-[2px] md:min-h-[299px] rounded-lg md:rounded-3xl flex flex-col p-4  md:hidden  ">
      <div className="flex justify-between mt-2 ">
        <h4 className="text-gray-900 font-medium text-base">فروشنده</h4>
        <button
          onClick={openMoreProductPage}
          className=" text-teal-400 font-bold text-xs"
        >
          {shopNumber > 3 ? "3" : shopNumber}+ فروشنده دیگر
        </button>
      </div>
      <div className=" text-gray-900 font-bold text-base flex gap-2 mt-6 ">
        <BuildingStorefrontIcon className="h-6 w-6 " />
        <Link
          className="text-teal-400 md:text-black underline md:no-underline"
          href={`/supplier/${shopId}`}
        >
          {supplierName}
        </Link>
      </div>
      <div className="flex md:justify-center items-center gap-2 mt-4 border-b-[1px] md:border-b-0 pb-4 ">
        <h2 className="font-bold text-base text-gray-400 md:text-navy">
          عملکرد فروشنده <span className="text-green-400">عالی</span>
        </h2>
        <div className=" w-[2px] h-5 bg-cream"></div>
        <h2 className="font-bold text-sm text-navy">رضایت مشتریان</h2>
        <h3 className="text-base font-medium text-white bg-green-400 px-3.5 pt-1 rounded-lg">
          85%
        </h3>
      </div>
      {/* <div className='mt-3 md:hidden'>
        <h1 className='text-sm text-gray-900'>ساعات کاری فروشگاه</h1>
        <div className='text-xs text-gray-500 flex gap-2 mt-4'>
          <h3>شنبه تا پنجشنبه</h3>
          <p className='text-teal-400'>9 الی 21</p>
        </div>
        <div className='text-xs text-gray-500 flex gap-2 mt-3'>
          <h3>جمعه</h3>
          <p className='text-teal-400'>9 الی 14</p>
        </div>
      </div> */}
    </div>
  );
};

export default MobileShopDetail;
