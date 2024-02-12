import React, { useEffect, useState } from "react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { TruckIcon } from "@heroicons/react/20/solid";
import { BuildingLibraryIcon } from "@heroicons/react/24/outline";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";

function BuyCard({
  submitOrder,
  product,
  supplierName,
  basket,
  deletItem,
  shopId,
  setShowMoreSuppliers,
}) {
  const router = useRouter();

  const thisProcutInBasket = () => {
    const data = basket?.results?.filter(
      (item) =>
        item?.product?.product?.unique_product_code ===
        product?.unique_product_code
    );
    setCounter(data ? data[0]?.quantity : 0);
  };
  const [submitShift, setSubmitShift] = useState(true);
  const [counter, setCounter] = useState();

  useEffect(() => {
    if (!submitShift) {
      if (counter > 0) {
        const timeoutId = setTimeout(() => {
          submitOrder.mutate({
            itemId: product?.prime_shop_product?.id,
            quan: counter,
            shopId: product?.prime_shop_product?.shop?.id,
          });
        }, 1000);
        return () => clearTimeout(timeoutId);
      }
    }
    setSubmitShift(false);
    thisProcutInBasket();
  }, [counter]);

  useEffect(() => {
    thisProcutInBasket();
  }, [router.query.pid]);

  const submitProduct = () => {
    if (!counter) {
      setCounter(1);
    }
  };

  const deleteProduct = () => {
    deletItem.mutate(product.main_shop_product);
    setCounter(0);
  };
  const openMoreProductPage = () => {
    setShowMoreSuppliers(true);
  };

  return (
    <div>
      <div className="bg-white border-[2px] min-h-[299px]  rounded-3xl hidden md:flex flex-col p-4   ">
        <div className="flex justify-between mt-2 ">
          <h4 className="text-gray-900 font-medium text-base">فروشنده</h4>
          <button
            onClick={openMoreProductPage}
            className=" text-teal-400 font-bold text-xs"
          >
            3+ فروشنده دیگر
          </button>
        </div>
        <div className=" text-gray-900 font-bold text-base flex gap-2 mt-6 ">
          <BuildingStorefrontIcon className="h-6 w-6 " />
          <Link
            className="text-teal-400 md:text-black underline md:no-underline"
            href={`/supplier/${shopId}`}
          >
            {supplierName}
          </Link>
        </div>
        <div className="flex md:justify-center items-center gap-2 mt-4 border-b-[1px] md:border-b-0 pb-4 ">
          <h2 className="font-bold text-base text-gray-400 md:text-navy">
            عملکرد فروشنده <span className="text-green-400">عالی</span>
          </h2>
          <div className=" w-[2px] h-5 bg-cream"></div>
          <h2 className="font-bold text-sm text-navy">رضایت مشتریان</h2>
          <h3 className="text-base font-medium text-white bg-green-400 px-3.5 pt-1 rounded-lg">
            85%
          </h3>
        </div>
        <div className="mt-3 md:hidden">
          <h1 className="text-sm text-gray-900">ساعات کاری فروشگاه</h1>
          <div className="text-xs text-gray-500 flex gap-2 mt-4">
            <h3>شنبه تا پنجشنبه</h3>
            <p className="text-teal-400">9 الی 21</p>
          </div>
          <div className="text-xs text-gray-500 flex gap-2 mt-3">
            <h3>جمعه</h3>
            <p className="text-teal-400">9 الی 14</p>
          </div>
        </div>
        {/* <div className='text-gray-900 text-base font-medium flex gap-4 border-t-2 pt-4'>
        <ShieldCheckIcon className='h-6 w-6 ' />
        <h6>گارانتی اصالت و سلامت فیزیکی</h6>
      </div> */}
        {/* <div className='text-gray-900 text-base font-medium flex gap-4'>
        <BuildingLibraryIcon className='h-6 w-6 ' />
        <h6>موجود در انبار فروشنده</h6>
      </div> */}
        {/* <div className='text-xs font-medium text-gray-400 flex gap-3 mr-10'>
        <TruckIcon className='h-4 w-4 ' />
        <p>زمان تحویل : 10 روزه</p>
      </div> */}
        {product?.subsidized_price && (
          <div className=" hidden md:flex justify-between items-start border-t-2 pt-5 mt-5  ">
            <h5 className="text-xs text-gray-400 flex  items-center gap-1">
              <InformationCircleIcon className="w-5 h-5" />
              قیمت دولتی
            </h5>
            {/* <div className='bg-teal-400 h-5 w-[53px] flex rounded-full'>
            <h5 className=' text-white m-auto font-bold text-base rounded-full'>
              11%
            </h5>
          </div> */}
            <div className="hidden md:flex  flex-col justify-center items-center  ">
              <h5 className="text-black font-bold text-base">
                {Number(product?.subsidized_price)?.toLocaleString("fa-IR")}
                <span className="font-medium text-xs">تومان</span>
              </h5>
              {/* <p className=' line-through text-xs font-normal text-gray-500'>
              4,000,000
            </p> */}
            </div>
          </div>
        )}
        <div className="hidden md:flex  justify-between items-start  pt-5 mt-2 mb-10">
          <h5 className="text-xs text-gray-400 flex  items-center gap-1">
            <InformationCircleIcon className="w-5 h-5" />
            قیمت فروشنده
          </h5>
          {/* <div className='bg-teal-400 h-5 w-[53px] flex rounded-full'>
            <h5 className=' text-white m-auto font-bold text-base rounded-full'>
              11%
            </h5>
          </div> */}
          <div className="hidden md:flex  flex-col justify-center items-center  ">
            <h5 className="text-black font-bold text-base">
              {Number(product?.price)?.toLocaleString("fa-IR")}
              <span className="font-medium text-xs">تومان</span>
            </h5>
            {/* <p className=' line-through text-xs font-normal text-gray-500'>
              4,000,000
            </p> */}
          </div>
        </div>
        <div className="hidden md:block ">
          {counter > 0 ? (
            <div className="flex justify-between items-center gap-2  border-2 border-green-500 w-full rounded-full py-2 px-6">
              <button
                className=" text-green-500 text-xl rounded-md font-bold flex justify-center items-center"
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
                className=" w-8 bg-gray-50 font-bold text-gray-500 h-8 rounded-[4px] border-2 border-gray-200 
              outline-none text-center"
              />
              {counter > 1 ? (
                <button
                  className="text-red-600 text-xl  rounded-md font-bold flex justify-center items-center"
                  onClick={() => setCounter(counter - 1)}
                >
                  -
                </button>
              ) : (
                <div className="text-red-600 flex justify-center items-center gap-7">
                  <TrashIcon
                    onClick={deleteProduct}
                    className="h-5 w-5 cursor-pointer "
                  />
                  <h1 className="text-xs font-semibold">حذف</h1>
                </div>
              )}
              <div className="bg-gray-200 w-[0.1em] h-6" />
              <h1 className="text-xs font-semibold flex gap-1 ">
                مشاهده
                <Link className="text-teal-500" href="#">
                  سبد خرید
                </Link>
              </h1>
            </div>
          ) : (
            <button
              onClick={submitProduct}
              className="bg-green-500 hover:bg-green-600 transition-all duration-200 text-white font-bold text-xl py-2 w-full
            rounded-full"
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyCard;
