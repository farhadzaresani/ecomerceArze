import { getProductList } from "../../api/Api's";
import {
  QueryClient,
  dehydrate,
  useQueries,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import Loading from "@/components/ui/loading/Loading";
import Head from "next/head";
import { useEffect } from "react";
import usePageLoading from "@/hooks/usePageLoading";
import { useDispatch } from "react-redux";
import { setFilter } from "@/store/reducers/filterReducer";
import ProductsSection from "@/components/Product/ProductsSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCookie } from "cookies-next";

const index = () => {
  const router = useRouter();
  const token = getCookie("access");
  const dispatch = useDispatch();
  const isPageLoading = usePageLoading();
  const queryClient = new QueryClient();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["productList"],
    queryFn: () =>
      getProductList(
        router?.query?.category,
        {
          min: router?.query?.min,
          max: router?.query?.max,
        },
        router?.query?.ordering,
        router?.query?.plan,
        token
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries("productList");
    },
    onError: (err) => {},
  });

  useEffect(() => {
    refetch();
  }, [router]);

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
  return (
    <>
      <Head>
        <title> محصولات | سامانه عرضه کالا </title>
      </Head>
      {(isLoading || isPageLoading) && <Loading />}
      <div className="flex w-full relative justify-between   bg-white md:bg-[#F3F4F6]">
        <ProductsSection
          products={data?.results}
          // relatedCategories={results[0]?.related_categories}
        />
      </div>
      {/* <ToastContainer limit={1} /> */}
    </>
  );
};

export async function getStaticProps(context) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["products"], () => getProductList());
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

index.layout = "L3";
export default index;
