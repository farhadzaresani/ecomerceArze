import React from "react";
import { useState } from "react";
// Icon
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { HomeModernIcon } from "@heroicons/react/24/outline";

const BasketPaymenType = () => {
  const [payType, setPayType] = useState(null);
  return (
    <div>
      <div className='bg-white px-8 rounded-2xl border-[2px] border-gray-200  '>
        <div className='flex'>
          <h5 className='m-auto bg-cream text-black px-5 text-lg font-medium rounded-b-lg '>
            انتخاب روش پرداخت
          </h5>
        </div>
        <div className=' w-full py-10 flex flex-col gap-9'>
          {PAYMENT_TYPES.map((item, i) => {
            return (
              <div key={item.name} className='flex items-center'>
                <input
                  onClick={() => setPayType(item.name)}
                  value={"پرداخت در محل"}
                  name='payment'
                  id='incase'
                  type='radio'
                  className='ml-3 accent-teal-400 appearance-none rounded-full border-4 ring-2
                ring-gray-400 checked:ring-teal-400 border-white w-4 h-4 checked:bg-teal-400'
                  defaultChecked
                />
                <label
                  className={`text-xl font-medium flex gap-2 justify-center items-center ${
                    item.name === payType && "text-teal-400"
                  } `}
                  htmlFor='incase'
                >
                  {item.icon}
                  {item.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BasketPaymenType;

const PAYMENT_TYPES = [
  // {
  //   name: "پرداخت اینترنتی",
  //   icon: <CreditCardIcon className='h-7 w-7 ' />,
  // },
  {
    name: "پرداخت در محل",
    icon: <HomeModernIcon className='h-7 w-7 ' />,
  },
];
