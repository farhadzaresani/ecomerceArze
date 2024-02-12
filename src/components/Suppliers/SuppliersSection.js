import React from "react";
import SortSection from "./suppliersList/SortSection";
import SupplierCard from "./suppliersList/SupplierCard";
import Pagination from "./suppliersList/Pagination";

const SuppliersSection = ({ suppliers }) => {
  return (
    <div className='flex flex-col justify-center items-center  mx-auto '>
      <div className='w-full'>
        <SortSection />
      </div>
      <div className='  grid lg:grid-cols-2  gap-10  w-full  pb-16    mt-3.5'>
        {suppliers.map((item) => {
          return (
            <SupplierCard
              key={item?.shop_unique_id}
              address={item?.primary_address}
              id={item?.shop_unique_id}
              title={item?.title}
            />
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default SuppliersSection;
