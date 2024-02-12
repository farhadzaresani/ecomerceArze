import React, { useState } from "react";
import SortSection from "./productsList/SortSection";
import ProductCard from "./productsList/ProductCard";
import MobileProductCard from "./productsList/MobileProductCard";
import MobileSuggestBar from "./productsList/MobileSuggestBar";
import {
  Bars3BottomRightIcon,
  AdjustmentsHorizontalIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import { useRouter } from "next/router";
import MobileSortPage from "./productsList/MobileSortPage";
import MobileFilterPage from "./productsList/MobileFilter/MobileFilterPage";

const ProductsSection = ({ products, relatedCategories }) => {
  const [sortAndFilter, setSortAndFilter] = useState(0);
  const router = useRouter();

  const closeFilterTab = () => {
    setSortAndFilter(0);
  };

  return (
    <>
      <div className="flex flex-col justify-start items-center w-full  md:mt-0  md:mx-10 pb-10  ">
        <button
          onClick={() => router.back()}
          className="text-teal-400 mr-5 fixed top-6 right-0  z-50 md:hidden"
        >
          <ArrowRightIcon className="h-7 w-7 text-navy" />
        </button>
        <div className="w-full">
          <SortSection />
        </div>
        <div className="flex md:hidden items-center justify-between p-4 pt-5 z-10 fixed top-16  bg-white w-full">
          <button
            onClick={() => setSortAndFilter(2)}
            className="flex justify-center items-center gap-1"
          >
            <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-700" />
            <h3 className="text-xs font-bold text-gray-700">فیلتر ها</h3>
          </button>
          <button
            onClick={() => setSortAndFilter(1)}
            className="flex justify-center items-center gap-1"
          >
            <Bars3BottomRightIcon className="h-5 w-5 text-gray-700" />
            <h3 className="text-xs font-bold text-gray-700">
              مرتب سازی بر اساس
            </h3>
          </button>
        </div>

        {relatedCategories && (
          <MobileSuggestBar relatedCategories={relatedCategories} />
        )}
        <div className="  grid grid-cols-2 justify-center items-center   md:grid-cols-4 w-full md:gap-8 mt-3.5   ">
          {products?.map((item, i) => {
            return (
              <div
                className=" border-b odd:border-l "
                key={item?.unique_product_code}
              >
                <div className="hidden md:block">
                  <ProductCard
                    image={
                      item?.productimage_set?.[0]?.url
                        ? item?.productimage_set?.[0]?.url
                        : item?.product?.productimage_set?.[0]?.url
                    }
                    id={
                      item?.unique_product_code
                        ? item?.unique_product_code
                        : item?.product_upc
                    }
                    title={item?.title}
                    price={item?.price}
                    subsidized_price={item?.subsidized_price}
                  />
                </div>
                <div className={`md:hidden `}>
                  <MobileProductCard
                    image={
                      item?.productimage_set?.[0]?.url
                        ? item?.productimage_set?.[0]?.url
                        : item?.product?.productimage_set?.[0]?.url
                    }
                    id={
                      item?.unique_product_code
                        ? item?.unique_product_code
                        : item?.product_upc
                    }
                    title={item?.title}
                    price={item?.price}
                    subsidized_price={item?.subsidized_price}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {sortAndFilter === 1 && (
        <MobileSortPage closeFilterTab={closeFilterTab} />
      )}
      {sortAndFilter === 2 && (
        <MobileFilterPage closeFilterTab={closeFilterTab} />
      )}
    </>
  );
};

export default ProductsSection;
