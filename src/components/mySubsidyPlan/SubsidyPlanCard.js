import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const SubsidyPlanCard = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className=" flex flex-col justify-center items-center gap-3 max-w-[210px] ">
      <Link
        className=" relative w-full"
        href={`products-list?plan=${item?.id}`}
      >
        <h1 className="flex items-center gap-2 text-sm text-regalBlue font-semibold">
          <div className="w-2 h-2 bg-gray-400 rounded-full  " />
          {item.title}
        </h1>
      </Link>
      <Link className=" relative" href={`products-list?plan=${item?.id}`}>
        <div className=" overflow-hidden rounded-xl ">
          <Image
            width={210}
            height={129}
            quality={10}
            src={item?.image?.url ? item?.image?.url : ""}
            priority={true}
            className="object-cover max-h-32  blur-2xl   "
            alt="subsidy cove"
          />
        </div>
        <Image
          width={210}
          height={129}
          src={item?.image?.url ? item?.image?.url : ""}
          priority={true}
          onLoad={() => {
            setIsLoading(false);
          }}
          className={`object-cover  rounded-xl max-h-32 border-2 border-white -translate-x-3 translate-y-3 absolute top-0 z-10 
         ${isLoading && ""} `}
          alt="subsidy"
        />
      </Link>
    </div>
  );
};

export default SubsidyPlanCard;
