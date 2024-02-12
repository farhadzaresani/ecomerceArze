import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

function CategoryChildSlider({ category }) {
  return (
    <div className=' w-full '>
      <Swiper className='mySwiper' spaceBetween={10} slidesPerView={3}>
        {category?.map((item, i) => {
          return (
            <SwiperSlide key={item?.id}>
              <Link
                href={`products-list?category=${item?.id}`}
                className='bg-gray-200 w-28  min-h-40 p-2 pb-3 flex flex-col justify-start items-center gap-2 rounded-2xl'
              >
                <Image
                  width={98}
                  height={98}
                  className='object-cover rounded-xl w-24 h-24 '
                  src={item?.categoryfile_set[0]?.url}
                  alt='slides'
                />
                <span className='text-xs font-semibold text-navy'>
                  {item.title}
                </span>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CategoryChildSlider;
