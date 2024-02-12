import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ClockIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { openLocatinMenu } from "@/store/reducers/locationReducer";
// import ShopLoactionGeo from "./locationModal/shopLoactionGeo";
import dynamic from "next/dynamic";
import MapContainer from "./locationModal/MapContainer";

const DeliveryItem = ({
  storeName,
  id,
  storeAddress,
  selectHowToPay,
  setSelectHowToPay,
  address,
  data,
}) => {
  const [selectDay, setSelectDay] = useState("شنبه 02/06");
  const [selectHour, setSelectHour] = useState();
  const [openLoactionModal, setOpenLocationModal] = useState(false);

  const dispatch = useDispatch();

  const openLocationMenuHandler = (e) => {
    e.preventDefault();
    setOpenLocationModal(true);
  };
  const closeLocationMenuHandler = (e) => {
    e.preventDefault();
    setOpenLocationModal(false);
  };

  return (
    <div className="">
      <div className="bg-white mb-5 py-6 px-9 rounded-t-2xl">
        <form>
          <div className="flex flex-col justify-end  gap-4 relative  ">
            <h2 className="text-lg font-medium">(1) محصول</h2>
            <div className="flex gap-2">
              {data?.lines?.map((item, i) => {
                return (
                  <div className="flex flex-col justify-center items-center">
                    <Image
                      className="rounded-[20px] border-[1px]  border-gray-200"
                      width={85}
                      height={85}
                      src={item?.product?.product?.productimage_set[0]?.url}
                      alt="test"
                    />
                    <span className="w-6 h-6 rounded-md bg-regalBlue text-lg font-medium text-white flex justify-center items-center -translate-y-4  ">
                      {item.quantity}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-t-[1px] mt-6">
            <div className="flex">
              <h5 className="m-auto bg-cream text-black px-5 text-lg font-medium rounded-b-lg ">
                نحوه تحویل سفارش
              </h5>
            </div>
            {/* <div className=' flex items-end'>
            <div className='flex justify-center items-center'>
              <input
                value={"1"}
                onChange={(e) => setSelectHowToPay("1")}
                name='payment'
                id='sendToAddress'
                type='radio'
                checked={selectHowToPay === "1"}
                className='ml-3 accent-navy appearance-none rounded-full border-4 ring-2 ring-gray-400 checked:ring-navy border-white w-4 h-4 checked:bg-navy cursor-pointer'
              />
              <label
                className='text-lg font-bold cursor-pointer'
                htmlFor='sendToAddress'
              >
                ارسال به آدرس
              </label>
            </div>
          </div> */}

            {/* <div
            className={`flex justify-between border-[1px] p-3 rounded-lg mt-4 ${
              selectHowToPay === "1"
                ? "bg-transparent"
                : "bg-gray-200 opacity-60 pointer-events-none"
            }`}
          >
            <div className='font-medium text-base text-gray-700 flex flex-col gap-4'>
              <div className='flex justify-center items-center gap-3.5 text-sm font-medium'>
                <MapPinIcon className='h-7 w-7 ' />
                <h4>
                  {address?.province
                    ? `${address?.city_name} , ${address?.street_address_1}`
                    : "آدرس خود را ثبت کنید"}
                </h4>
              </div>
               <h4>
                <span className='text-gray-400'>تحویل به :</span>
                رضا الماسی
              </h4> 
            </div>
            <div className='text-teal-400 gap-4 flex items-center justify-center'>
              <button onClick={openLocationMenuHandler}>
                انتخاب یا ویرایش آدرس
              </button>
              <ChevronLeftIcon className='h-5 w-5 ' />
            </div>
          </div> */}
          </div>
          <div>
            <div className="flex gap-4 mt-6">
              <div className="flex justify-center items-center">
                <input
                  value={"2"}
                  onChange={(e) => setSelectHowToPay("2")}
                  name="payment"
                  id="inPerson"
                  type="radio"
                  defaultChecked
                  checked={selectHowToPay === "2"}
                  className="ml-3 accent-navy appearance-none rounded-full border-4 ring-2 ring-gray-400 checked:ring-navy border-white w-4 h-4 checked:bg-navy cursor-pointer"
                />
                <label
                  className="text-lg font-bold cursor-pointer"
                  htmlFor="inPerson"
                >
                  تحویل حضوری
                </label>
              </div>
              <Link
                href={`/supplier/${id}`}
                className="flex justify-center items-center text-red-500 gap-3.5"
              >
                <BuildingStorefrontIcon className="h-6 w-6 " />
                <h5>{storeName}</h5>
              </Link>
            </div>
          </div>
          <button
            onClick={openLocationMenuHandler}
            type="button"
            className={` flex justify-between items-center mt-6 bg-gray-100 border-[1px] border-gray-300 text-regalBlue
         py-2.5 px-3 rounded-lg w-full ${
           selectHowToPay === "2" && " text-gray-900"
         } `}
          >
            {/* {selectHowToPay === "2" && storeAddress?.province ? (
            <button className='flex gap-2'>
              {storeAddress?.province}, {storeAddress?.street_address_1}
            </button>
          ) : ( */}
            <p>مشاهده آدرس و لوکیشن فروشگاه</p>
            {/* )} */}
            <ChevronLeftIcon className="h-5 w-5 " />
          </button>
        </form>

        <div className="border-t-[1px] mt-6">
          <div className="flex">
            <h5 className="m-auto bg-cream text-black px-5 text-lg font-medium rounded-b-lg ">
              زمان ارسال سفارش
            </h5>
          </div>
          <div>
            <div className="flex gap-3 text-base font-medium text-gray-700 my-4">
              <ClockIcon className="h-6 w-6 " />
              <h3>زمان ارسال سفارش</h3>
            </div>
            <div className="border-[1px] rounded-2xl">
              <div className="flex justify-between items-center text-base font-bold px-8 pb-6 ">
                {DUMMY_DATES.map((item, i) => {
                  return (
                    <div
                      key={item.day}
                      onClick={() => setSelectDay(item.day + " " + item.date)}
                      className="cursor-pointer flex flex-col justify-center items-center"
                    >
                      <div
                        className={` h-2 w-16 rounded-b ${
                          selectDay === item.day + " " + item.date &&
                          "bg-teal-400"
                        }`}
                      />

                      <div className="flex flex-col gap-4 justify-center items-center">
                        <h4
                          className={`${
                            selectDay === item.day + "" + item.date &&
                            "text-teal-400"
                          }`}
                        >
                          {item.day}
                        </h4>
                        <h4>{item.date}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="border-t-[1px]">
                {DUMMY_HOUR.map((item, i) => {
                  return (
                    <div key={item.time} className="mx-8">
                      <div className="flex justify-between items-center h-14">
                        <div>
                          <div className="flex justify-center items-center">
                            <input
                              onClick={() => setSelectHour(item.time)}
                              value={item.time}
                              name="hour"
                              id="incase"
                              type="radio"
                              disabled={item.disable}
                              className="ml-3 accent-teal-400 appearance-none rounded-full border-4 ring-2
                      ring-gray-400 checked:ring-teal-400 border-white w-4 h-4 checked:bg-teal-400 cursor-pointer"
                            />
                            <label
                              className={`text-base font-medium ${
                                (item.disable && "text-gray-400") ||
                                (item.time === selectHour && "text-teal-400")
                              } `}
                              htmlFor="incase"
                            >
                              {item.time}
                            </label>
                          </div>
                        </div>
                        {item.disable && (
                          <div className=" px-5 py-2 bg-red-100 text-red-400 border-[1px] border-red-400 rounded-lg flex ">
                            <h1 className=" m-auto">تکمیل</h1>
                          </div>
                        )}
                      </div>
                      {i !== DUMMY_HOUR.length - 1 && <hr />}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex gap-1 text-gray-700 mt-4">
              <h5>زمان ارسال سفارش : </h5>
              <h5 className="text-gray-500">
                {selectHour} روز {selectDay}{" "}
              </h5>
            </div>
          </div>
        </div>
      </div>
      {openLoactionModal && <MapContainer close={closeLocationMenuHandler} />}
    </div>
  );
};

export default DeliveryItem;

const DUMMY_DATES = [
  { day: "شنبه", date: "02/06" },
  { day: "یکشنبه", date: "02/07 " },
  { day: "دوشنبه", date: "02/08" },
  { day: "سه‌شنبه", date: "02/09 " },
  { day: "چهار‌شنبه", date: "02/10 " },
  { day: "پنج‌شنبه", date: "02/11" },
  { day: "جمعه", date: "02/12" },
];

const DUMMY_HOUR = [
  { time: "ساعت 9 تا 12", disable: true },
  { time: "ساعت 12 تا 15", disable: false },
  { time: "ساعت 15 تا 18", disable: false },
  { time: "ساعت 18 تا 21", disable: false },
];
