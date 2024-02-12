import React from "react";

const GiftCodeSection = ({
  confirmGiftCode,
  giftCardInput,
  setGiftCardInput,
}) => {
  return (
    <div className='flex justify-between items-center w-full bg-white rounded-3xl p-8 mt-4 border-[2px] border-gray-200  '>
      <div>
        <h3 className='font-medium'>در صورت داشتن کد تخفیف آن را وارد کنید</h3>
      </div>
      <div className='flex gap-4'>
        <input
          value={giftCardInput}
          onChange={(e) => setGiftCardInput(e.target.value)}
          className='border-2 rounded-md py-2 px-1'
          placeholder='کد تخفیف'
          type='text'
        />
        <button
          onClick={() => confirmGiftCode.mutate()}
          className='bg-teal-400 rounded-md text-white font-bold px-6 py-2'
        >
          ثبت کد
        </button>
      </div>
    </div>
  );
};

export default GiftCodeSection;
