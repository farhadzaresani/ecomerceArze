import { getCurrentFilters } from "@/store/reducers/filterReducer";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function AccordionItem({ title, data, id, isLoaded }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const filters = useSelector(getCurrentFilters);

  const applyFilter = () => {
    const currentQuery = router.query;
    const newQuery = {
      ...currentQuery,
      category: id,
    };

    if (router.pathname.includes("products-list")) {
      router.push({
        pathname: "/products-list",
        query: newQuery,
      });
    }
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (title === "همه") {
      setIsOpen(true);
    }
  }, []);

  return (
    <div className={`mr-5`}>
      {data?.length > 0 ? (
        <h3
          // onClick={() => setFilterHandler()}
          className={`flex   py-2 gap-3.5 ${
            isOpen ? "text-navy" : "text-gray-500"
          } w-full  font-medium border-b-[1px] cursor-pointer`}
        >
          <button onClick={toggleOpen}>
            {isOpen ? (
              <ChevronUpIcon className=' w-5 h-5 text-black ' />
            ) : (
              <ChevronDownIcon className=' w-5 h-5 text-black ' />
            )}
          </button>
          {title}
        </h3>
      ) : (
        <div>
          <h3
            onClick={applyFilter}
            className='flex   py-2 gap-3.5 text-navy w-full  font-medium border-b-[1px] cursor-pointer'
          >
            {title}
            {filters &&
              filters.some(
                (item) => item.id == id && item.type === "category"
              ) && <CheckIcon className='h-5 w- text-teal-500' />}
          </h3>
        </div>
      )}

      <div className=' overflow-hidden  '>
        <div
          className={`${
            !isOpen
              ? " -translate-y-[300vh] max-h-0 "
              : "translate-y-0 max-h-full  "
          } transition-all duration-500  `}
        >
          {data?.map((item) => {
            return (
              <div key={item.id}>
                {item ? (
                  <AccordionItem
                    id={item.id}
                    title={item.title}
                    data={
                      item.category_set ? item.category_set : item.product_set
                    }
                  />
                ) : (
                  <AccordionItem title={item.title} id={item.id} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
