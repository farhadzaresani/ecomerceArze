import ProductCard from "../Product/productsList/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderLogo from "../ui/icons/SliderLogo";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const NewProductsSection = ({ newProducts }) => {
  return (
    <div
      className={` overflow-x-hidden md:h-[29.5rem]  hidden md:flex justify-center items-center md:bg-cream md:max-h-[471px]  mt-9 `}
    >
      <div className="  min-w-[12.5rem] md:flex flex-col justify-center items-center gap-5  hidden">
        <h1 className="font-bold text-2xl text-navy break-words m-auto text-center ">
          جدید ترین محصولات
        </h1>
        <div>
          <SliderLogo />
        </div>
      </div>
      <div className="flex justify-between px-4 md:hidden">
        <h1>جدید ترین محصولات</h1>
        {/* <Link
          href='#'
          className='flex justify-center items-center text-xs font-bold text-teal-400'
        >
          <h1>مشاهده همه</h1>
          <ChevronLeftIcon className='h-5 w-5' />
        </Link> */}
      </div>
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {newProducts?.map((item, i) => {
          return (
            <SwiperSlide key={item?.unique_product_code}>
              <div className="">
                <ProductCard
                  image={item?.productimage_set?.[0]?.url}
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
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default NewProductsSection;
