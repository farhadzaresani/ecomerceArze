import MultiRangeSlider from "@/components/filters/rangeInput/MultiRangeSlider";
import useRialStyle from "@/hooks/useRialStyle";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import {
  ChevronLeftIcon,
  XMarkIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useState } from "react";

const MobileFilterPage = ({ closeFilterTab }) => {
  const router = useRouter();
  const [filterType, setFilterType] = useState(0);
  const [rangeNumber, setRangeNumber] = useState({ min: 0, max: 231857 });

  const submitPrice = () => {
    const currentQuery = router.query;
    const newQuery = {
      ...currentQuery,
      min: rangeNumber.min,
      max: rangeNumber.max,
    };

    router.push({
      pathname: "/products-list",
      query: newQuery,
    });
    closeFilterTab();
  };

  const backButtonHanlder = () => {
    setFilterType(0);
  };

  return (
    <div className='fixed top-0 w-full h-full bg-white z-50 p-4 '>
      {filterType === 0 && (
        <>
          <div className='w-full flex justify-between items-center pb-4'>
            <div className='flex justify-center items-center gap-1'>
              <AdjustmentsHorizontalIcon className='h-6 w-6 text-gray-700' />
              <h3 className='text-xs font-bold text-gray-700'>فیلتر ها</h3>
            </div>
            <button onClick={closeFilterTab}>
              <XMarkIcon className='h-6 w-6 text-navy ' />
            </button>
          </div>
          <div>
            <button
              onClick={() => setFilterType(1)}
              className='w-full flex justify-between items-center border-b py-4 text-xs'
            >
              برند
              <ChevronLeftIcon className='h-4 w-4' />
            </button>
            <button
              onClick={() => setFilterType(2)}
              className='w-full flex justify-between items-center border-b py-4 text-xs'
            >
              محدوده قیمت
              <ChevronLeftIcon className='h-4 w-4' />
            </button>
          </div>
        </>
      )}
      {filterType === 1 && (
        <>
          <div className='w-full flex justify-between items-center pb-4'>
            <button
              className='flex justify-center items-center gap-2'
              onClick={backButtonHanlder}
            >
              <ArrowRightIcon className='h-5 w-5 text-gray-700 ' />
              <h3 className='text-xs font-bold text-gray-700'>برند</h3>
            </button>
          </div>
          <div>
            {DUMMYY_BRAND_LIST.map((item, i) => {
              return (
                <div
                  key={item}
                  className='w-full flex justify-start items-center gap-2 border-b py-4 text-xs'
                >
                  <input
                    className=' appearance-none w-4 h-4 border border-gray-400 rounded checked:bg-navy  '
                    type='checkBox'
                  />
                  <label>{item}</label>
                </div>
              );
            })}
          </div>
        </>
      )}
      {filterType === 2 && (
        <div className='flex flex-col justify-between h-full '>
          <div>
            <div className='w-full flex justify-between items-center pb-4'>
              <button
                className='flex justify-center items-center gap-2'
                onClick={backButtonHanlder}
              >
                <ArrowRightIcon className='h-5 w-5 text-gray-700 ' />
                <h3 className='text-xs font-bold text-gray-700'>محدوده قیمت</h3>
              </button>
            </div>
            <div className='w-full mt-10'>
              <MultiRangeSlider
                min={0}
                max={231857}
                rangeNumber={rangeNumber}
                onChange={({ min, max }) =>
                  setRangeNumber({ ...rangeNumber, min: min, max: max })
                }
              />
              <div className='w-full flex justify-between mt-6 px-10'>
                <h3 className='flex justify-center items-center gap-1 text-gray-700 text-xs'>
                  {useRialStyle(rangeNumber.min)}
                  <sub>تومان</sub>
                </h3>
                <h3 className='flex justify-center items-center gap-1 text-gray-700 text-xs'>
                  {useRialStyle(rangeNumber.max)}
                  <sub>تومان</sub>
                </h3>
              </div>
            </div>
          </div>
          <button
            onClick={submitPrice}
            className='bg-teal-500 w-2/3 mx-auto p-2 rounded-lg text-white text-base font-bold'
          >
            ثبت
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileFilterPage;

const DUMMYY_BRAND_LIST = [
  "سیمان مشهد",
  "سیمان اصفهان",
  "آهن سمنان",
  "آهن گیلان",
];
