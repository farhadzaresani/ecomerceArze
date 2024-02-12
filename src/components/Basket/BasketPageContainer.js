import BasketItemsList from "./BasketItemsList";
import BasketDelivery from "./BasketDelivery";
import BasketPayment from "./BasketPayment";
import FactorCard from "./FactorCard";
import { CreditCardIcon } from "@heroicons/react/20/solid";
import { TruckIcon } from "@heroicons/react/20/solid";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import GiftCodeSection from "./GiftCodeSection";
import BasketPaymenType from "./BasketPaymenType";
import EmptyBasket from "./mobile/EmptyBasket";
import MobileBasketCard from "./mobile/MobileBasketCard";

const BasketPageContainer = ({ token, data, deletItem, addMoreOfItem }) => {
  const [step, setStep] = useState(0);
  const [selectHowToPay, setSelectHowToPay] = useState("2");

  const res = data?.[0]?.lines?.reduce((acc, cur) => {
    acc +=
      Number(cur?.subsidy_status?.final_line_price) || Number(cur.total_price);
    return acc;
  }, 0);

  return (
<<<<<<< HEAD
    <div className='   pb-20 bg-gray-100  '>
      <div className='md:hidden flex flex-col items-center justify-start w-full'>
=======
    <div className="   min-h-[90vh] bg-gray-100 pb-10  ">
      <div className="md:hidden flex flex-col items-center justify-start w-full">
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862
        {!data || data?.length === 0 ? (
          <div className="min-h-full ">
            <EmptyBasket />
          </div>
        ) : (
          <div className=" w-full px-4 min-h-full  ">
            {data?.length > 0 &&
              data?.map((item, i) => {
                if (item?.lines?.length > 0) {
                  return (
                    <MobileBasketCard
                      key={item?.id}
                      basketId={item?.id}
                      data={item}
                      deletItem={deletItem}
                      addMoreOfItem={addMoreOfItem}
                    />
                  );
                }
              })}
          </div>
        )}
      </div>
      <div className="hidden md:flex bg-gray-100 w-full flex-col min-h-screen pb-10">
        <div className="hidden md:flex justify-center text-gray-400 items-center gap-16 min-h-[144px] bg-white  m-5 py-3 border-[1px] border-gray-300 rounded-2xl">
          <div
            onClick={() => setStep(0)}
            className={`flex flex-col justify-center items-center cursor-pointer ${
              (step === 0 && "text-teal-400") || (step > 0 && "text-navy")
            }`}
          >
            <ShoppingBagIcon
              className={`h-22 w-20 transition-all duration-300 delay-100 ${
                step === 0 && " w-24 "
              }`}
            />
            <h4 className="text-xs font-medium">مشاهده سبد خرید</h4>
          </div>
          <div
            className={` bg-gray-400 w-28 h-[1px] flex flex-col justify-center items-center cursor-pointer ${
              step > 0 && "bg-navy"
            }`}
          />
          <div
            onClick={() => setStep(1)}
            className={`flex flex-col justify-center items-center cursor-pointer ${
              (step === 1 && "text-teal-400") || (step > 1 && "text-navy")
            }`}
          >
            <TruckIcon
              className={`h-22 w-20 transition-all duration-300 delay-100 flipIcon    ${
                step === 1 && "  w-24 "
              }`}
            />
            <h4 className="text-xs font-medium">انتخاب زمان و محل تحویل</h4>
          </div>
          <div
            className={`  bg-gray-400 w-28 h-[1px] flex flex-col justify-center items-center cursor-pointer ${
              step > 1 && "bg-navy"
            }`}
          />
          <div
            onClick={() => setStep(2)}
            className={`flex flex-col justify-center items-center cursor-pointer ${
              (step === 2 && "text-teal-400") || (step > 2 && "text-navy")
            }`}
          >
            <CreditCardIcon
              className={`h-22 w-20 transition-all duration-300 delay-100 ${
                step === 2 && " w-24 "
              }`}
            />
            <h4 className="text-xs font-medium"> پرداخت</h4>
          </div>
        </div>
        <div className="flex justify-between gap-8 px-8">
          <div className="w-full">
            {step === 0 && (
              <div>
                {data?.length > 0 &&
                  data?.map((item, i) => {
                    if (item?.lines?.length > 0) {
                      return (
                        <BasketItemsList
                          key={item?.id}
                          data={item}
                          deletItem={deletItem}
                          addMoreOfItem={addMoreOfItem}
                        />
                      );
                    }
                  })}
              </div>
            )}
            {step === 1 && (
              <>
                {data?.map((item, i) => {
                  return (
                    <BasketDelivery
                      selectHowToPay={selectHowToPay}
                      setSelectHowToPay={setSelectHowToPay}
                      finallPrice={res}
                      data={item}
                    />
                  );
                })}
              </>
            )}
            {step === 2 && (
              <>
                <BasketPaymenType />
                <GiftCodeSection />
                {data?.map((item, i) => {
                  return <BasketPayment key={item?.shop_id} data={item} />;
                })}
              </>
            )}
          </div>
          <div className="">
            <FactorCard
              selectHowToPay={selectHowToPay}
              finallPrice={res}
              step={step}
              setStep={setStep}
              itemQuantity={data?.[0]?.lines?.length}
              amount={data?.[0]?.price_net_amount}
              newPrice={data?.[0]?.subsidy_status?.net_after_subsidy_price}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPageContainer;
