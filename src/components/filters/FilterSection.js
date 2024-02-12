import React, { useEffect, useState } from "react";
import FilterCard from "./FilterCard";
import RangeFilter from "./RangeFilter";
import FilterByLocation from "./FilterByLocation";
import GroupingFilter from "./GroupingFilter";
import { Router, useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getCategoryGroups } from "@/api/Api's";
import { useSelector } from "react-redux";
import { getCurrentFilters } from "@/store/reducers/filterReducer";

const DUMMY_Filters = [
  { text: "از 0 تا 500,000 تومان" },
  { text: "تهران" },
  { text: "میلگرد" },
  { text: "تخفیف دار" },
];
const FilterSection = ({ categories }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const filters = useSelector(getCurrentFilters);

  const { data } = useQuery({
    queryKey: ["categorieList", 0],
    queryFn: getCategoryGroups,
  });

  const resetFilters = () => {
    router.replace(`${router.pathname}`);
  };

  const removeFilter = (req) => {
    // Get the current query object
    const key = [];
    req == "min" || (req == "max" ? key.push("min", "max") : key.push(req));
    const query = { ...router.query };
    // Remove the key/value pair from the query object
    key.forEach((elem) => {
      delete query[elem];
    });
    // Build the new query string
    const queryString = Object.entries(query)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    // Update the router query
    const updateUrl = async () => {
      await router.push({
        pathname: router.pathname,
        search: queryString ? `?${queryString}` : "",
      });
      if (("que", Object.keys(query).length === 0)) {
        router.reload();
      }
    };
    updateUrl();
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className=' hidden md:block w-[289px] h-full shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-gray-100 pb-36 sticky -top-1/3 z-10  '>
      <div className='mx-8 border-b-[1px] border-gray-300'>
        <div>
          <div className='flex justify-between  pt-6 w-full '>
            <h2 className='text-navy font-bold text-xl'>فیلتر ها</h2>
            <button
              onClick={resetFilters}
              className='text-blue-500 font-medium '
            >
              بازنشانی
            </button>
          </div>
        </div>
        <div className='flex flex-wrap gap-4 m pt-3 pb-8 '>
          {isLoaded &&
            filters?.map((item, i) => {
              return (
                <div key={item.id}>
                  {item.text && (
                    <FilterCard
                      removeItem={() => removeFilter(item.type)}
                      key={i}
                      name={item.text}
                    />
                  )}
                </div>
              );
            })}
        </div>
      </div>
      <GroupingFilter isLoaded={isLoaded} categories={data} />
      <RangeFilter />
      <FilterByLocation />
      {/* <FilterByType /> */}
      {/* <PriceType /> */}
    </div>
  );
};

export default FilterSection;
