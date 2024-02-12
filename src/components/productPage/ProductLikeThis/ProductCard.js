import useRialStyle from "@/hooks/useRialStyle";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ title, price, imageUrl, id }) => {
  return (
    <Link
      href={`/product/${id}`}
      className='min-w-[232px] min-h-[299px] bg-white w-[232px] pt-[20px]  rounded-2xl flex flex-col justify-between items-center '
    >
      <div className='block w-auto h-auto'>
        <Image
          blurDataURL='/assets/svgs/imageLoader.svg'
          placeholder='blur'
          priority='true'
          alt='product'
          className='rounded-2xl'
          width={200}
          height={200}
          src={imageUrl ? imageUrl : "/assets/svgs/imageLoader.svg"}
        />
      </div>
      <h1 className='text-black text-sm font-medium mt-[16px]'>{title}</h1>
      <div className='bg-navy text-white w-full flex justify-center items-center py-2.5 px-4 rounded-b-2xl '>
        {/* <div>
          <p className='bg-white text-teal-400 font-bold px-4 rounded-2xl shadow-[0_0px_10px_1px_rgba(0,0,0,0.31)]'>
            11%
          </p>
        </div> */}
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center gap-1'>
            <h2 className='font-bold '>{useRialStyle(price)}</h2>
            <p className='text-xs font-medium '>تومان</p>
          </div>
          {/* <p className='line-through text-xs text-gray-500'>4,000,000</p> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
