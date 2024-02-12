import React from "react";
import ImagesSection from "./ImagesSection";
import InfoSection from "./InfoSection";
import BuyCard from "./BuyCard";
import Details from "./Details";

const ProductInfo = ({
  product,
  submitOrder,
  basket,
  deletItem,
  setShowMoreSuppliers,
}) => {
  return (
    <div className="bg-gray-100 md:py-9 md:flex justify-between   md:px-8 ">
      <ImagesSection
        imageList={product?.productimage_set}
        breadCrumbs={product?.bread_crumbs}
      />
      <InfoSection productData={product} />
      <BuyCard
        setShowMoreSuppliers={setShowMoreSuppliers}
        basket={basket}
        product={product}
        submitOrder={submitOrder}
        deletItem={deletItem}
        supplierName={product?.prime_shop_product?.shop?.title}
        shopId={product?.prime_shop_product?.shop?.shop_unique_id}
      />
    </div>
  );
};

export default ProductInfo;
