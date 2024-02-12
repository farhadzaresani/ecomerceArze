import React from "react";
import SectionTag from "../SectionTag";
import MoreSupplierCard from "./MoreSupplierCard";

const MoreSuppliers = ({ suppliers, submitOrder, basket }) => {
  return (
    <div className='pt-5 bg-gray-100 relative border-b-4 border-gray-200 py-2 hidden md:block'>
      <SectionTag title={" فروشندگان این کالا"} />
      <div className='max-h-[355px] overflow-hidden'>
        {suppliers?.map((item, i) => {
          return (
            <MoreSupplierCard
              key={item?.id}
              id={item?.id}
              price={item?.price}
              title={item?.shop?.title}
              location={`${item?.shop?.primary_address?.province} ,${item?.shop?.primary_address?.street_address_1}`}
              submitOrder={submitOrder}
              basket={basket}
            />
          );
        })}
      </div>
      {/* <div className=' flex justify-center items-center py-8 bg-gradient-to-b from-[#F3F4F6A6] to-[#F3F4F6] absolute w-full bottom-0 '> */}
      {/* <button className='bg-cream font-medium text-base border-[2px] border-navy text-navy px-6 py-2.5 rounded-lg '>
          3+ فروشگاه دیگر
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default MoreSuppliers;
