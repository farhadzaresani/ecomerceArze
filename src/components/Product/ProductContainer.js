import React from "react";
import ProductsSection from "./ProductsSection";

const ProductContainer = ({ categories, products }) => {
  return (
    <div className='flex w-full relative justify-between bg-[#F3F4F6]'>
      <ProductsSection products={products} />
    </div>
  );
};

export default ProductContainer;
