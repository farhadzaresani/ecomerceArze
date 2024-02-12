import BlogCard from "./BlogCard";
import GoToTop from "../ui/icons/GoToTop";
import SectionTag from "../ui/icons/SectionTag";

const DUMMY = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const BlogsSection = () => {
  const goToTopOfPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className='hidden  md:flex flex-col relative  '>
      <div>
        <div className=' flex rounded-l-lg items-center w-[198px] gap-[13px]  py-3 pr-0 bg-[#FFE4CC] mb-[29px] '>
          <SectionTag />
          <h1 className='font-[500] text-xl text-navy'>بلاگ</h1>
        </div>
      </div>
      <div className=' grid grid-cols-3 max-h-[920px] overflow-hidden '>
        {DUMMY.map((item) => {
          return <BlogCard key={item} />;
        })}
      </div>
      <div className=' bg-gradient-to-t from-[#F3F4F6] to-transparent  h-[376px] w-full absolute bottom-0 flex flex-col justify-center items-center '>
        <button className=' bg-cream border-[1px] border-navy text-navy py-2.5 px-[24px] rounded-lg font-medium'>
          مشاهده بیشتر
        </button>
        <div
          onClick={goToTopOfPage}
          className='flex flex-col justify-center items-center mt-[84px] cursor-pointer'
        >
          <GoToTop />
          <a className='text-navy text-xl font-bold '>بازگشت به بالا</a>
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
