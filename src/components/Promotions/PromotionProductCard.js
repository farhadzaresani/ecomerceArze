import Star from "@/components/ui/icons/Star";
import Image from "next/image";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const PromotionProductCard = ({ title, price, id, image }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Link
      href={`/product/${id}`}
      className='bg-white max-w-[264px] w-[264px] max-h-[380px] h-[380px]  rounded-3xl flex flex-col items-center justify-between
      hover:shadow-xl hover:-translate-y-1 transition-all duration-200 '
    >
      <div className=' max-w-[200px] flex flex-col  '>
        <div className='flex justify-center items-center my-1 text-red-600 gap-2  '>
          <ClockIcon className='h-4 w-4 ' />

          <h1 className=' text-base font-bold '>تخفیف ویژه</h1>
        </div>
        <div className='min-h-[200px] '>
          <Image
            className={`rounded-2xl  mt-8  ${isLoading && "animate-pulse"} `}
            blurDataURL='/assets/svgs/imageLoader.svg'
            placeholder='blur'
            priority='true'
            alt='product'
            width={150}
            height={150}
            quality={20}
            src={image ? image : "/assets/svgs/imageLoader.svg"}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>

        <h1 className='text-black text-sm font-medium text-center break-words max-w-lg mt-3 '>
          {title ? title : "تیرآهن سنگین 14 ذوب آهن"}
        </h1>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex justify-center items-center gap-1 pb-1 bg-white text-navy '>
          <p className='text-xs font-bold flex justify-center items-center gap-1'>
            <span className='text-gray-400 text-[10px] '>(30)</span>
            4.2
          </p>
          <Star />
        </div>
        <div className='bg-navy text-white w-full flex  justify-between  items-center py-1.5 px-8  h-12.5 rounded-b-2xl '>
          <div className='bg-white text-red-600 px-3 text-base font-bold rounded-full max-h-5'>
            <h1>11%</h1>
          </div>
          <div className='flex flex-col justify-center items-center pt-1  '>
            <div className='flex justify-center items-center gap-1'>
              <h2 className='font-bold '>
                {price ? Number(price)?.toLocaleString("fa-IR") : "3,744,000 "}
              </h2>
              <p className='text-xs font-medium '>تومان</p>
            </div>
            <h1 className='text-xs font-normal line-through'>4,000,000</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PromotionProductCard;
