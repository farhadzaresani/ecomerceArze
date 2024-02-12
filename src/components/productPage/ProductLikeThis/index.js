import React from "react";
import SectionTag from "../SectionTag";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function ProductLikeThis({ products }) {
  return (
    <div className='py-3 bg-gray-100 border-b-4 hidden md:block'>
      <SectionTag title={"کالا های مشابه"} />
      <div className='flex justify-center items-center gap-8 overflow-hidden m-4 border-2 p-4 rounded-2xl relative '>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={1}
          slidesPerView={products?.length > 4 ? 4 : products?.length}
        >
          {products?.map((item, i) => {
            return (
              <SwiperSlide key={item.unique_product_code}>
                <ProductCard
                  id={item?.unique_product_code}
                  title={item?.title}
                  price={item?.price}
                  imageUrl={item?.productimage_set[0]?.url}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductLikeThis;
