import React, { useState } from "react";

import GiftCodeSection from "./GiftCodeSection";
import PaymentItem from "./PaymentItem";

const BasketPayment = ({ data }) => {
  return (
    <div>
      <div className='bg-white px-8 pb-12 rounded-2xl mt-5 border-[2px] border-gray-200  '>
        <div className='flex'>
          <h5 className='m-auto bg-cream text-black px-5 text-lg font-medium rounded-b-lg '>
            نحوه تحویل سفارش
          </h5>
        </div>
        <PaymentItem data={data} shop={data?.shop?.title} />
      </div>
    </div>
  );
};

export default BasketPayment;
