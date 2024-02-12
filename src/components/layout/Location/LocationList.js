import { setAddress } from "@/store/reducers/addressReducer";
import { PlusCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useDispatch } from "react-redux";

const LocationList = ({ nextStep, closeMenu, addressList }) => {
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={nextStep}
      className='bg-white min-w-[645px] max-h-[481px]  flex flex-col justify-between items-center  rounded-3xl 
  shadow-[0px_4px_10px_rgba(0,0,0,0.12)]'
    >
      <div className='flex flex-col justify-center items-center gap-2 w-full px-4 '>
        <XMarkIcon
          onClick={closeMenu}
          className='h-6 w-6 text-black absolute left-4 top-4 cursor-pointer'
        />
        <div className=' border-b-2 w-full h-16 flex justify-center items-center '>
          <h1 className='font-bold text-base text-gray-700'>انتخاب آدرس</h1>
        </div>
      </div>
      <div className=' min-h-fit  w-full flex flex-col gap-10 p-4 overflow-auto '>
        {addressList?.results?.map((item) => {
          return (
            <div key={item.province}>
              <input
                onChange={() => dispatch(setAddress(item))}
                value={"پرداخت در محل"}
                name='payment'
                id='location'
                type='radio'
                className='ml-3 accent-navy appearance-none rounded-full border-4 ring-2 ring-gray-400 checked:ring-navy border-white w-4 h-4 checked:bg-navy'
              />
              <label htmlFor='location'>
                {item?.province}, {item?.city_name} , {item.street_address_1}
              </label>
            </div>
          );
        })}
      </div>
      <div className='shadow-md w-full flex bg-gray-50 justify-center item-center pb-4 rounded-b-3xl '>
        <button className='bg-navy text-white w-full max-w-[161px] font-bold rounded-lg mt-6 flex  px-5 py-2.5 m-auto '>
          <PlusCircleIcon className='h-6 w-6 ' />
          افزودن آدرس
        </button>
      </div>
    </form>
  );
};

export default LocationList;
