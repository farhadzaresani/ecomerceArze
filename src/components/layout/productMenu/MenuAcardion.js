import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function MenuAcardion({ title, data, level, id }) {
  const router = useRouter();

  const changeRoute = () => {
    const currentQuery = router.query;
    const newQuery = {
      // ...currentQuery,
      category: id,
    };
    router.push({
      pathname: "/products-list",
      query: newQuery,
    });
  };

  return (
    <div className={`   `}>
      <div className='flex item-center  cursor-pointer py-2 gap-3.5 text-navy w-full text-lg  font-medium '>
        {level === 1 ? (
          <>
            <button
              onClick={changeRoute}
              className='flex justify-center items-center gap-1'
            >
              <h1 className='border-b-2 border-cream'>{title}</h1>
              <ChevronLeftIcon className=' w-4 h-4 text-black ' />
            </button>
          </>
        ) : (
          <button onClick={changeRoute} className='text-gray-600 text-sm  '>
            {title}
          </button>
        )}
      </div>
      <div className=' overflow-hidden  '>
        <div>
          {data?.map((item) => {
            return (
              <div key={item.id}>
                {item ? (
                  <MenuAcardion
                    title={item.title}
                    data={
                      item.category_set ? item.category_set : item.product_set
                    }
                    id={item.id}
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
  );
}
