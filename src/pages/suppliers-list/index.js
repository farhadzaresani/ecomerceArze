import Head from "next/head";
import { QueryClient, dehydrate, useQueries } from "@tanstack/react-query";
import SuppliersSection from "@/components/Suppliers/SuppliersSection";
import { getSuppliersList } from "../../api/Api's";
import Loading from "@/components/ui/loading/Loading";
import usePageLoading from "@/hooks/usePageLoading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const index = () => {
  const isLoading = usePageLoading();
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
        queryKey: ["supplierList", 1],
        queryFn: getSuppliersList,
        staleTime: Infinity,
        cacheTime: 0,
      },
    ],
  });

  if (results.some((r) => r.error)) {
    toastHandler("مشکلی پیش آمده است!");
  }
  if (results.some((r) => r.isLoading)) return <Loading />;
  return (
    <>
      <Head>
        <title> فروشندگان | سامانه عرضه کالا </title>
      </Head>
      {isLoading && <Loading />}
      <SuppliersSection suppliers={results[0].data.results} />
      <ToastContainer limit={1} />
    </>
  );
};
index.layout = "L3";
export default index;

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["suppliers"], getSuppliersList);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
