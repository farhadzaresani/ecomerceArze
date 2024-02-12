import MobileBasketAddress from "@/components/Basket/SingleBasket/MobileBasketAddress";
import MobileBasketDeliveryTime from "@/components/Basket/SingleBasket/MobileBasketDeliveryTime";
import Loading from "@/components/ui/loading/Loading";
import usePageLoading from "@/hooks/usePageLoading";
import {
  addDateTimeToBasketItem,
  addToBasket,
  getSingleBasket,
  orderSetToProgress,
  startProgress,
  updateBasketDeliverdMethod,
} from "@/api/Api's";
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Head from "next/head";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { XMarkIcon } from "@heroicons/react/24/outline";
import StatusBar from "@/components/Basket/mobile/StatusBar";
import { useState } from "react";
import BasketOrdersList from "@/components/Basket/mobile/BasketOrdersList";
import MobilePayment from "@/components/Basket/SingleBasket/MobilePayment";
import PopUpConfrimModal from "@/components/Basket/SingleBasket/PopUpConfrimModal";

const index = (props) => {
  const token = getCookie("access", {});
  const pageLoading = usePageLoading();
  const router = useRouter();
  const id = useRouter()?.query?.bid;
<<<<<<< HEAD
  const [step, setStep] = useState(2);
=======
  const [step, setStep] = useState(0);
  const [selectDeliveryType, setSelectDeliveryType] = useState("sending");
  const [releasedType, setReleasedType] = useState("false");
  const [selectAddress, setSelectAddress] = useState(null);
  const [selectDay, setSelectDay] = useState("");
  const [popUpModal, setPopUpModal] = useState(false);
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862

  const { data, isLoading, refetch, isSuccess, isError, isFetching } = useQuery(
    {
      queryKey: ["singleBasketdata"],
      queryFn: () => getSingleBasket(token, id),
      staleTime: Infinity,
      cacheTime: 0,
      onSuccess: (res) => {
        res?.results[0]?.status === "list" && setStep(2);
        res?.results[0]?.status === "completed list" && setStep(3);
        res?.results[0]?.status === "delivery time" && setStep(4);
        res?.results[0]?.status === "time fixed" && setStep(5);
      },
    }
  );

  const updateOrderQuantity = useMutation({
    mutationFn: (req) =>
      addToBasket(token, req.itemId, req.quan, data?.results[0]?.shop?.id),
    onSuccess: async (res) => {
      refetch();
    },
  });

  const updateDeliveryMethod = useMutation({
    mutationFn: (value) => updateBasketDeliverdMethod(token, id, value),
    onSuccess: async (res) => {
      refetch();
    },
  });

  const HanldleStartProgress = useMutation({
    mutationFn: () => startProgress(token, id),
    onSuccess: async (res) => {
      refetch();
    },
  });

  const updateBasketdeliveryDate = useMutation({
    mutationFn: (value) => addDateTimeToBasketItem(token, id, value),
    onSuccess: async (res) => {
      refetch();
    },
  });

  const BackStepHandler = () => {
    setStep(step - 1);
  };
  //step 1
  const submitList = () => {
    HanldleStartProgress.mutate();
  };

  //step 2
  const submitLocation = () => {
    updateDeliveryMethod.mutate(
      selectDeliveryType === "sending"
        ? {
            shipping_method: selectDeliveryType,
            shipping_address: selectAddress?.id,
            load_by: releasedType,
          }
        : { shipping_method: selectDeliveryType, load_by: false }
    );
  };
  //step 3
  const submitDeliveryTime = () => {
    updateBasketdeliveryDate.mutate({ pickup_date_value_select: selectDay });
  };

  //step 4
  const setToProgress = useMutation({
    mutationFn: (req) => orderSetToProgress(token, data?.results[0]?.id),
    onSuccess: (res) => {
      setPopUpModal(true);
    },
    onError: (err) => {},
  });

  if (isLoading || pageLoading || isFetching) {
    return <Loading />;
  }
  if (isError) {
    toastHandler("مشکلی پیش آمده است!");
  }
<<<<<<< HEAD
  const BackStepHandler = () => {};

  const NextStepHandler = () => {
    setStep(step + 1);
  };
=======
  if (
    updateOrderQuantity.isLoading ||
    updateDeliveryMethod.isLoading ||
    HanldleStartProgress.isLoading ||
    updateBasketdeliveryDate.isLoading ||
    submitLocation.isLoading ||
    submitDeliveryTime.isLoading ||
    setToProgress.isLoading
  )
    return <Loading />;
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862

  return (
    <>
      <div className=" min-h-screen pb-24 bg-white">
        <Head>
          <title>سامانه عرضه کالا | سبد خرید </title>
        </Head>
        <div className="bg-cream p-5 flex justify-end items-center gap-[30%] sticky top-0 border-b">
          <h1 className="font-bold">تکمیل سفارش</h1>
          <button onClick={() => router.back()}>
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>
        <StatusBar status={step} />
        {/* step 1 */}
        {data?.results[0]?.status === "list" && (
          <BasketOrdersList
            listItem={data?.results[0]?.lines}
            data={data?.results[0]}
            updateOrder={updateOrderQuantity}
            BackStepHandler={BackStepHandler}
            NextStepHandler={submitList}
            step={step}
          />
        )}
        {/* step 2 */}
        {data?.results[0]?.status === "completed list" && (
          <MobileBasketAddress
            selectDeliveryType={selectDeliveryType}
            setSelectDeliveryType={setSelectDeliveryType}
            setSelectAddress={setSelectAddress}
            selectAddress={selectAddress}
            selectedOptionReleasedType={releasedType}
            setSelectedOptionReleasedType={setReleasedType}
            BackStepHandler={BackStepHandler}
            NextStepHandler={submitLocation}
            factorData={data?.results[0]}
          />
        )}
        {/* step 3 */}
        {data?.results[0]?.status === "delivery time" && (
          <MobileBasketDeliveryTime
            pickupTimes={data?.results[0]?.pickup_date_value_display}
            isSuccess={isSuccess}
            BackStepHandler={BackStepHandler}
            NextStepHandler={submitDeliveryTime}
            selectDay={selectDay}
            setSelectDay={setSelectDay}
            data={data?.results[0]}
          />
        )}
        {/* step 4 */}
        {data?.results[0]?.status === "time fixed" && (
          <MobilePayment
            submit={() => setToProgress.mutate()}
            data={data?.results[0]}
          />
        )}
      </div>
      {popUpModal && (
        <PopUpConfrimModal onClick={() => router.push("/orders")} />
      )}
    </>
  );
};

export default index;
index.layout = "L2";

export async function getServerSideProps(context) {
  const { req, res } = context;
  const id = context.params.bid;
  const token = getCookie("access", { req, res });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["baskets", token, id], () =>
    getSingleBasket(token, id)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
