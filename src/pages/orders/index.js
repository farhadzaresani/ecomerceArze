import {
  getMyCanceledOrders,
  getMyCurrentOrders,
  getMyDeliveredOrders,
} from "@/api/Api's";
import NotAccess from "@/components/orders/NotAccess";
import TabBar from "@/components/orders/TabBar";
import CanceledOrders from "@/components/orders/canceled/CanceledOrders";
import CurrentOrders from "@/components/orders/current/CurrentOrders";
import DeliverdOrders from "@/components/orders/deliverd/DeliverdOrders";
import Loading from "@/components/ui/loading/Loading";
import usePageLoading from "@/hooks/usePageLoading";
import { QueryClient, dehydrate, useQueries } from "@tanstack/react-query";
import { getCookie, hasCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const isLoading = usePageLoading();
  const isLogin = hasCookie("access", {});
  const [status, setStatus] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const token = getCookie("access");
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

  const results = useQueries({
    queries: [
      {
        queryKey: ["currentOrders"],
        queryFn: () => {
          if (token) {
            return getMyCurrentOrders(token);
          } else {
            return Promise.resolve(null); // Return a resolved promise to skip the fetch
          }
        },
        staleTime: Infinity,
        cacheTime: 0,
      },
      {
        queryKey: ["deliverdOrders"],
        queryFn: () => {
          if (token) {
            return getMyDeliveredOrders(token);
          } else {
            return Promise.resolve(null); // Return a resolved promise to skip the fetch
          }
        },

        cacheTime: 0,
        enabled: false,
      },
      // {
      //   queryKey: ["canceledOrders"],
      //   queryFn: () => {
      //     if (token) {
      //       return getMyCanceledOrders(token);
      //     } else {
      //       return Promise.resolve(null); // Return a resolved promise to skip the fetch
      //     }
      //   },
      //   cacheTime: 0,
      // },
    ],
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const tabChangeHandler = (value) => {
    setStatus(value);
  };

  if (results[0].isLoading) return <Loading />;
  if (results.some((r) => r.error)) {
    toastHandler("مشکلی پیش آمده است!");
  }

  return (
    <div className="  flex flex-col bg-gray-100  relative min-h-[90vh]  ">
      {isLoading && <Loading />}
      {isLogin ? (
        <div className="  min-h-full  flex flex-col ">
          <TabBar
            {...{ status, tabChangeHandler }}
            current={results[0]?.data?.results.length}
            deliverd={results[1]?.data?.results.length}
          />
          {status === 0 && <CurrentOrders data={results[0]?.data?.results} />}
          {status === 1 && <DeliverdOrders data={results[1]?.data?.results} />}
        </div>
      ) : (
        <div className=" bg-gray-100 absolute top-0 w-full h-full  flex flex-col justify-center items-center ">
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
  await queryClient.prefetchQuery(["currentOrders", token], () =>
    getMyCurrentOrders(token)
  );
  await queryClient.prefetchQuery(["deliverdOrders", token], () =>
    getMyDeliveredOrders(token)
  );
  // await queryClient.prefetchQuery(["canceledOrders", token], () =>
  //   getMyCanceledOrders(token)
  // );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
