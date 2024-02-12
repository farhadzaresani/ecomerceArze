import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { getCities } from "@/api/Api's";
import { useState } from "react";

const AddressDetails = ({ closeMenu, submitAddress }) => {
  const [city, setCity] = useState(null);
  const [value, setValue] = useState({
    city_name: "",
    province: "",
    number: "",
    street_address_1: "",
  });

  const { data } = useQuery({
    queryFn: getCities,
    queryKey: ["cities"],
  });

  const provinceHandler = (data) => {
    setCity(data);
    setValue({ ...value, province: data });
  };
  const cityHandler = (data) => {
    setValue({ ...value, city_name: data });
  };
  const streetAddressHandler = (data) => {
    setValue({ ...value, street_address_1: data });
  };
  const numberHandler = (data) => {
    setValue({ ...value, number: data });
  };

  const cityData = data?.results?.filter((ci) => ci.title == city);

  return (
    <div
      className="bg-white  min-w-[645px] min-h-[481px] max-h-[481px]  flex flex-col justify-between items-center  rounded-3xl 
shadow-[0px_4px_10px_rgba(0,0,0,0.12)]"
    >
      <div className="flex flex-col justify-center items-center gap-2 w-full px-4 ">
        <XMarkIcon
          onClick={closeMenu}
          className="h-6 w-6 text-black absolute left-4 top-4 cursor-pointer"
        />
        <div className=" border-b-2 w-full h-16 flex justify-center items-center ">
          <h1 className="font-bold text-base text-gray-700"> جزئیات آدرس</h1>
        </div>
      </div>
      <div className=" min-h-fit flex flex-col gap-10 p-4 overflow-auto ">
        <div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              نشانی کامل{" "}
            </label>
            <textarea
              onChange={(e) => {
                streetAddressHandler(e.target.value);
              }}
              className="resize-none w-[599px] h-[67px] rounded-lg outline-none border-2 p-2 "
            />
          </div>
          <div className="flex gap-4 mt-5">
            <div className="flex flex-col justify-center  w-full gap-2   relative">
              <label className="font-medium text-sm text-gray-700 ">
                استان
              </label>
              <select
                onChange={(e) => provinceHandler(e.target.value)}
                className="border-[1px] p-2  rounded-lg appearance-none"
              >
                {data?.results?.map((item) => {
                  return <option value={item.title}>{item.title}</option>;
                })}
              </select>
              <ChevronDownIcon className="h-6 w-6 text-black absolute left-2 top-9" />
            </div>
            <div className="flex flex-col justify-center  w-full gap-2   relative">
              <label className="font-medium text-sm text-gray-700 ">شهر</label>
              <select
                onChange={(e) => cityHandler(e.target.value)}
                disabled={!city}
                className="border-[1px] p-2  rounded-lg appearance-none"
              >
                {cityData &&
                  cityData[0]?.city_set?.map((item) => {
                    return <option>{item.title}</option>;
                  })}
              </select>
              <ChevronDownIcon className="h-6 w-6 text-black absolute left-2 top-9" />
            </div>
            <div className="flex flex-col justify-center  w-full gap-2   relative">
              <label className="font-medium text-sm text-gray-700 ">محله</label>
              <select className="border-[1px] p-2  rounded-lg appearance-none">
                <option>ولنجک</option>
              </select>
              <ChevronDownIcon className="h-6 w-6 text-black absolute left-2 top-9" />
            </div>
          </div>
          <div className="flex gap-4 mt-5 ">
            <div className="flex flex-col justify-center   gap-2   relative">
              <label className="font-medium text-sm text-gray-700 ">پلاک</label>
              <input
                onChange={(e) => {
                  numberHandler(e.target.value);
                }}
                type="text"
                className="border-[1px] p-2  rounded-lg appearance-none outline-none max-w-[100px]"
              />
            </div>
            <div className="flex flex-col justify-center   gap-2   relative">
              <label className="font-medium text-sm text-gray-700 ">واحد</label>
              <input
                type="text"
                className="border-[1px] p-2  rounded-lg appearance-none outline-none max-w-[100px]"
              />
            </div>
            <div className="flex flex-col justify-center   gap-2   relative">
              <label className="font-medium text-sm text-gray-700 ">
                کدپستی
              </label>
              <input
                placeholder="ده رقم بدون فاصله"
                type="text"
                className="border-[1px] p-2 text-center rounded-lg appearance-none outline-none max-w-[162px]"
              />
            </div>
          </div>
          {/* <div>
            <div className=' border-t-2 mt-5 w-full pt-5 flex justify-center items-center '>
              <h1 className='font-bold text-base text-gray-700'>
                {" "}
                جزئیات آدرس
              </h1>
            </div>
            <div className='flex  items-center gap-1.5'>
              <input type='checkbox' className='w-5 h-4 accent-regalBlue' />
              <label className='text-xs font-medium'>
                گیرنده سفارش خودم هستم
              </label>
            </div>
            <div className='flex justify-between gap-6 mt-2.5'>
              <div className='flex flex-col justify-center   gap-2   relative'>
                <label className='font-medium text-sm text-gray-700 '>
                  نام
                </label>
                <input
                  type='text'
                  className='border-[1px] p-2  rounded-lg appearance-none outline-none max-w-[137px] '
                />
              </div>
              <div className='flex flex-col justify-center   gap-2   relative'>
                <label className='font-medium text-sm text-gray-700 '>
                  نام خانوادگی
                </label>
                <input
                  type='text'
                  className='border-[1px] p-2  rounded-lg appearance-none outline-none w-[205px] '
                />
              </div>
              <div className='flex flex-col justify-center   gap-2   relative'>
                <label className='font-medium text-sm text-gray-700 '>
                  شماره موبایل
                </label>
                <input
                  placeholder='09123456789'
                  type='text'
                  className='border-[1px] p-2  rounded-lg appearance-none outline-none w-[225px] '
                />
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
      <div className="shadow-md w-full flex bg-gray-50 justify-between px-7 item-center pb-4 rounded-b-3xl ">
        <button className="bg-cream text-navy w-full max-w-[218px] font-bold rounded-lg mt-6 flex justify-center items-center  px-5 py-2.5 ">
          <ArrowRightIcon className="h-6 w-6 " />
          ویرایش موقعیت مکانی
        </button>
        <button
          onClick={() => submitAddress.mutate(value)}
          className="bg-navy text-white w-full max-w-[108px] font-bold rounded-lg mt-6 flex  px-5 py-2.5 "
        >
          ثبت آدرس
        </button>
      </div>
    </div>
  );
};

export default AddressDetails;
