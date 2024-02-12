import {
  BuildingOfficeIcon,
  DevicePhoneMobileIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const DynamicMap = dynamic(() => import("../../littleMap/LittleMap"), {
  ssr: false,
});

const AddressModal = ({
  data,
  toggleModal,
  setSelectAddress,
  openAddresessModal,
}) => {
  const [modalTransition, setModalTransition] = useState(true);
  const router = useRouter();
  const choseAddress = (data) => {
    setSelectAddress(data);
    setModalTransition(true);
    setTimeout(() => {
      toggleModal();
    }, 400);
  };

  useEffect(() => {
    setTimeout(() => {
      setModalTransition(false);
    }, 100);
  }, []);

  const navigateClick = (e) => {
    e.stopPropagation();
    router.push("/profile/addresses/addNewAddress");
  };
  const addAddress = (e, item) => {
    console.log(item);
    e.stopPropagation();
    choseAddress(item);
  };

  const closeModal = () => {
    setModalTransition(true);
    setTimeout(() => {
      toggleModal();
    }, 400);
  };

  return (
    <div
      onClick={closeModal}
      className="fixed top-0 z-20  h-full w-full flex bg-gray-50/50"
    >
      {/* <div
       
        className="bg-gray-500/50 w-full h-full relative"
      /> */}
      <div
        className={`m-auto bg-gray-100 w-full h-full max-h-[60vh] overflow-hidden  transition-all duration-500  ${
          modalTransition ? "translate-y-[70vh] " : " translate-y-[20vh]"
        } `}
      >
        <div className="w-full flex justify-between p-4 ">
          <h2 className="text-sm">انتخاب آدرس</h2>
          <button
            onClick={navigateClick}
            className="p-1 rounded-md bg-teal-400"
          >
            <PlusIcon className="w-6 h-6 text-white" />{" "}
          </button>
        </div>
        <div className="max-h-[464px] overflow-auto pb-10">
          <div className="flex flex-col gap-3 mt-3 px-1">
            {data?.results?.map((item, i) => {
              return (
                <div
                  key={item?.address}
                  className="text-gray-700 bg-white p-3 rounded-lg"
                  onClick={(e) => addAddress(e, item)}
                >
                  <h1 className="text-sm font-normal">{item?.address}</h1>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2.5 items-center">
                        <BuildingOfficeIcon className="h-6 w-6 text-regalBlue" />
                        <h4 className="text-gray-500 text-xs">|تهران</h4>
                      </div>
                      <div className="flex gap-2.5 items-center">
                        <DevicePhoneMobileIcon className="h-6 w-6 text-regalBlue" />
                        <h4 className="text-gray-500 text-xs">
                          {item?.phone_number}
                        </h4>
                      </div>
                      <div className="flex gap-2.5 items-center">
                        <UserIcon className="h-6 w-6 text-regalBlue" />
                        <h4 className="text-gray-500 text-xs">
                          {item?.full_name}
                        </h4>
                      </div>
                    </div>
                    <div className="flex">
                      <div className="flex flex-col gap-1.5 mx-1">
                        <TrashIcon className="h-4 w-4 text-red-500" />
                        <PencilIcon className="h-4 w-4 text-navy" />
                      </div>
                      <div className="overflow-hidden flex justify-center items-center h-24 w-24 rounded-2xl">
                        <DynamicMap lat={item?.y} lng={item?.x} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
