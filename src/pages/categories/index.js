import Loading from "@/components/ui/loading/Loading";
import usePageLoading from "@/hooks/usePageLoading";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategoryGroups } from "../../api/Api's";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import CategoryChildSlider from "@/components/categories/CategoryChildSlider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const isLoading = usePageLoading();

  const { data, isError } = useQuery({
    queryKey: ["categories", 0],
    queryFn: getCategoryGroups,
  });

  const toastHandler = (message, type) => {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      rtl: true,
      theme: "light",
    });
  };
  if (isError) {
    toastHandler("مشکلی پیش آمده است!");
  }

  return (
    <div className="pb-20 px-4">
      {isLoading && <Loading />}
      {data?.map((item, i) => {
        return (
          <div key={item?.id}>
            <div className="pb-12 pt-4">
              <div className="flex items-center justify-between p-4 mb-2">
                <h1 className="text-sm font-bold text-gray-700">
                  {item?.title}
                </h1>
                <Link
                  href={`products-list?category=${item.id}`}
                  className="flex justify-center items-center  text-xs font-bold text-teal-400 "
                >
                  <h1>مشاهده همه</h1>
                  <ChevronLeftIcon className="h-5 w-5" />
                </Link>
              </div>
              <div>
                <CategoryChildSlider category={item?.category_set} />
              </div>
            </div>
            {i !== data?.length - 1 && (
              <div className="flex justify-center items-center">
                <div className="bg-gray-200 h-[1px] w-full " />
              </div>
            )}
          </div>
        );
      })}
      <ToastContainer limit={1} />
    </div>
  );
};

export default index;
index.layout = "L1";

// getCategoryGroups

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["categories"], getCategoryGroups);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
