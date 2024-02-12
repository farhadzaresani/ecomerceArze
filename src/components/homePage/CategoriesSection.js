import Link from "next/link";
import SectionTag from "../ui/icons/SectionTag";
import Image from "next/image";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

// const categories = [
//   {
//     col: 1,
//     title: " محصولات سرمایشی",
//   },
//   { col: 2, title: " شیر آلات" },
//   {
//     col: 3,
//     title: "محصولات گرمایشی ",
//   },
//   {
//     col: 4,
//     title: "آهن آلات",
//   },
//   {
//     col: 5,
//     title: " سیمان",
//   },
//   {
//     col: 6,
//     title: " لاستیک",
//   },
//   {
//     col: 7,
//     title: "پروتئین و مرغ",
//   },
// ];

const CategoriesSection = ({ categories }) => {
  return (
    <div className='mt-10'>
      <div className='hidden md:flex mt-7 '>
        <div className=' flex justify-center items-center gap-3 p-3 pr-0 rounded-l-lg  bg-cream '>
          <SectionTag />
          <h1 className='font-medium text-base md:text-2xl'>
            دسته بندی محصولات
          </h1>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-1 mb-4 md:hidden'>
        <h1 className='text-gray-700 text-base font-bold'>دسته بندی محصولات</h1>
        <div className='h-1 w-28 bg-cream ' />
      </div>
      <div
        className='  [&>*:nth-child(2)]:border-b-[1px] [&>*:nth-child(3)]:border-t-[1px] [&>*:nth-child(1)]:bg-gray-50 [&>*:nth-child(4)]:bg-gray-50
        md:[&>*:nth-child(2)]:border-b-0 md:[&>*:nth-child(3)]:border-t-0 md:[&>*:nth-child(1)]:bg-transparent md:[&>*:nth-child(4)]:bg-transparent         
        md:flex justify-center flex-wrap md:gap-14 h-96 md:h-auto md:mx-10 mx-4 md:mt-10 md:p-10 rounded-[50px] md:bg-gray-200 grid grid-cols-2 border-[1px] overflow-hidden '
      >
        {categories?.map((item, i) => {
          return (
            // <Link
            //   href={`products-list?category=${item?.id}`}
            <div
              key={item?.id}
              className={`flex flex-col justify-center items-center odd:border-l-[1px]  ${
                i > 3 && "hidden md:flex"
              }`}
            >
              <Image
                width={260}
                height={260}
                className={` drop-shadow-md md:rounded-2xl rounded-full max-w-[94px] md:max-w-full object-cover w-24 h-24  `}
                src={item?.categoryfile_set[0]?.url}
                alt='categories'
              />
              <h2 className='font-normal md:font-medium text-xs md:text-xl text-navy md:text-black mt-5 '>
                {item.title}
              </h2>
            </div>
          );
        })}
      </div>
      <div className='md:hidden flex justify-center items-center text-teal-400'>
        <Link
          href='/categories'
          className='flex justify-center items-center mt-4 text-xs font-bold'
        >
          <h1>مشاهده همه دسته بندی ها</h1>
          <ChevronLeftIcon className='h-5 w-5' />
        </Link>
      </div>
    </div>
  );
};

export default CategoriesSection;
