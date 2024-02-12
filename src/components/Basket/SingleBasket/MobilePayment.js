import useRialStyle from "@/hooks/useRialStyle";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
import FactorCard from "../SingleBasket/FactorCard";

function MobilePayment({ submit, data }) {
  const [selectedOptionPayType, setSelectedOptionPayType] = useState("1");
  const [isPurseSelected, setIsPurseSelected] = useState(false);
  const [discountCode, setDiscountCode] = useState(""); // استیت برای ذخیره کد تخفیف

  const handleInputChange = (event) => {
    setDiscountCode(event.target.value); // ذخیره کد تخفیف در استیت
  };

  const applyDiscount = () => {};

  const handleOptionChangePayType = () => {
    setSelectedOptionPayType("1");
  };

  return (
    <div className="">
      <div className="border-y-2 py-5 px-5">
        <div className="">
          <p className="text-sm text-gray-700 font-medium">نوع پرداخت</p>
          <label className="flex items-center mt-5">
            <input
              type="radio"
              value="1"
              checked={selectedOptionPayType === "1"}
              onChange={handleOptionChangePayType}
            />
            <p className="mx-2 text-sm text-gray-700 font-medium">
              پرداخت به صورت الکترونیکی
            </p>
          </label>
          <div className="flex justify-start items-center mt-4">
            <p className=" text-gray-700 text-sm font-medium">
              پرداخت از کیف پول
            </p>
            <span className="text-gray-700 font-normal text-xs mx-2 mt-1">
              (اعتبار 16000 تومان)
            </span>
            <label class="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      <div className="py-5 px-5">
        <p className="text-sm text-gray-700 font-medium">کد تخفیف</p>
        <p className="text-sm text-gray-700 font-medium mt-5">
          در صورت داشتن کد تخفیف در کادر بالا وارد کنید
        </p>
        <input
          type="text"
          placeholder="کد تخفیف خود را وارد کنید..."
          value={discountCode}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded-md w-full mt-2 text-xs"
        />
        <div className="relative">
          <button
            onClick={applyDiscount}
            className=" text-gray-700 border border-teal-400 w-24 h-7 rounded-lg mt-1 text-s absolute left-0"
          >
            بررسی
          </button>
        </div>
      </div>
      <FactorCard total={data?.total_price} itemList={data?.lines} />
      <div className="bg-gray-100 fixed bottom-0 w-full flex justify-between gap-3 px-2 py-4 ">
        <div className="w-1/3 text-xs font-bold flex flex-col justify-center items-center">
          <span>قابل پرداخت :</span>
          <h4 className="text-teal-400">{useRialStyle(data?.total_price)}</h4>
        </div>
        <button
          onClick={submit}
          className="bg-teal-400 w-full text-white rounded text-base font-bold"
        >
          پرداخت
        </button>
      </div>
    </div>
  );
}

export default MobilePayment;
