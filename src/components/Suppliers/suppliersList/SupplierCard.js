import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SupplierCard = ({ title, id, address }) => {
  return (
    <Link
      href={`/supplier/${id}`}
      className='w-[496px] h-[257px] bg-white rounded-3xl flex flex-col justify-between items-center pt-8 
    shadow-[0px_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_0px_10px_4px_rgba(0,0,0,0.12)] 
    hover:-translate-y-1 transition-all duration-105 max-h-[257px] '
    >
      <div className='flex gap-5  w-full px-4 '>
        <div className='bg-gray-400 px-4 flex justify-center items-center rounded-lg   '>
          <Image
            width={143}
            height={143}
            src='/assets/Images/supplier/supLogo.png'
          />
        </div>
        <div className=' w-5/6'>
          <div className='flex flex-col justify-center items-center w-full m-auto gap-2'>
            <h1 className='text-2xl font-medium'> {title} </h1>
            <div className='bg-cream h-1 w-5/6 rounded-full'></div>
          </div>
          <div className='font-medium text-navy flex flex-col  items-start gap-4 mt-3'>
            <div className='flex gap-3'>
              <DevicePhoneMobileIcon className='h-6 w-6' />
              <p>09123456789</p>
            </div>
            <div className='flex gap-3'>
              <MapPinIcon className='h-6 w-6 ' />
              <p className='  w-4/5 '>
                {address?.province} {address?.street_address_1}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-evenly items-center  h-full w-full my-5 text-white bg-navy gap-2 py-5 px-5 rounded-b-3xl '>
        <div className='text-xs text-gray-500 flex justify-center items-center gap-1'>
          <p className='font-medium'>شروع کاراز </p>
          <p className='font-bold'> فروردین 1402</p>
        </div>
        <div className='bg-cream h-4 w-[2px] '></div>
        <div className='flex  font-bold gap-1'>
          <p>عملکرد فروشنده</p>|<p className='text-green-400'>عالی</p>
        </div>
        <div className='bg-cream h-4 w-[2px]'></div>
        <div className='flex justify-center items-center gap-1'>
          <p className='text-xs  font-bold'>رضایت مشتریان</p>
          <p className=' bg-green-400 text-white rounded-lg px-4 pt-1 '>85%</p>
        </div>
      </div>
    </Link>
  );
};

export default SupplierCard;
