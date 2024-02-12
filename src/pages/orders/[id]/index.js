import { getMySingleOrders } from "@/api/Api's";
import OrderStatusBar from "@/components/SingleOrder/OrderStatusBar";
import Loading from "@/components/ui/loading/Loading";
import useRialStyle from "@/hooks/useRialStyle";
import {
  BuildingLibraryIcon,
  BuildingStorefrontIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
  const router = useRouter();
  const token = getCookie("access");
  const id = useRouter()?.query?.id;
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["singleOrder"],
    queryFn: () => getMySingleOrders(token, id),
    staleTime: Infinity,
    onSuccess: (res) => {},
  });

  console.log(data?.unique_request_code);
  if (isLoading || isFetching) return <Loading />;
  return (
    <>
      <Head>
        <title> | سامانه عرضه کالا</title>
      </Head>
      <div className="bg-gray-100 min-h-screen p-4">
        <div className="flex justify-between">
          <h1 className="flex gap-1 font-bold text-base text-gray-700">
            سفارش
            <span dir="ltr">{data?.unique_request_code}</span>
          </h1>
          <button onClick={() => router.back()}>
            <XMarkIcon className="w-6 h-6 text-regalBlue" />
          </button>
        </div>
        <div className=" p-2 bg-white rounded-lg shadow-md mt-4">
          <OrderStatusBar status={"4"} />
        </div>
        <div className="mt-6">
          <h1 className="text-base font-bold text-gray-700">لیست سفارش</h1>
          <div className="bg-white rounded-lg shadow-md mt-3 ">
            {data?.data?.items?.map((item, i, array) => {
              return (
                <div
                  key={item?.item_id}
                  className={`flex justify-between w-full p-5 border-b ${
                    i == array.length - 1 && "border-none"
                  } `}
                >
                  <div className="flex w-full gap-3">
                    <Image
                      src={item?.image[0]}
                      width={40}
                      height={40}
                      className="w-full h-full max-w-[40px] max-h-[40px] border rounded"
                    />
                    <h2 className="text-xs font-medium text-gray-600">
                      {item?.item_title}
                    </h2>
                  </div>
                  <div className="w-full flex flex-col justify-between items-end gap-6 mt-2 ">
                    <h3 className="flex items-center gap-1 text-gray-600 font-medium text-xs">
                      <XMarkIcon className="w-3 h-3 text-red-600" />
                      {item?.quantity}
                      <span className="text-[9px]">(عدد)</span>
                    </h3>
                    <h2 className="font-medium text-gray-600 text-xs">
                      {useRialStyle(item?.price)}{" "}
                      <span className="text-[10px]"> تومان</span>{" "}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-base font-bold text-gray-700">
            محصولات خریداری شده شما از فروشگاه :
          </h1>
          <Link
            href={`/supplier/${data?.data?.shop_unique_id}`}
            className="flex gap-2 mt-3 "
          >
            <BuildingStorefrontIcon className="w-5 h-5 text-gray-700" />
            <h2 className="text-teal-400 underline font-bold text-sm">
              {data?.data?.shop_name}
            </h2>
          </Link>
        </div>
        <h1 className="text-base font-bold text-gray-700 mt-6">فاکتور</h1>
        <div className=" border  m-auto p-3 rounded-md flex flex-col gap-3 bg-white mt-3">
          {data?.data?.items?.map((item, i, array) => {
            return (
              <div className="flex text-xs font-normal justify-between">
                <div className="flex items-start gap-4">
                  <label className="w-2/3">{item?.item_title}</label>
                  <span className="flex justify-center items-center">
                    <XMarkIcon className="w-3 h-3 text-red-600" />{" "}
                    {item?.quantity}
                  </span>
                </div>
                <h2 className="font-medium text-gray-600 text-xs">
                  {useRialStyle(item?.price)}{" "}
                  <span className="text-[10px]"> تومان</span>{" "}
                </h2>
              </div>
            );
          })}
          <div className="flex text-xs font-normal justify-between">
            <div className="flex gap-4">
              <label>هزینه ارسال</label>
            </div>
            <h2 className="font-medium text-gray-600 text-xs">
              {useRialStyle(data?.data?.shipping_price)}{" "}
              <span className="text-[10px]"> تومان</span>{" "}
            </h2>
          </div>
          <div className="flex text-xs font-normal justify-between">
            <div className="flex gap-4">
              <label>بارگیری</label>
            </div>
            <h2 className="font-medium text-gray-600 text-xs">
              {useRialStyle(data?.data?.loading_on_fee)}{" "}
              <span className="text-[10px]"> تومان</span>{" "}
            </h2>
          </div>
          <div className="flex text-xs font-normal justify-between">
            <div className="flex gap-4">
              <label>تخلیه بار</label>
            </div>
            <p>{useRialStyle(data?.data?.loading_off_fee)} تومان</p>
          </div>
          <div className="flex text-xs font-normal justify-between text-teal-400">
            <div className="flex gap-4">
              <label>تخفیف</label>
            </div>
            <p>{useRialStyle(0)} تومان</p>
          </div>
          <div className="flex text-xs font-normal justify-between text-green-400 border-t pt-4 pb-2">
            <div className="flex gap-4">
              <label>قابل پرداخت</label>
            </div>
            <h2 className="font-medium text-gray-600 text-xs">
              {useRialStyle(data?.data?.total_price)}{" "}
              <span className="text-[10px]"> تومان</span>{" "}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;

index.layout = "L2";

export async function getServerSideProps(context) {
  const { req, res } = context;
  const id = context.params.id;
  const token = getCookie("access", { req, res });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["singleOrder", id], () =>
    getMySingleOrders(token, id)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
