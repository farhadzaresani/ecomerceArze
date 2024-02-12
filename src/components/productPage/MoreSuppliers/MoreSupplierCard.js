import { TrashIcon } from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { TruckIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MoreSupplierCard = ({
  price,
  title,
  location,
  id,
  submitOrder,
  basket,
}) => {
  const thisProcutInBasket = basket?.filter(
    (item) => item.product.product.unique_product_code === id
  );

  const [addButton, setAddButton] = useState(true);
  const [submitShift, setSubmitShift] = useState(true);
  const [counter, setCounter] = useState(
    thisProcutInBasket?.length > 0 ? thisProcutInBasket[0]?.quantity : 0
  );
  useEffect(() => {
    if (!submitShift) {
      if (counter > 0) {
        const timeoutId = setTimeout(() => {
          submitOrder.mutate({ id: id, quan: counter });
        }, 1000);
        return () => clearTimeout(timeoutId);
      }
    } else {
      setSubmitShift(false);
    }
  }, [counter]);

  const submitProduct = () => {
    if (counter < 1) {
      setCounter(1);
    }
  };

  return (
    <div className='shadow-[0px_1px_3px_rgba(0,0,0,0.08)] flex justify-between  rounded-2xl m-5 bg-white  '>
      <div className='bg-cream  py-9  rounded-r-2xl w-[235px] max-h-[98px] flex justify-center items-center'>
        <h1 className='text-gray-600 text-xl font-medium  text-center  '>
          {title}
        </h1>
      </div>
      <div className='grid grid-cols-5 justify-between items-center px-7 w-full'>
        <div className='flex flex-col justify-center items-center gap-2 font-bold text-base '>
          <h3>
            عملکرد فروشنده | <span className='text-orange-400'>متوسط</span>
          </h3>
          <div className='h-[2px] w-full bg-cream' />
          <div className='flex justify-center items-center gap-2'>
            <h3 className='text-xs'>رضایت مشتریان</h3>
            <h5 className='bg-orange-400 text-white font-medium px-4 py-1 rounded-lg'>
              70%
            </h5>
          </div>
        </div>
        <div className='text-gray-800 gap-1 flex justify-start  items-center mr-16 '>
          <MapPinIcon className='w-6 h-6 ' />
          <h5 className='font-medium text-base'>{location.slice(0, 18)}... </h5>
        </div>
        <div className='text-gray-800 gap-1 flex justify-center items-center'>
          <TruckIcon className='w-5 h-5 ' />

          <h5 className='font-medium text-base'>از 30،000 تومان</h5>
        </div>

        <div className='flex justify-center items-start gap-6 pt-5  '>
          {/* <div className='bg-teal-400 h-5 w-[53px] flex rounded-full'>
            <h5 className=' text-white m-auto font-bold text-base rounded-full'>
              11%
            </h5>
          </div> */}
          <div className='flex flex-col justify-center items-center  '>
            <h5 className='text-black font-bold text-base'>
              {Number(price)?.toLocaleString("fa-IR")}
              <span className='font-medium text-xs'>تومان</span>
            </h5>
            {/* <p className=' line-through text-xs font-normal text-gray-500'>
              4,000,000
            </p> */}
          </div>
        </div>
        <div className='flex justify-end   items-center gap-8 '>
          {counter < 1 ? (
            <button
              onClick={submitProduct}
              className='text-white font-bold text-base bg-green-500 py-2 px-5 rounded-xl '
            >
              افزودن به سبد خرید
            </button>
          ) : (
            <div className='flex justify-between items-center gap-5  border-2 border-green-500   rounded-xl py-1.5 px-5'>
              <button
                className=' text-green-500 text-xl rounded-md font-bold flex justify-center items-center'
                onClick={() => setCounter(counter + 1)}
              >
                +
              </button>
              <input
                value={counter}
                onChange={(e) => setCounter(e.target.value)}
                minLength={"1"}
                maxLength={"2"}
                type='number'
                className=' w-7 bg-gray-50 font-bold text-gray-500 h-7 rounded-[4px] border-2 border-gray-200 
             outline-none text-center'
              />
              {/* {counter > 1 ? ( */}
              <button
                className='text-red-600 text-xl  rounded-md font-bold flex justify-center items-center'
                onClick={() => setCounter(counter - 1)}
              >
                -
              </button>
              {/* ) : ( */}
              <div className='text-red-600 flex justify-center items-center gap-7'>
                <TrashIcon
                  onClick={() => setAddButton(!addButton)}
                  className='h-5 w-5 cursor-pointer '
                />
                {/* <h1 className='text-xs font-semibold'>حذف</h1> */}
              </div>
              {/* )} */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreSupplierCard;
