import Image from "next/image";
import React, { useState } from "react";

const BlogCard = () => {
  const [isHover, setIsHover] = useState(false);
  const hoverOnHandler = () => {
    setIsHover(true);
  };
  const hoverOverHandler = () => {
    setIsHover(false);
  };

  return (
    <div
      className=' pt-[34px] pb-[21px] px-[38px] 
    shadow-[0px_4px_10px_rgba(0,0,0,0.12)] flex flex-col m-5 justify-center items-center '
    >
      <div
        onMouseOver={hoverOnHandler}
        className=" bg-[url('/assets/Images/homePage/blogPic.png')] w-[360px] h-[360px] bg-no-repeat flex justify-center items-center
        bg-red-500
        "
      >
        <div
          onMouseLeave={hoverOverHandler}
          className={` w-full h-full bg-cream/${
            isHover ? "60" : "0"
          }  flex transition-all duration-100`}
        >
          <button
            className={`   bg-cream border-[1px]   m-auto
          border-navy text-navy py-2.5 px-[24px] rounded-lg font-medium transition-all duration-100 ${
            isHover ? "visible" : "invisible"
          } `}
          >
            مشاهده
          </button>
        </div>
      </div>

      {/* <Image
        onMouseOver={hoverHandler}
        onMouseLeave={hoverHandler}
        width={360}
        height={420}
        src={"/assets/Images/homePage/blogPic.png"}
        alt='blog'
        className={`${isHover ? "bg-cream" : ""} bg-red-600`}
      /> */}
      <div className='flex justify-between w-full mt-[15px]'>
        <p className='font-medium text-xs text-[#003349]'>شهریور 1400</p>
        <div className='bg-[#003349] px-[10px] py-[3px] rounded-[100px] flex'>
          <p className='text-[#FFE4CC] font-medium text-xs m-auto'>آهن الات</p>
        </div>
      </div>
      <div className='w-[360px] h-[60px] mt-[31px]'>
        <h2 className='text-[#003349] font-medium text-xl text-center'>
          روش ترسیم تیرلانه زنبوری به روش پانیر در یک مرحله
        </h2>
      </div>
    </div>
  );
};

export default BlogCard;
