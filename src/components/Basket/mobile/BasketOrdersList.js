import React from "react";
import MobileBasketCardItem from "../SingleBasket/MobileBasketCardItem";
import FactorCard from "../SingleBasket/FactorCard";

const BasketOrdersList = ({
  updateOrder,
  NextStepHandler,
  BackStepHandler,
  step,
  data,
}) => {
  return (
    <div>
      {data?.lines?.map((item) => {
        return (
          <MobileBasketCardItem
            key={item?.id}
            item={item}
            updateOrder={updateOrder}
          />
        );
      })}
      <FactorCard
        total={data?.total_price}
        itemList={data?.lines}
        itemData={data}
      />
      <div className="bg-white h-[60px] w-full max-w-[440px] flex justify-evenly items-center fixed bottom-0  mt-2">
        <button
          disabled={step === 2}
          className="bg-red-600 w-40 h-11 rounded-lg text-white disabled:bg-gray-300"
          onClick={BackStepHandler}
        >
          قبلی
        </button>
        <button
          className="bg-green-600 w-40 h-11 rounded-lg text-white"
          onClick={NextStepHandler}
        >
          تایید
        </button>
      </div>
    </div>
  );
};

export default BasketOrdersList;
