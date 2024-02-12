import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import React from "react";

const MobileSortPage = (props) => {
  const router = useRouter();
  const submitOrdering = (value) => {
    const currentQuery = router.query;
    const newQuery = {
      ...currentQuery,
      ordering: value,
    };
    router.push({
      pathname: "/products-list",
      query: newQuery,
    });
    props.closeFilterTab();
  };
  return (
    <div className="fixed top-0 w-full h-full bg-white z-50 p-4 ">
      <div className="w-full flex justify-between items-center pb-4">
        <h1 className="text-xs font-bold">دسته بندی بر اساس</h1>
        <button onClick={props.closeFilterTab}>
          <XMarkIcon className="h-6 w-6 text-navy " />
        </button>
      </div>
      <div>
        {props?.sort?.map((item, i) => {
          return (
            <button
              key={i}
              onClick={() => submitOrdering(item.value)}
              className="w-full flex justify-between items-center border-b py-4 text-xs"
            >
              {item.name}
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileSortPage;

MobileSortPage.defaultProps = {
  sort: [
    { name: "پربازدید ترین", value: "" },
    { name: "گران ترین", value: "expensive" },
    { name: "ارزان ترین", value: "cheap" },
  ],
};
