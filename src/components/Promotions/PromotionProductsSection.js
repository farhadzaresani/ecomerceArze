import PromotionProductCard from "./PromotionProductCard";
import SortSection from "../Product/productsList/SortSection";
import PaginatedItems from "../Product/productsList/Pagination";

const PromotionProductsSection = ({ products }) => {
  return (
    <div className='flex relative justify-between bg-[#F3F4F6]'>
      <div className='flex flex-col justify-start items-center  w-full mx-10   '>
        <div className='w-full'>
          <SortSection />
        </div>
        <div className='  flex flex-wrap  justify-center w-full gap-8 mt-3.5'>
          {products?.map((item, i) => {
            return (
              <div>
                <PromotionProductCard
                  key={item?.main_shop_product}
                  id={item?.unique_product_code}
                  title={item?.title}
                  price={item?.price}
                  image={item?.productimage_set[0]?.url}
                />
              </div>
            );
          })}
        </div>
        <div className='my-20'>
          <PaginatedItems itemsPerPage={32} />
        </div>
      </div>
    </div>
  );
};

export default PromotionProductsSection;
