import React from "react";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import MobileMoreSupplierCard from "./MobileMoreSupplierCard";
import { XMarkIcon } from "@heroicons/react/24/outline";

const index = ({
  setShowMoreSuppliers,
  suppliers,
  submitOrder,
  basket,
  changeProductShopHandler,
}) => {
  const closeHandler = () => {
    setShowMoreSuppliers(false);
  };
  return (
    <div className="z-50 md:hidden fixed top-0  h-screen w-full  bg-gray-100/50">
      <div className="mx-4 mt-16 pb-10 h-full max-h-[80vh] bg-white rounded-lg overflow-hidden shadow-md  ">
        <div className="flex items-center justify-start w-full bg-white h-12 px-7  mb-[1px] rounded-t-lg   ">
          <button onClick={closeHandler}>
            <XMarkIcon className="h-6 w-6 text-navy" />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4  overflow-auto  max-h-full ">
          {suppliers?.map((item, i) => {
            console.log(item);
            return (
              <div key={item?.shop_id}>
                {/* onClick={() => changeProductShopHandler(item.id)} */}
                <MobileMoreSupplierCard
                  item={item}
                  key={item?.id}
                  id={item?.id}
                  submitOrder={submitOrder}
                  basket={basket}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
