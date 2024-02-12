import Link from "next/link";
import React, { useState } from "react";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { getAddressDetailFromNeshan, getMyAddresses } from "@/api/Api's";
import { useQuery } from "@tanstack/react-query";
import AddressModal from "./AddressModal";
import { getCookie } from "cookies-next";
import FactorCard from "../SingleBasket/FactorCard";
const MyAwesomeMap = dynamic(() => import("../../littleMap/LittleMap"), {
  ssr: false,
});

const MobileBasketAddress = ({
  selectDeliveryType,
  setSelectDeliveryType,
  setSelectAddress,
  selectAddress,
  BackStepHandler,
  NextStepHandler,
  selectedOptionReleasedType,
  setSelectedOptionReleasedType,
  factorData,
}) => {
  const token = getCookie("access");
  const [openAddresessModal, setOpenAddressModal] = useState(false);

  const handleOptionChangeOrderType = (event) => {
    setSelectDeliveryType(event.target.value);
  };

  const handleOptionChangeReleasedType = async (event) => {
    setSelectedOptionReleasedType(event.target.value);
  };

  const toggleModal = () => {
    setOpenAddressModal(!openAddresessModal);
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["address"],
    queryFn: () => {
      return getMyAddresses(token);
    },
    disabled: !token,
    staleTime: Infinity,
    cacheTime: 0,
  });

  return (
    <div className="pb-20">
      <div className="border-b-2 mt-8 pb-8 px-6 ">
        <div className="mt-5">
          <p className="text-sm text-gray-700">محل تحویل سفارش</p>
        </div>

        <div className="mt-5">
          <div className="flex ">
            <label className="flex">
              <input
                type="radio"
                value="fetching"
                checked={selectDeliveryType === "fetching"}
                onChange={handleOptionChangeOrderType}
              />
              <span className="mx-2 text-sm text-gray-700">تحویل حضوری</span>
            </label>
            <p
              className={`flex items-center ${
                selectDeliveryType !== "fetching"
                  ? "text-gray-300"
                  : " text-red-600 "
              }`}
            >
              <BuildingStorefrontIcon className="h-4 w-4  ml-1" />
              <span className="text-sm ">{factorData?.shop?.title}</span>
            </p>
          </div>
          <label className="flex items-center mt-4">
            <input
              type="radio"
              value="sending"
              checked={selectDeliveryType === "sending"}
              onChange={handleOptionChangeOrderType}
            />
            <span className="mx-2 text-sm text-gray-700">تحویل در محل</span>
            {selectDeliveryType === "sending" && (
              <button
                onClick={toggleModal}
                className="px-4 py-2 mr-1 rounded-lg bg-teal-400 text-white text-[12px]"
              >
                انتخاب آدرس
              </button>
            )}
          </label>
          {selectDeliveryType === "sending" && (
            <p className="w-[90%] pr-5 mt-3 text-sm text-gray-700">
              {selectAddress?.address}
            </p>
          )}
        </div>

        {selectDeliveryType === "sending" && (
          <div className="mt-5">
            <div className="bg-gray-100 border border-gray-300 p-2 rounded-lg">
              <span className="text-gray-700 text-sm font-medium">
                چون نحوه سفارش ، تحویل در محل می باشد ، پس بارگیری بر عهده
                راننده است .
              </span>
            </div>
            <div className="border border-gray-300 p-2 mt-2 rounded-lg text-center">
              <span className="text-gray-700 text-sm font-medium">
                هزینه بارگیری 3000 تومان
              </span>
            </div>
          </div>
        )}
      </div>
      {selectDeliveryType === "sending" && (
        <div className="px-6">
          <div className="mt-5">
            <p className="text-sm text-gray-700">تخلیه بار</p>
          </div>

          <div className="mt-5">
            <label className="flex items-center">
              <input
                type="radio"
                value={false}
                checked={selectedOptionReleasedType === "false"}
                onChange={(e) => handleOptionChangeReleasedType(e)}
              />
              <span className="mx-2 text-sm text-gray-700">
                تخلیه بار بر عهده مشتری
              </span>
            </label>
            <div className="flex mt-4">
              <label className="flex">
                <input
                  type="radio"
                  value={true}
                  checked={selectedOptionReleasedType === "true"}
                  onChange={(e) => handleOptionChangeReleasedType(e)}
                />
                <span className="mx-2 text-sm text-gray-700">
                  تخلیه بار بر عهده راننده
                </span>
              </label>
            </div>
          </div>
          <div>
            {selectedOptionReleasedType === "fetching" && (
              <div className="border border-gray-300 p-2 mt-2 rounded-lg text-center">
                <span className="text-gray-700 text-sm font-medium">
                  هزینه تخلیه بار 3000 تومان
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      <FactorCard
        total={factorData?.total_price}
        itemList={factorData?.lines}
        itemData={factorData}
      />
      <div className="bg-white h-[60px] w-full max-w-[440px] flex justify-evenly items-center fixed bottom-0  mt-2">
        <button
          className="bg-red-600 w-40 h-11 rounded-lg text-white"
          onClick={BackStepHandler}
        >
          قبلی
        </button>
        <button
          disabled={selectDeliveryType === "sending" && !selectAddress}
          className="bg-green-600 w-40 h-11 rounded-lg text-white disabled:bg-gray-400/50"
          onClick={NextStepHandler}
        >
          تایید
        </button>
      </div>
      {openAddresessModal && (
        <AddressModal
          data={data}
          toggleModal={toggleModal}
          setSelectAddress={setSelectAddress}
          openAddresessModal={openAddresessModal}
        />
      )}
    </div>
  );
};

export default MobileBasketAddress;
