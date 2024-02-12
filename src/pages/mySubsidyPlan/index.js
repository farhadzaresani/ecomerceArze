import SubsidyPlanCard from "@/components/mySubsidyPlan/SubsidyPlanCard";
import Loading from "@/components/ui/loading/Loading";
import usePageLoading from "@/hooks/usePageLoading";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import React from "react";
import { getMySubsidyPlans } from "../../api/Api's";
import NotAccess from "@/components/orders/NotAccess";
import Link from "next/link";
import SubsidiSkeletonLoading from "@/components/mySubsidyPlan/SubsidiSkeletonLoading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const token = getCookie("access");
  const isPageLoading = usePageLoading();

  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["plans"],
    queryFn: () => {
      if (token) {
        return getMySubsidyPlans(token);
      } else {
        return Promise.resolve(null); // Return a resolved promise to skip the fetch
      }
    },
    staleTime: Infinity,
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

  if (isLoading) return <SubsidiSkeletonLoading />;

  return (
    <div className=" h-full pb-20">
      {isPageLoading && <Loading />}
      <div className="px-8 mt-5 flex flex-col gap-4 ">
        <h1 className="font-medium text-base md:text-gray-900   ">
          طرح های من
        </h1>

        <span className="text-gray-400 text-xs   ">
          در اینجا لیستی از طرح هایی که برای شما فعال می باشد به شما پیشنهاد
          میشود
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        {data?.results && (
          <div className="flex flex-col gap-12 mt-3 ">
            {data?.results.map((item) => {
              return <SubsidyPlanCard key={item.id} item={item} />;
            })}
          </div>
        )}
      </div>
      {!token && (
        <div className="bg-black/50 backdrop-blur-md fixed top-0 z-30 w-full h-full flex justify-center items-center">
          <NotAccess />
        </div>
      )}
      <ToastContainer limit={1} />
    </div>
  );
};

export default index;

index.layout = "L1";

export async function getServerSideProps(context) {
  const { req, res } = context;
  const token = getCookie("access", { req, res });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["plans", token], () =>
    getMySubsidyPlans(token)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DUMMY_PLANS = [
  {
    title: "عرضه مرغ دولتی با قیمت مصوب",
    image: {
      url: "/assets/Images/myPlans/morq.png",
    },
  },
  {
    title: "عرضه آهن الات با قیمت مصوب",
    image: {
      url: "/assets/Images/myPlans/ahan.png",
    },
  },
  {
    title: "عرضه سیمان دولتی با قیمت مصوب",
    image: {
      url: "/assets/Images/myPlans/siman.png",
    },
  },
];
