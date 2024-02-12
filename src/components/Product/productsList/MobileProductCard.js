import useRialStyle from "@/hooks/useRialStyle";
import Image from "next/image";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

const MobileProductCard = ({ title, price, id, subsidized_price, image }) => {
  const [inputValue, setInputValue] = useState(0);
  const increase = () => {
    setInputValue(inputValue + 1);
  };
  const decrease = () => {
    setInputValue(inputValue - 1);
  };

  return (
    <Link
      href={`/product/${id}/`}
      className="flex flex-col justify-center items-center gap-3 w-full py-10 px-3   "
    >
      {/* <div className="  rounded w-full  h-[160px]  flex justify-center items-center "> */}
      <Image
        blurDataURL="/assets/svgs/imageLoader.svg"
        placeholder="blur"
        priority="true"
        alt="product"
        width={160}
        height={160}
        src={image ? image : "/assets/svgs/imageLoader.svg"}
        quality={10}
        unoptimized={true}
        className="  rounded w-[160px]  h-[160px]  flex justify-center items-center "
      />
      {/* </div> */}
      <div className="w-full flex justify-start">
        <h1 className="text-sm font-medium text-center">{title}</h1>
      </div>
      <div className="w-full flex justify-end">
        <h3>
          {useRialStyle(price)} <sub className="z-0"> تومان</sub>
        </h3>
      </div>
    </Link>
  );
};

export default MobileProductCard;
