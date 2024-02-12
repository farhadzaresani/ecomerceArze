import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCard from "@/components/Product/productsList/ProductCard";

const MobileShopProducts = ({ products, categories }) => {
  return (
    <div className="md:hidden mt-2 pb-10">
      <div
        className=" sticky top-[10.5%]  bg-white flex  items-center py-2 px-4 mt-6
     z-10 w-full max-w-[440px] border-b overflow-hidden "
      >
        <Swiper spaceBetween={6} slidesPerView={5}>
          {categories?.map((item, i) => {
            return (
              <SwiperSlide>
                <button
                  className="bg-gray-100 px-2 py-3 rounded-lg text-[10px] min-w-[47px] 
                         font-bold flex justify-center items-center gap-2 shadow-sm "
                >
                  <h1>آهن</h1>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="mt-6 flex flex-wrap justify-center items-center gap-5 md:hidden">
        {products?.map((item, i) => {
          return (
            <ProductCard
              key={item?.unique_product_code}
              image={item?.product?.productimage_set?.[0]?.url}
              id={
                item?.unique_product_code
                  ? item?.unique_product_code
                  : item?.product_upc
              }
              title={item?.title}
              price={item?.price}
              subsidized_price={item?.subsidized_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MobileShopProducts;
