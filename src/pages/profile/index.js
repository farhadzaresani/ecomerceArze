import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, removeCookies } from "cookies-next";
import Loading from "@/components/ui/loading/Loading";
import usePageLoading from "@/hooks/usePageLoading";
import { currentUser, removeUserData } from "@/store/reducers/userReducer";
import { removeBasket } from "@/store/reducers/basketReducer";
import { removeAddress } from "@/store/reducers/addressReducer";
import ProfileMenu from "@/components/Profile/ProfileMenu";
import { QueryClient, dehydrate, useQueries } from "@tanstack/react-query";
import { getMyCurrentOrders, getMyDeliveredOrders } from "@/api/Api's";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const token = getCookie("access");
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = usePageLoading();
  const thisUser = useSelector(currentUser);
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
        cacheTime: 0,
        staleTime: Infinity,
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
        staleTime: Infinity,
      },
    ],
  });

  const signOutHandler = () => {
    removeCookies("access");
    removeCookies("refresh");
    router.reload();
    dispatch(removeUserData());
    dispatch(removeBasket());
    dispatch(removeAddress());
  };
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
  if (results.some((r) => r.error)) {
    toastHandler("مشکلی پیش آمده است!");
  }
  if (results.some((r) => r.isLoading || r.isFetching)) return <Loading />;

  return (
    <div className="md:bg-gray-100 flex md:pb-10">
      {isLoading && <Loading />}
      <ProfileMenu
        thisUser={thisUser}
        signOutHandler={signOutHandler}
        currentOrderQuan={results[0]?.data?.results?.length}
        deliverOrderQuan={results[1]?.data?.results?.length}
      />
      <ToastContainer limit={1} />
    </div>
  );
};

Profile.layout = "L1";
export default Profile;

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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
