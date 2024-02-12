import React from "react";
import { useRouter } from "next/router";
import { MapPinIcon } from "@heroicons/react/20/solid";
import {
  ArrowRightIcon,
  BuildingOfficeIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";
import { getCookie } from "cookies-next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getMyPermitions, getSinglePermition } from "@/api/Api's";

const index = () => {
  const router = useRouter();
  const token = getCookie("access");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["basket"],
    queryFn: () => {
      return getSinglePermition(token, router?.query?.id);
    },
  });

  const goBack = () => {
    router.back();
  };
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="shadow-md py-5 px-8 sticky top-0 bg-white">
        <button onClick={goBack} className="flex gap-3">
          <ArrowRightIcon className="h-6 w-6 text-regalBlue" />
          <h1 className="font-semibold">مجوز ها</h1>
        </button>
      </div>

      <div className="flex flex-col gap-3 mt-3  ">
        <div className="text-gray-700 bg-white  rounded-lg px-4">
          <div className="w-full flex gap-2 justify-start items-center border-b-[1px] py-4 ">
            <BuildingOfficeIcon className="h-6 w-6 text-regalBlue " />
            <h1 className="text-sm font-bold text-regalBlue">
              {data?.permit_type_title}
            </h1>
          </div>
          <div className="flex flex-col gap-3 py-2  text-xs font-normal">
            <div className="flex items- gap-2.5 bg-gray-100 py-4 px-3 rounded-lg ">
              <span
                className="text-gray-500 min-w-fit h-full 
                    "
              >
                شماره پرونده :
              </span>
              <h3 className="text-navy text-xs font-semibold">
                {data?.file_number}
              </h3>
            </div>
            <div className="flex items- gap-2.5 bg-gray-100 py-4 px-3 rounded-lg ">
              <span
                className="text-gray-500 min-w-fit h-full 
                    "
              >
                نوع پروانه :
              </span>
              <h3 className="text-navy text-xs font-semibold">
                {data?.permit_type_title}
              </h3>
            </div>
            <div className="flex items- gap-2.5 bg-gray-100 py-4 px-3 rounded-lg ">
              <span
                className="text-gray-500 min-w-fit h-full 
                    "
              >
                شماره پروانه :
              </span>
              <h3 className="text-navy text-xs font-semibold">
                {data?.permit_number}
              </h3>
            </div>
            <div className="flex items- gap-2.5 bg-gray-100 py-4 px-3 rounded-lg ">
              <span
                className="text-gray-500 min-w-fit h-full 
                    "
              >
                تاریخ صدور:
              </span>
              <h3 className="text-navy text-xs font-semibold">
                {data?.emission_date}
              </h3>
            </div>
            <div className="flex items- gap-2.5 bg-gray-100 py-4 px-3 rounded-lg ">
              <span
                className="text-gray-500 min-w-fit h-full 
                    "
              >
                کاربری :
              </span>
              <h3 className="text-navy text-xs font-semibold">
                {data?.type_of_construction}
              </h3>
            </div>
            <div className="flex items- gap-2.5 bg-gray-100 py-4 px-3 rounded-lg ">
              <span
                className="text-gray-500 min-w-fit h-full 
                    "
              >
                طبقات :
              </span>
              <h3 className="text-navy text-xs font-semibold">
                {data?.number_of_floors}
              </h3>
            </div>
            <div className="flex items- gap-2.5 bg-gray-100 py-4 px-3 rounded-lg ">
              <span
                className="text-gray-500 min-w-fit h-full 
                    "
              >
                مساحت :
              </span>
              <h3 className="text-navy text-xs font-semibold">{data?.area}</h3>
            </div>
            <div className="flex items- gap-2.5 bg-gray-100 py-4 px-3 rounded-lg ">
              <span
                className="text-gray-500 min-w-fit h-full 
                    "
              >
                آدرس :
              </span>
              <h3 className="text-navy text-xs font-semibold">
                {data?.address}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { req, res } = context;
  const token = getCookie("access", { req, res });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["baskets", token], () =>
    getSinglePermition(token)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
