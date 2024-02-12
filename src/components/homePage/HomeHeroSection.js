import Image from "next/image";
import Link from "next/link";

const HomeHeroSection = () => {
  return (
    <div className=' p-5 pb-0 hidden md:block'>
      <div
        className='bg-gradient-to-r md:min-h-[537px] max-w-[1376px] m-auto mt-[45px] rounded-3xl md:rounded-[50px]
       from-[#08709C] to-[#005069] flex flex-col md:flex-row justify-between '
      >
        <div>
          <div className='w-full'>
            <Image
              width={500}
              height={405}
              priority='true'
              className=' md:rounded-br-[100px] md:rounded-tl-[100px]  rounded-br-[50px] rounded-tl-[50px] mx-auto 
               z-10 md:mr-20 md:my-16 my-12 relative max-w-[250px] md:min-h-max md:min-w-max '
              src='/assets/Images/homePage/hero.png'
              alt='hero'
            />
          </div>
          <div className='md:w-[469px] w-[200px] md:h-[133px] h-[66px]   bg-cream  absolute top-40 md:top-80 '></div>
        </div>
        <div className='  flex'>
          <div className='md:w-[502px] w-full  flex flex-col justify-center items-center gap-6 md:ml-20 pb-10 md:pb-0'>
            <div className='flex  w-full '>
              <h1 className='font-black md:text-7xl text-4xl text-center text-white md:m-22 m-auto '>
                سامانه عرضه کالا
              </h1>
            </div>
            <p className='font-normal text-sm text-center text-white'>
              تامین کالاهای اساسی با نرخ مصوب دولتی
            </p>
            <div className='flex flex-col md:flex-row justify-center gap-4  w-full'>
              <Link
                href={"/suppliers-list"}
                className='py-2.5 px-4 mx-4 md:mx-0 border-[1px]  border-cream text-cream font-medium text-base 
                flex justify-center items-center  rounded-lg '
              >
                مشاهده عرضه کنندگان
              </Link>
              <Link
                href={"/products-list"}
                className='bg-cream text-navy py-2.5 px-2.5  mx-4 md:mx-0  rounded-lg font-medium text-base flex justify-center items-center '
              >
                مشاهده محصولات
              </Link>
            </div>
          </div>
          <div className='w-[85px] h-[228px] rounded-tr-[42.5px]  bg-cream mt-[140px] hidden md:block  relative '></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
