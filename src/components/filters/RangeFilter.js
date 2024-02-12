import { ChevronUpIcon } from "@heroicons/react/24/outline";
import React from "react";
import MultiRangeSlider from "./rangeInput/MultiRangeSlider";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const RangeFilter = () => {
  const [rangeNumber, setRangeNumber] = useState({ min: 0, max: 231857 });
  const router = useRouter();

  useEffect(() => {
    const currentQuery = router.query;
    const newQuery = {
      ...currentQuery,
      min: rangeNumber.min,
      max: rangeNumber.max,
    };

    if (rangeNumber.min !== 0 || rangeNumber.max !== 231857) {
      const timeoutId = setTimeout(() => {
        router.push({
          pathname: "/products-list",
          query: newQuery,
        });
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [rangeNumber]);

  return (
    <div className="py-8 mx-8 flex flex-col gap-6 border-b-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-navy font-medium">قیمت</h2>
          <div className="h-1.5 w-1.5 bg-cream rounded-full"></div>
        </div>
        <ChevronUpIcon className="h-5 w-5 text-gray-500" />
      </div>
      <div className="">
        <MultiRangeSlider
          min={0}
          max={231857}
          rangeNumber={rangeNumber}
          onChange={({ min, max }) =>
            setRangeNumber({ ...rangeNumber, min: min, max: max })
          }
        />
        <div className="flex justify-center items-center gap-1 mt-5 text-base ">
          <p>از</p>
          <input
            onChange={(e) =>
              setRangeNumber({ ...rangeNumber, min: Number(e.target.value) })
            }
            value={rangeNumber.min}
            className="w-14 h-8 border-[1px] rounded text-center"
            type="number"
          />
          <p className="text-gray-400 ml-4">تومان</p>
          <p>تا</p>
          <input
            onChange={(e) =>
              setRangeNumber({ ...rangeNumber, max: Number(e.target.value) })
            }
            value={rangeNumber.max}
            className="w-14 h-8 border-[1px] rounded text-center"
            type="number"
          />
          <p className="text-gray-400">تومان</p>
        </div>
      </div>
    </div>
  );
};

export default RangeFilter;
