import React from "react";
import { useRouter } from "next/router";
import { MapPinIcon } from "@heroicons/react/20/solid";
import {
  ArrowRightIcon,
  BuildingOfficeIcon,
  PlusIcon,
  CalculatorIcon,
} from "@heroicons/react/24/outline";
import { getCookie } from "cookies-next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getMyPermitions } from "@/api/Api's";
import Link from "next/link";
import Loading from "@/components/ui/loading/Loading";

const DUMMY_DATA = {
  title: "مجوز ساخت",
  attributes: [
    { key: "شماره پرونده : ", value: "253251423" },
    { key: "نوع پروانه : ", value: "تخریب و نوسازی" },
    { key: "شماره پروانه : ", value: "40046119" },
    { key: "تاریخ صدور: ", value: "1401/05/05" },
    { key: "کاربری: ", value: "مسکونی" },
    { key: "طبقه زیر زمین : ", value: "1" },
    { key: "طبقه روی زمین : ", value: "3" },
    { key: "مساحت : ", value: "624.00 متر" },
    {
      key: "آدرس : ",
      value:
        "یوسف آباد، خ. سید جمال الدین اسد آبادی، نرسیده به م. سید جمال الدین اسد آبادی، خ. سی و پنجم",
    },
  ],
};

const index = () => {
  const router = useRouter();
  const token = getCookie("access");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["permitions"],
    queryFn: () => {
      return getMyPermitions(token);
    },
    // staleTime: Infinity,
  });

  const goBack = () => {
    router.back();
  };
  if (isLoading) return <Loading />;
  return (
    <div className='bg-gray-100 min-h-screen'>
      <div className='shadow-md py-5 px-8 sticky top-0 bg-white'>
        <button onClick={goBack} className='flex gap-3'>
          <ArrowRightIcon className='h-6 w-6 text-regalBlue' />
          <h1 className='font-semibold'>مجوز ها</h1>
        </button>
      </div>
      <div className='w-full flex gap-2 justify-between items-center border-b-[1px] p-4 mt-2 bg-white '>
        <div className='flex items-center'>
          <BuildingOfficeIcon className='h-6 w-6 text-regalBlue ' />
          <h1 className='text-sm font-bold text-regalBlue'>پروانه ساخت</h1>
        </div>
        <button
          onClick={() => router.push("/profile/permissions/addPermission")}
          className='text-white bg-teal-400 flex items-center px-2 py-1 rounded'
        >
          افزودن پروانه
          <PlusIcon className='h-6 w-6' />
        </button>
      </div>
      {data?.results?.map((item, i) => {
        return (
          <Link
            href={`/profile/permissions/${item.id}`}
            key={item?.id}
            className='flex flex-col gap-3 m-2  '
          >
            <div className='text-gray-700  rounded-lg '>
              <div className='flex flex-col p-3  text-xs font-normal bg-white rounded-lg  gap-2'>
                <div className='flex items-center gap-2.5'>
                  <span
                    className='text-gray-500 min-w-fit h-full 
                    '
                  >
                    شماره پرونده :
                  </span>
                  <h3 className='text-navy text-xs font-semibold'>
                    {item?.file_number}
                  </h3>
                </div>
                <div className='flex items-center gap-2.5'>
                  <span
                    className='text-gray-500 min-w-fit h-full 
                    '
                  >
                    نوع پروانه :
                  </span>
                  <h3 className='text-navy text-xs font-semibold'>
                    {item?.type_of_construction}
                  </h3>
                </div>
                <div className='flex items-center gap-2.5'>
                  <span
                    className='text-gray-500 min-w-fit h-full 
                    '
                  >
                    شماره پروانه :
                  </span>
                  <h3 className='text-navy text-xs font-semibold'>
                    {item?.permit_number}
                  </h3>
                </div>
                <div className='flex items-center gap-2.5'>
                  <span
                    className='text-gray-500 min-w-fit h-full 
                    '
                  >
                    کاربری :
                  </span>
                  <h3 className='text-navy text-xs font-semibold'>
                    {item?.permit_type_title}
                  </h3>
                </div>
                <div className='flex items-center gap-2.5 text-sm font-normal text-gray-700'>
                  <h4>{item.address}</h4>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { req, res } = context;
  const token = getCookie("access", { req, res });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["baskets", token], () =>
    getMyPermitions(token)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
