import Image from "next/image";
import React from "react";
import { TrashIcon } from "@heroicons/react/20/solid";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import useRialStyle from "@/hooks/useRialStyle";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import MobileBasketCardItem from "../SingleBasket/MobileBasketCardItem";
import { useRouter } from "next/router";

const MobileBasketCard = ({ data, addMoreOfItem, deletItem, basketId }) => {
  const router = useRouter();
  const goToBasketPage = () => {
    router.push(`myBasket/${basketId}`);
  };

  const handlerDeleteBasket = () => {
    deletItem.mutate({ id: data?.id });
  };

  return (
<<<<<<< HEAD
    <div className='mt-4 bg-white w-full rounded-lg p-4   '>
      <div className='flex justify-between'>
        <div className='flex items-start gap-2 text-gray-700 '>
=======
    <div className="mt-4 bg-white w-full rounded-lg p-4   ">
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-2 text-gray-700 overflow-hidden ">
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862
          <Image
            width={60}
            height={60}
            src={
              data?.shop?.logo?.url
                ? data?.shop?.logo?.url
                : "/assets/Images/basket/basketShopErrorImage.svg "
            }
            className="border-[1px] border-navy rounded-md "
            alt="basket"
            priority
          />
          <div className="flex flex-col gap-2 ">
            <Link
              href={`/supplier/${data?.shop?.shop_unique_id}`}
              className="text-sm font-bold"
            >
              {data?.shop?.title}
            </Link>
<<<<<<< HEAD
            <span className='text-[10px]'>1402/02/25</span>
            <div className='px-2 mt-2 flex gap-3'>
              {data?.lines?.map((item) => {
                console.log(item);
                return (
                  <div key={item.id}>
                    <Image
                      className='border rounded-sm max-w-8 max-h-8'
                      width={30}
                      height={30}
                      src={item?.product?.productimage_set[0]?.url}
                    />
                    <div className='flex items-center text-xs text-gray-600'>
                      <XMarkIcon className='w-3 h-3 text-red-600' />
                      <h4>{item?.quantity}</h4>
                    </div>
                  </div>
                  // <MobileBasketCardItem
                  //   key={item.id}
                  //   item={item}
                  //   addMoreOfItem={addMoreOfItem}
                  //   deletItem={deletItem}
                  // />
                );
              })}
            </div>
=======
            <span className="text-[10px]">1402/02/25</span>
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862
          </div>
        </div>
        <button onClick={handlerDeleteBasket}>
          <TrashIcon className="h-6 w-6 text-red-600" />
        </button>
      </div>
<<<<<<< HEAD

=======
      <div className="px-2 flex gap-3 mt-3 ">
        {data?.lines?.map((item) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <Image
                src={item?.product?.productimage_set[0]?.url}
                width={30}
                height={30}
                className="w-8 h-8 border rounded-md"
              />
              <h4 className="flex  text-xs">
                <sub>
                  <XMarkIcon className="w-3 h-3 text-red-600" />
                </sub>
                {item?.quantity}
              </h4>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end text-[10px] font-semibold">
        <h3>
          {useRialStyle(150000)} <sub>تومان</sub>
        </h3>
      </div>
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862
      <button
        onClick={goToBasketPage}
        className="bg-cream py-2.5 w-full mt-4 rounded-lg text-navy font-semibold border-[1px] border-navy"
      >
        تکمیل سفارش
      </button>
    </div>
  );
};

export default MobileBasketCard;
