import React from "react";

import { useSwiper } from "swiper/react";
const SwiperButton = (props) => {
  const swiper = useSwiper();

  return (
    <div className='bg-red- flex justify-between'>
      <button
        className=' border-2 border-black rounded-full bg-white p-4 '
        onClick={() => swiper.slidePrev()}
      >
        perv
      </button>
      <button className=' ' onClick={() => swiper.slideNext()}>
        next
      </button>
    </div>
  );
};

export default SwiperButton;
