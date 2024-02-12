import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MobileSuggestBar = ({ relatedCategories }) => {
  const router = useRouter();
  return (
    <div className=" sticky top-[10.5%] bg-gray-100 flex justify-between items-center py-2 px-6 z-10 w-full md:hidden ">
      <Swiper
        className="mySwiper"
        spaceBetween={10}
        slidesPerView={
          relatedCategories?.length > 3 ? 3 : relatedCategories?.length
        }
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
        {relatedCategories.map((item, i) => {
          return (
            <SwiperSlide>
              <Link
                href={`products-list?category=${item.id}`}
                key={item.title}
                className="bg-white px-2 py-3 rounded-lg text-[10px] w-28
                 font-bold flex justify-center items-center gap-2 shadow-sm "
              >
                <h1>{item.title}</h1>
                <div className="w-8 h-8 flex justify-center items-center">
                  <Image
                    alt="category"
                    width={32}
                    height={32}
                    src={item?.categoryfile_set[0]?.url}
                    className="rounded-lg"
                  />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MobileSuggestBar;

const DUMMY_SUGESTS = [
  {
    title: "مرغ",
    src: "",
  },
  {
    title: "گوشت",
    src: "",
  },
  {
    title: "تخم مرغ",
    src: "",
  },
];
