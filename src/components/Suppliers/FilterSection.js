import React, { useState } from "react";
import FilterCard from "../filters/FilterCard";
import GroupingFilter from "../filters/GroupingFilter";
import FilterByLocation from "../filters/FilterByLocation";

const DUMMY_Filters = [
  { text: "از 0 تا 500,000 تومان" },
  { text: "تهران" },
  { text: "میلگرد" },
  { text: "تخفیف دار" },
];

const FilterSection = () => {
  const [rangeNumber, setRangeNumber] = useState({ min: 0, max: 100 });
  return (
    <div className='w-[352px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-[#F3F4F6] '>
      <div className='mx-8 border-b-[1px] border-gray-300'>
        <div>
          <div className='flex justify-between  pt-6 w-full '>
            <h2 className='text-navy font-bold text-xl'>فیلتر ها</h2>
            <button className='text-blue-500 font-medium '>بازنشانی</button>
          </div>
        </div>
        <div className='flex flex-wrap gap-4 m pt-3 pb-8 '>
          {DUMMY_Filters.map((item, i) => {
            return <FilterCard name={item.text} key={i} />;
          })}
        </div>
      </div>
      <GroupingFilter />
      <FilterByLocation />
    </div>
  );
};

export default FilterSection;
