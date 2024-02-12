import React from "react";

const BreadCrump = ({ crumpList }) => {
  return (
    <div className=" hidden md:flex justify-end  flex-row-reverse gap-2 font-medium text-sm py-3.5 px-5 bg-gray-100 ">
      {crumpList?.map((item, i) => {
        return (
          <div className=" flex gap-2 cursor-pointer " key={`${item}_${i}`}>
            {i !== crumpList.length - 1 && <p className="text-gray-400">/</p>}
            <p className={`text-gray-400 ${i === 0 && "text-navy"}`}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrump;
