import Star from "@/components/ui/icons/Star";
import Image from "next/image";
import Link from "next/link";

import useRialStyle from "@/hooks/useRialStyle";

const ProductCard = ({ title, price, id, subsidized_price, image }) => {
  return (
    <>
      {/* //desktop */}
      <Link
        href={`/product/${id}/`}
        className='bg-white md:max-w-[264px] md:w-[264px] md:max-h-[380px] h-[200px] md:h-[380px]  md:rounded-3xl  flex-col items-center justify-between
      hover:shadow-xl hover:-translate-y-1 transition-all duration-200 hidden md:flex  '
      >
        <div className='  md:max-h-[230px] flex flex-col md:justify-center justify-between items-center '>
          <div className=' md:min-h-[200px] w-24 h-24 md:w-52 md:h-52 flex justify-center items-center'>
            <Image
              className={`rounded-2xl  mt-8   `}
              blurDataURL='/assets/svgs/imageLoader.svg'
              placeholder='blur'
              priority='true'
              alt='product'
              width={150}
              height={150}
              src={image ? image : "/assets/svgs/imageLoader.svg"}
              quality={10}
              unoptimized={true}
            />
          </div>

          <h1 className='text-black text-sm font-medium text-center break-words max-w-lg mt-6 md:mt-3 px-2 md:px-0  '>
            {title ? title : "تیرآهن سنگین 14 ذوب آهن"}
          </h1>
        </div>
        <div className='flex flex-col w-full'>
          <div className='hidden md:flex justify-center items-center gap-1 pb-1 bg-white text-navy '>
            <p className='text-xs font-bold flex justify-center items-center gap-1'>
              <span className='text-gray-400 text-[10px] '>(30)</span>
              4.2
            </p>
            <Star />
          </div>

          <div className='w-full flex items-center justify-start flex-col bg-transparent  '>
            <div
              className={`md:bg-navy md:text-white w-full flex flex-col justify-center items-center py-1.5 h-12 rounded-b-2xl ${
                subsidized_price && "translate-y-3"
              } z-20`}
            >
              <div className='flex flex-col  items-end md:items-center pt-1 px-5 md:px-0 py-3 md:py-0 w-full '>
                <div className='flex justify-center items-center gap-1'>
                  <h5 className='text-xs font-bold text-white hidden md:block '>
                    قیمت فروشگاه :{" "}
                  </h5>
                  <h2 className='font-bold '>
                    {price ? useRialStyle(price) : "3,744,000 "}
                  </h2>
                  <p className='text-xs font-medium '>تومان</p>
                </div>
              </div>
            </div>
            {subsidized_price && (
              <div className='bg-green-500 text-white w-full hidden md:flex flex-col justify-end items-center py-1.5 h-12 rounded-b-2xl z-10'>
                <div className='flex flex-col justify-center items-center pt-1 '>
                  <div className='flex justify-center items-center gap-1'>
                    <h5 className='text-xs font-bold text-white hidden md:block'>
                      قیمت دولتی :{" "}
                    </h5>
                    <h2 className='font-bold'>
                      {useRialStyle(subsidized_price)}
                    </h2>
                    <p className='text-xs font-medium '>تومان</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Link>
      {/* //mobile */}
    </>
  );
};

export default ProductCard;
