import React from "react";
import MobileBasketCardItem from "./MobileBasketCardItem";

const MobileBasketList = ({ listItem }) => {
  return (
    <div className="bg-white m-4 p-4 shadow-md rounded-lg">
      <h1 className="text-sm">لیست محصولات</h1>
      {listItem?.map((item) => {
        return <MobileBasketCardItem key={item?.id} item={item} />;
      })}
    </div>
  );
};

export default MobileBasketList;
