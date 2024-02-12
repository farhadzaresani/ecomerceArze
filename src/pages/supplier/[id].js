import React, { useState } from "react";
import Head from "next/head";
import { QueryClient, dehydrate, useQueries } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { getSupplierById, getSuppliersList } from "../../api/Api's";
import Loading from "@/components/ui/loading/Loading";
import usePageLoading from "@/hooks/usePageLoading";
import FilterSection from "@/components/Suppliers/FilterSection";
import MobileShopProducts from "@/components/supplierProfile/mobile/MobileShopProducts";
import MobileShopInfo from "@/components/supplierProfile/mobile/MobileShopInfo";
import ProfileHeroSection from "@/components/supplierProfile/ProfileHeroSection";
import ProductsSection from "@/components/Product/ProductsSection";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SupplierProfile = () => {
  const [showInfo, setShowInfo] = useState(false);
  const isLoading = usePageLoading();
  const router = useRouter();
  const { id } = router.query;

  const results = useQueries({
    queries: [
      {
        queryKey: ["supplier", id],
        queryFn: () => getSupplierById(id),
        staleTime: Infinity,
        onSuccess: (res) => {},
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
        <title>{results[0]?.data?.results[0]?.title} | سامانه عرضه کالا</title>
      </Head>
      <div className="w-full">
        <ProfileHeroSection
          shop={results[0]?.data?.results[0]}
          setShowInfo={setShowInfo}
        />
        {isLoading && <Loading />}
        {showInfo && <MobileShopInfo />}
        <div className="bg-[#F3F4F6] hidden md:flex">
          <FilterSection />
          <ProductsSection
            products={results[0]?.data?.results[0]?.shopproduct_set}
          />
        </div>
        <div>
          {/* <MobileSearchInput /> */}
          {/* <MobileShopCategories /> */}

          <MobileShopProducts
            products={results[0]?.data?.results[0]?.shopproduct_set}
            categories={results[0]?.data?.results[0]?.categories_working}
          />
        </div>
      </div>
      {/* <ToastContainer limit={1} /> */}
    </>
  );
};

export default SupplierProfile;
SupplierProfile.layout = "L1";

export async function getStaticProps({ params }) {
  const { id } = params;
  const queryClient = new QueryClient();
  await queryClient.fetchQuery(["supplier", id], () => getSupplierById(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  const suppliers = await getSuppliersList();
  const paths = suppliers?.results?.map((supplier) => ({
    params: {
      id: supplier?.shop_unique_id?.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
