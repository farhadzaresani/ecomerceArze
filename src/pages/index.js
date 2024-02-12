import BlogsSection from "@/components/homePage/BlogsSection";
import CategoriesSection from "@/components/homePage/CategoriesSection";
import HomeHeroSection from "@/components/homePage/HomeHeroSection";
import NewProductsSection from "@/components/homePage/NewProductsSection";
import WhyUseThisSection from "@/components/homePage/WhyUseThisSection";
import Loading from "@/components/ui/loading/Loading";
import Head from "next/head";
import usePageLoading from "@/hooks/usePageLoading";
import {
  getCategoryGroups,
  getMySubsidyPlans,
  getNewestProducts,
} from "../api/Api's";
import { QueryClient, dehydrate, useQueries } from "@tanstack/react-query";
import MobileImageSlider from "@/components/homePage/MobileImageSlider";
import MobileSearchInput from "@/components/homePage/MobileSearchInput";
import { getCookie } from "cookies-next";
import HomePageSkeleton from "@/components/homePage/Loading/HomePageSkeleton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function Home() {
  const token = getCookie("access");
  const isLoading = usePageLoading();

  const results = useQueries({
    queries: [
      {
        queryKey: ["categories", 1],
        queryFn: getCategoryGroups,
        enabled: !!token,
      },
      {
        queryKey: ["plans", 2],
        queryFn: () => getMySubsidyPlans(token),
        enabled: !!token,
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
  if (results.some((r) => r.isLoading)) return <HomePageSkeleton />;

  return (
    <div>
      <Head>
        <title>سامانه عرضه کالا</title>
      </Head>
      <main className="bg-white md:bg-gray-100 min-h-screen pb-20 md:pb-0 ">
        {isLoading && <Loading />}
        <MobileSearchInput />
        <MobileImageSlider plans={results[1]?.data?.results} />
        <HomeHeroSection />
        <CategoriesSection categories={results[0]?.data} />
        {/* <NewProductsSection newProducts={results[0]?.data?.results} /> */}
        <WhyUseThisSection />
        <BlogsSection />
      </main>
      <ToastContainer limit={1} />
    </div>
  );
}
Home.layout = "L1";
export default Home;

export async function getServerSideProps({ req, res }) {
  const token = getCookie("access", { req, res });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["suppliers"], getNewestProducts);
  await queryClient.prefetchQuery(["categories"], getCategoryGroups);
  await queryClient.prefetchQuery(["plans", token], () =>
    getMySubsidyPlans(token)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
