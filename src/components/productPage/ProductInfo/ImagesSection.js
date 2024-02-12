import Image from "next/image";
import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/20/solid";
import { ShareIcon } from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getBasketFromRedux } from "@/store/reducers/basketReducer";

const ImagesSection = ({ imageList, breadCrumbs }) => {
  const router = useRouter();

  return (
    <div className=" flex flex-col justify-center items-center bg-white md:bg-transparent p-4   ">
      <div className="hidden md:flex gap-6 mb-2">
        <HeartIcon className="h-6 w-6 text-red-500" />
        <ShareIcon className="h-6 w-6 text-black" />
        <BellAlertIcon className="h-6 w-6 text-black" />
        <ChartBarIcon className="h-6 w-6 text-black" />
      </div>

      <div className="block ">
        <Image
          blurDataURL="/assets/svgs/imageLoader.svg"
          placeholder="blur"
          priority="true"
          alt="product"
          className="rounded-2xl max-h-44 object-contain  "
          quality={10}
          unoptimized
          width={352}
          height={352}
          src={
            imageList?.[0] ? imageList?.[0].url : "/assets/svgs/imageLoader.svg"
          }
        />
      </div>
      <div className=" flex justify-end flex-row-reverse gap-1 font-semibold text-sm py-3.5  w-full md:hidden">
        {breadCrumbs?.map((item, i) => {
          return (
            <div className=" flex gap-1 cursor-pointer " key={`${item}_${i}`}>
              {i !== breadCrumbs.length - 1 && (
                <p className="text-gray-400">/</p>
              )}
              <p
                className={`text-teal-400 text-xs ${
                  i === breadCrumbs.length && "text-navy"
                }`}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesSection;
