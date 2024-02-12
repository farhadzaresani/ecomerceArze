import React from "react";
import { ArrowRightIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import MobileNavbar from "@/components/layout/MobileNavbar/MobileNavbar";
import { useForm } from "react-hook-form";
import Loading from "@/components/ui/loading/Loading";
import { addNewAddress } from "@/api/Api's";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import Head from "next/head";
const DynamicMap = dynamic(
  () => import("../../../../components/littleMap/LittleMap"),
  {
    ssr: false,
  }
);

const index = () => {
  const { control, register, handleSubmit, watch, formState } = useForm();
  const router = useRouter();
  const token = getCookie("access");
  const submitAddress = useMutation({
    mutationFn: (value) => addNewAddress(token, value),
    onSuccess: () => {
      router.back();
    },
  });
  const goBack = () => {
    router.back();
  };

  if (submitAddress.isLoading) return <Loading />;
  return (
    <>
      <Head>
        <title>سامانه عرضه کالا | سبد خرید </title>
      </Head>

      <div className="bg-gray-100 min-h-screen">
        <div className="shadow-md py-5 px-8 sticky top-0 bg-white z-20">
          <button onClick={goBack} className="flex gap-3">
            <ArrowRightIcon className="h-6 w-6 text-regalBlue" />
            <h1>آدرس ها</h1>
          </button>
        </div>
        <form
          onSubmit={handleSubmit((data) => submitAddress.mutate(data))}
          className="h-full w-full bg-gray-100   top-16 "
        >
          <div className="w-full h-full bg-white pb-10  mt-2">
            <div className="flex justify-center items-center py-4 mx-4 border-b">
              <HomeModernIcon className="h-6 w-6 text-regalBlue" />
              <h1 className="text-sm font-bold text-regalBlue">آدرس جدید</h1>
            </div>
            <div className="p-4 mt-4 flex flex-col gap-4 pb-10">
              <div className="overflow-hidden ">
                <DynamicMap />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-xs text-gray-500">آدرس : </label>
                <textarea
                  {...register("address", { required: true })}
                  className="outline-none bg-gray-100 p-4 rounded-lg resize-none h-28 "
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-xs text-gray-500">کد پستی : </label>
                <input
                  {...register("post_code", { required: false })}
                  className="outline-none bg-gray-100 p-4 rounded-lg"
                  type="number"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-xs text-gray-500">
                  نام و نام خانوادگی :{" "}
                </label>
                <input
                  {...register("full_name", { required: true })}
                  className="outline-none bg-gray-100 p-4 rounded-lg"
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="text-xs text-gray-500">شماره همراه : </label>
                <input
                  {...register("phone_number", { required: true })}
                  className="outline-none bg-gray-100 p-4 rounded-lg"
                  type="tel"
                />
              </div>

              <button
                disabled={!formState.isValid}
                className="bg-teal-400 text-white font-bold p-3 rounded-lg w-2/3 m-auto disabled:bg-gray-300"
              >
                ثبت آدرس
              </button>
            </div>
          </div>
          <MobileNavbar />
        </form>
      </div>
    </>
  );
};

export default index;
