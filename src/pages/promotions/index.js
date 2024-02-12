import { getProductList } from "../../api/Api's";
import { QueryClient, dehydrate, useQueries } from "@tanstack/react-query";
import Loading from "@/components/ui/loading/Loading";
import Head from "next/head";
import usePageLoading from "@/hooks/usePageLoading";
import PromotionProductsSection from "@/components/Promotions/PromotionProductsSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const isLoading = usePageLoading();

  const results = useQueries({
    queries: [
      {
        queryKey: ["productList"],
        queryFn: () => getProductList(),
      },
    ],
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
  if (results.some((r) => r.error)) {
    toastHandler("مشکلی پیش آمده است!");
  }

  if (results.some((r) => r.isLoading)) return <Loading />;
  return (
    <>
      <Head>
        <title> تخفیف | سامانه عرضه کالا </title>
      </Head>
      {isLoading && <Loading />}
      <PromotionProductsSection products={results[0].data.results} />
      <ToastContainer limit={1} />
    </>
  );
};

export async function getStaticProps(context) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], getProductList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

index.layout = "L1";
export default index;
