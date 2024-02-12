import React from "react";
import TitleCard from "./TitleCard";
import DetailTable from "./DetailTable";
import CommentsScetion from "./CommentsScetion";

const ProductDetails = () => {
  return (
    <div className='p-4 bg-gray-100 hidden md:block'>
      <TitleCard />
      <DetailTable />
      {/* <CommentsScetion /> */}
    </div>
  );
};

export default ProductDetails;
