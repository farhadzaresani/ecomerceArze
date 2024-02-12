import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainFooter = () => {
  return (
    <div className='bg-[#003349] min-h-[400px] md:flex flex-col justify-between hidden '>
      <div className='flex justify-between'>
        <div className='  w-1/2'>
          <div className='w-[300px]  grid grid-cols-2 content-center gap-[32px] align-middle mt-[64px] mr-[235px]   text-white'>
            <Link className='text-[20px] font-[700] text-[#FFE4CC]' href='#'>
              دسترسی سریع
            </Link>
            <Link className='text-[20px] font-[700] text-[#FFE4CC]' href='#'>
              فروشگاه
            </Link>
            <Link className='text-[16px] font-[500] ' href='#'>
              تماس با ما
            </Link>
            <Link className='text-[16px] font-[500] ' href='#'>
              محصولات
            </Link>
            <Link className='text-[16px] font-[500] ' href='#'>
              درباره ما
            </Link>
            <Link className='text-[16px] font-[500] ' href='#'>
              عرضه کنندگان
            </Link>
          </div>
        </div>
        <div className='mt-[71px] ml-[210px]'>
          <div className=' flex flex-col items-center justify-center '>
            <p className='text-[16px] font-[500] text-white w-[140px] h-[48px] text-center '>
              سامانه عرضه کالا وزارت راه و شهرسازی
            </p>
            <div className='flex  mt-[26px] gap-3'>
              <div className=' bg-white w-28 h-28 rounded-[8px] flex justify-center items-center'>
                <Image
                  alt='nama'
                  width='0'
                  height='0'
                  sizes='100vw'
                  priority
                  className='w-20 h-20 m-auto'
                  src='/assets/Images/layout/logonama.png'
                />
              </div>
              <div className=' bg-white w-28 h-28  rounded-[8px] flex justify-center items-center'>
                <Image
                  alt='namade etemad'
                  width='0'
                  height='0'
                  sizes='100vw'
                  priority
                  className='w-24 h-24'
                  src='/assets/Images/layout/namade-etemad.png'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='  mt-14 flex flex-col justify-center items-center'>
        <Image
          alt='line'
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto'
          src='/assets/Images/layout/Line.png'
        />

        <p className='my-[17px] text-[14px] font-[300] text-white'>
          کلیه حقوق این سامانه متعلق به وزارت راه و شهرسازی می باشد
        </p>
      </div>
    </div>
  );
};

export default MainFooter;
