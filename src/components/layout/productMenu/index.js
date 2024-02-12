import { closeProductMenu } from "@/store/reducers/productMenuReducer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import MenuItem from "./MenuItem";
import MenuAcardion from "./MenuAcardion";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const ProductMenu = ({ categories }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [itemData, setItemData] = useState(categories[0]);

  const changeRoute = (id) => {
    const currentQuery = router.query;
    const newQuery = {
      ...currentQuery,
      category: id,
    };
    router.push({
      pathname: "/products-list",
      query: newQuery,
    });
  };

  return (
    <div className="hidden md:block">
      <div
        onMouseOver={() => {
          dispatch(closeProductMenu());
        }}
        className="fixed right-0 z-10 w-[100vw] bg-black/20 h-screen flex  "
      ></div>
      <div className="m-auto w-[1056px] h-[510px] bg-white fixed z-50 top-28 right-4 rounded-b-lg shadow-xl  ">
        <div className="flex h-full">
          <div className="  h-full border-l-2 ">
            {categories.map((category) => {
              return (
                <MenuItem
                  key={category.id}
                  onClick={() => changeRoute(category.id)}
                  isopen={itemData?.id === category.id ? 1 : 0}
                  onMouseOver={() => setItemData(category)}
                  title={category.title}
                  data={category}
                />
              );
            })}
          </div>
          <div className="m-4 gap-5">
            <h1
              onClick={() => changeRoute(itemData.id)}
              className="flex items-center text-gray-900 font-normal text-xs cursor-pointer "
            >
              {" "}
              همه محصولات {itemData?.title}{" "}
              <ChevronLeftIcon className=" w-4 h-4   " />
            </h1>
            <div className="pt-7 flex flex-col flex-wrap  gap-5 w-full h-full">
              {itemData?.category_set?.map((item) => {
                return (
                  <div key={item.id}>
                    {item ? (
                      <MenuAcardion
                        level={item.level}
                        id={item.id}
                        title={item.title}
                        data={
                          item.category_set
                            ? item.category_set
                            : item.product_set
                        }
                      />
                    ) : (
                      <MenuAcardion title={item.title} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMenu;
