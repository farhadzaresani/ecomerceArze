import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Link from "next/link";

function MobileImageSlider({ plans }) {
  return (
    <div className=' px-8 pt-4 md:hidden  '>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper rounded-2xl '
        spaceBetween={10}
        slidesPerView={1}
      >
        {plans?.map((item, i) => {
          return (
            <SwiperSlide key={item?.id}>
              <Link className=' relative' href={`product/${item?.product}`}>
                <div className='relative max-h-[219px] '>
                  <Image
                    width={400}
                    height={219}
                    className='object-cover min-w-full  '
                    src={item?.image?.url}
                    alt='slides'
                  />
                  <span
                    className='flex justify-center items-center px-2 absolute top-[30%] right-5 w-[110px] h-[108px] bg-white/70 
                  text-center text-navy font-black rounded-lg '
                  >
                    {item.title}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default MobileImageSlider;

const SLIDE_IMAGES = [
  {
    src: "/assets/Images/homePage/pic5.png",
    info: "عرضه سیمان با قیمت مصوب",
  },
  {
    src: "/assets/Images/homePage/pic7.png",
    info: "عرضه مرغ با قیمت مصوب",
  },
];
