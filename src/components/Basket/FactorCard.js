import useRialStyle from "@/hooks/useRialStyle";
import React from "react";

const FactorCard = ({
  amount,
  newPrice,
  itemQuantity,
  step,
  setStep,
  finallPrice,
  selectHowToPay,
}) => {
  return (
    <div className='hidden md:flex flex-col gap-4 pt-10  border-[1px] text- pb-4 min-w-1/5 px-4 items-center font-bold text-xl bg-white w-80  rounded-3xl '>
      <div
        className=' w-4/5  gap-5 flex flex-col
       '
      >
        {step === 0 && (
          <div className='flex flex-col justify-center items-center gap-2 '>
            <h1 className='font-normal text-base '>
              مجموع قیمت کالا ها ({itemQuantity})
            </h1>
            {amount && (
              <h2 className='border-[1px] rounded-lg py-2 px-4'>
                {useRialStyle(amount)} تومان
              </h2>
            )}
          </div>
        )}
        {step > 0 && (
          <div className='flex flex-col justify-center items-center gap-2 '>
            <h1 className='font-normal text-base '>
              مجموع سبد خرید با تخفیف({itemQuantity})
            </h1>
            {amount && (
              <h2 className='border-[1px] rounded-lg py-2 px-4'>
                {useRialStyle(finallPrice)} تومان
              </h2>
            )}
          </div>
        )}
        {/* <div className='text-xs flex flex-col justify-center items-center text-green-500'>
          <h2>مقدار یارانه استفاده شده</h2>
          <h2 className='text-[10px]'>(22.5%) 308,000 تومان</h2>
        </div> */}
        {step > 0 && selectHowToPay == 1 && (
          <div className='text-sm text-red-600 flex justify-between border-y-[1px] py-3'>
            <div className='flex gap-1'>
              <h2>هزینه ارسال</h2>
              {/* <select className='text-xs text-teal-300 bg-teal-100 rounded-md border-[1px] border-teal-300'>
                <option>جزئیات</option>
              </select> */}
            </div>
            <h2>36,000 تومان</h2>
          </div>
        )}
        <div className='flex flex-col justify-center items-center gap-2 '>
          {step > 0 && (
            <>
              <h1 className='font-normal text-base '>قیمت نهایی محاسبه شده</h1>

              <h2 className='border-[1px] rounded-lg py-2 px-4'>
                {selectHowToPay === "1"
                  ? useRialStyle(Number(finallPrice) + 36000)
                  : useRialStyle(Number(finallPrice))}{" "}
                تومان
                {/* {step > 0
              ? `${useRialStyle(Number(amount) + 30000)} تومان`
            : `${useRialStyle(amount)} تومان`} */}
              </h2>
            </>
          )}
        </div>

        {finallPrice && step === 0 && (
          <div className='flex flex-col justify-center items-center gap-2 '>
            <h1 className='font-normal'> مجموع سبد خرید با تخفیف</h1>
            <h2>{useRialStyle(finallPrice)} تومان</h2>
          </div>
        )}
      </div>

      {/* <div className='flex flex-col justify-center items-center gap-8  '>
        <h1 className='font-normal text-base'>انتخاب نحوه پرداخت :</h1>
        <form className='flex flex-col gap-4'>
          <div className=''>
            <input
              value={"آنلاین"}
              name='payment'
              id='online'
              className='ml-3 accent-navy appearance-none rounded-full border-4 ring-2  ring-gray-400 checked:ring-navy border-white w-4 h-4 checked:bg-navy'
              type='radio'
            />
            <label htmlFor='online'>آنلاین</label>
          </div>
          <div>
            <input
              value={"پرداخت در محل"}
              name='payment'
              id='incase'
              type='radio'
              className='ml-3 accent-navy appearance-none rounded-full border-4 ring-2 ring-gray-400 checked:ring-navy border-white w-4 h-4 checked:bg-navy'
            />
            <label htmlFor='incase'>پرداخت در محل</label>
          </div>
        </form>
      </div> */}
      {step === 0 && (
        <button
          onClick={() => setStep(1)}
          className='bg-green-500 text-white  w-full py-2 rounded-lg '
        >
          ثبت سفارش
        </button>
      )}
      {step === 1 && (
        <button
          onClick={() => setStep(2)}
          className='bg-green-500 text-white  w-full py-2 rounded-lg '
        >
          تایید و ادامه
        </button>
      )}
      {step === 2 && (
        <button className='bg-red-600 text-white  w-full py-2 rounded-lg '>
          پرداخت
        </button>
      )}
    </div>
  );
};

export default FactorCard;
