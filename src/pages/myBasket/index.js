import BasketPageContainer from "@/components/Basket/BasketPageContainer";
import Head from "next/head";
import usePageLoading from "@/hooks/usePageLoading";
import Loading from "@/components/ui/loading/Loading";
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { deleteWholeBasket, getMyBasketData, setGiftCode } from "@/api/Api's";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const index = () => {
  const router = useRouter();
  const token = getCookie("access");

  const { data, isLoading, refetch, isError } = useQuery({
    queryKey: ["basket"],
    queryFn: () => {
      if (token) {
        return getMyBasketData(token);
      } else {
        return Promise.resolve(null); // Return a resolved promise to skip the fetch
      }
    },
    staleTime: Infinity,
    cacheTime: 0,
  });

  const deletItem = useMutation({
    mutationFn: (req) => {
      deleteWholeBasket(token, req.id);
    },
    onSuccess: async (res, variables) => {
      router.reload();
      await refetch();
    },
    onError: (err) => {},
  });

  const addMoreOfItem = useMutation({
    mutationFn: async (req) => {
      await addToBasket(token, req.itemId, req.quan, req.shopId);
    },
    onSuccess: (res) => {
      refetch();
    },
    onError: (err) => {},
  });

  const confirmGiftCode = useMutation({
    mutationFn: () => setGiftCode(token, giftCardInput),
    mutationKey: ["setgiftcode"],
    onSuccess: (res) => {
      // dispatch(setPriceAfterGiftCode(res.data[0].discount_amount));
      //test
    },
  });

  const pageLoading = usePageLoading();
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
  if (isLoading || pageLoading) {
    return <Loading />;
  }

  return (
    <div className='min-h-screen'>
      <Head>
        <title>سامانه عرضه کالا | سبد خرید </title>
      </Head>
      {isLoading && <Loading />}
      <BasketPageContainer
        token={token}
        data={data?.results}
        refetch={refetch}
        deletItem={deletItem}
        addMoreOfItem={addMoreOfItem}
        confirmGiftCode={confirmGiftCode}
      />
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
  await queryClient.prefetchQuery(["baskets", token], () =>
    getMyBasketData(token)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
