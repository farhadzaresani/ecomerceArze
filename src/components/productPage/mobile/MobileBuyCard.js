import React from "react";
import { useState } from "react";
import useRialStyle from "@/hooks/useRialStyle";
import { PlusIcon } from "@heroicons/react/24/outline";
import { MinusIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MobileBuyCard = ({
  price,
  basket,
  submitOrder,
  product,
  deletItem,
  basketId,
}) => {
  const [inputValue, setInputValue] = useState(product?.item_quantity);
  const router = useRouter();

  const increase = () => {
    setInputValue(inputValue + 1);
  };
  const decrease = () => {
    if (inputValue === 1) {
      deletItem.mutate({
        id: product?.prime_shop_product?.id,
        shopId: product?.prime_shop_product?.shop?.id,
      });
      setInputValue(0);
    }
    setInputValue(inputValue - 1);
  };

  const goToBasketPage = () => {
    router.push(`/myBasket/${product?.order_id[0]?.order_id}`);
  };
  const goToShopPage = () => {
    router.push(
      `/supplier/${product?.prime_shop_product?.shop?.shop_unique_id}`
    );
  };

  const addAllSubsidyInBasket = () => {
    setInputValue(inputValue + 1);
  };
  // const basketItem = () => {
  //   const list = [];
  //   basket?.forEach((element) => {
  //     element?.lines?.forEach((item) => {
  //       list.push(item);
  //     });
  //   });
  //   const data = list.filter(
  //     (item) =>
  //       item?.product?.unique_product_code == product?.unique_product_code
  //   );

  //   if (data[0]?.quantity) {
  //     setInputValue(data[0]?.quantity);
  //   }
  // };

  // useEffect(() => {
  //   basketItem();
  // }, []);

  useEffect(() => {
    if (inputValue > 0) {
      const timeoutId = setTimeout(() => {
        submitOrder.mutate({
          itemId: product?.prime_shop_product?.id,
          quan: inputValue,
          shopId: product?.prime_shop_product?.shop?.id,
        });
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [inputValue]);

  return (
    <div
      style={{
        boxShadow:
          "0px 2px 4px -2px rgba(0, 0, 0, 0.05), 0px 0px 6px 2px rgba(0, 0, 0, 0.1)",
      }}
      className="md:hidden fixed bottom-0 bg-white w-full z-10 flex items-center justify-center gap-3   shadow-md"
    >
      {inputValue > 0 ? (
        <div className="flex flex-col items-center gap-3 bg-white w-full py-3   ">
          <div className="flex justify-between bg-green-500 py-0.5 px-6 w-44  rounded-md gap-1">
            <PlusIcon
              onClick={increase}
              className="disabled:text-gray-100  h-6 w-6 text-white"
            />
            <input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              className="w-6 h-6 rounded-md text-green-500 text-center font-bold"
            />
            <MinusIcon onClick={decrease} className="h-6 w-6 text-white" />
          </div>
          <div className="flex gap-4">
            <button
              onClick={goToBasketPage}
              className="bg-teal-400 text-white text-base font-bold px-5 py-2.5 rounded-lg"
            >
              تکمیل سفارش
            </button>
            <button
              onClick={goToShopPage}
              className="bg-cream text-black text-base font-bold px-5 py-2.5 rounded-lg"
            >
              ورود به فروشگاه
            </button>
          </div>
        </div>
      ) : (
        <div className="flex  items-center justify-between gap-3 bg-white w-full p-5">
          <button
            onClick={addAllSubsidyInBasket}
            className={`disabled:bg-gray-400 disabled:px-1 disabled:w-48 disabled:text-sm  bg-green-500 text-white text-base font-bold px-4 py-1 rounded-lg`}
          >
            افزودن به سبد خرید
          </button>
          <div className="text-gray-700 flex items-center gap-2">
            <h1 className="font-bold text-xl ">{useRialStyle(price)}</h1>
            <span className="font-normal text-xs">تومان</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileBuyCard;
