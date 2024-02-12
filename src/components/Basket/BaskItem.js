import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useRialStyle from "@/hooks/useRialStyle";
// Icons
import GrayTrashIcon from "../ui/icons/GrayTrashIcon";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

const BasketItem = ({
  data,
  deletItem,
  addMoreOfItem,
  id,
  shopId,
  quantity,
  subsidy,
  price,
  product_subsidized_price,
  price_net_amount,
  image,
}) => {
  const [counter, setCounter] = useState(quantity);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (counter !== quantity) {
        addMoreOfItem.mutate({ itemId: id, quan: counter, shopId: shopId });
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [counter]);

  return (
    <div className="  p-5  w-full flex justify-between ">
      <div className="flex gap-10 w-full">
        <div className="flex flex-col justify-start items-start gap-9 ">
          <Image
            blurDataURL="/assets/svgs/imageLoader.svg"
            placeholder="blur"
            priority="true"
            className="rounded-[20px] border-[1px]  border-gray-200 p-2"
            width={150}
            height={150}
            src={image ? image : "/assets/svgs/imageLoader.svg"}
            alt="test"
          />
          <div className="flex justify-end items-center gap-3  mr-8 ">
            <button
              className=" text-green-400 text-3xl rounded-md font flex justify-center items-center"
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>
            <input
              value={counter}
              onChange={(e) => setCounter(e.target.value)}
              minLength={"1"}
              maxLength={"2"}
              type="number"
              className=" w-8 bg-gray-50 font-bold text-gray-500 border-[1px] border-gray-200 h-8 rounded-[4px]  outline-none text-center"
            />
            <button
              className=" text-red-600 text-3xl rounded-md font flex justify-center items-center"
              onClick={() => setCounter(counter - 1)}
            >
              -
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold text-xl"> {data?.title} </h1>
          <Link
            href={`/supplier/${data?.shop?.id}`}
            className="flex text-base font-medium  text-gray-900 gap-2.5"
          >
            <BuildingStorefrontIcon className="h-6 w-6  " />
            {data?.shop?.title}
          </Link>
          <h3 className="flex text-base font-medium text-gray-900 gap-2.5">
            <MapPinIcon className="h-6 w-6" />
            {data?.shop?.primary_address}
          </h3>
          <div className="h-[1px] w-full bg-gray-300" />

          <div className="w-full flex items-center justify-start gap-4 ">
            <div className="min-w-max flex items-start justify-center flex-col gap-3 ">
              <div className="flex justify-between items-center   gap-2">
                <h2 className="font-bold text-sm ">قیمت فروشگاه :</h2>
                <span className="text-xs font-bold  bg-gray-50 w-28 h-9 flex justify-center items-center rounded-lg border-2 ">
                  {useRialStyle(data?.price)}
                  تومان
                </span>
              </div>
              <div className="flex justify-between items-center text-green-500 gap-4 w-full ">
                <h2 className="font-bold text-sm ">قیمت دولتی :</h2>
                <span
                  className="text-xs font-bold  bg-green-50 w-28 h-9 flex justify-center items-center 
                rounded-lg border-2 border-green-400 text-navy "
                >
                  {useRialStyle(product_subsidized_price)}
                  تومان
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col mb-4 gap-2">
              <h3
                className={`flex text-sm font-medium text-green-500  ${
                  !subsidy?.quantity_available_for_subsidy && "text-red-600"
                }  gap-2.5 px-8 translate-x-4`}
              >
                {subsidy?.quantity_available_for_subsidy
                  ? `
                  تعداد ${subsidy?.quantity_available_for_subsidy} عدد از این
                  کالا شامل یارانه ${subsidy?.product_category} می باشد
                  `
                  : "این کالا شامل یارانه نمیباشد"}
              </h3>
              <div className=" flex items-center justify-between  w-[22rem] mb-2">
                <div className="w-full h-[1px] bg-gray-500 rounded-full" />
              </div>
            </div>

            <h2 className=" min-w-max font-bold text-lg">
              {useRialStyle(
                subsidy?.final_line_price ? subsidy?.final_line_price : price
              )}
              تومان
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end m-2">
        <div
          className="cursor-pointer"
          onClick={() => deletItem.mutate({ id: id, shopId: Number(shopId) })}
        >
          <GrayTrashIcon />
        </div>
      </div>
    </div>
  );
};

export default BasketItem;

{
  /* <div className="flex flex-col gap-3 mt-4 ">
            {subsidy?.quantity ? (
              <div>
                <h2 className="font-bold text-xl">
                  {useRialStyle(subsidy?.final_line_price)}
                  تومان
                </h2>
                <p className="line-through text-gray-400 text-sm font-medium ">
                  {useRialStyle(price)}
                </p>
              </div>
            ) : (
              <h2 className="font-bold text-xl">
                {Number(data?.price)?.toLocaleString("fa-IR")} تومان
              </h2>
            )}
            {subsidy?.quantity && (
              <h3 className="flex text-sm font-medium text-green-500 gap-2.5">
                تعداد {subsidy?.quantity} عدد از این کالا شامل یارانه{" "}
                {subsidy?.product_category} می باشد
              </h3>
            )}
          </div> */
}
