import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { getBasketFromRedux, setBasket } from "@/store/reducers/basketReducer";
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQueries,
} from "@tanstack/react-query";
import {
  addToBasket,
  getAllProductById,
  getMyBasketData,
  getProductBsaketId,
  getProductById,
  getProductList,
  removeFromBasket,
} from "../../../api/Api's";
import usePageLoading from "@/hooks/usePageLoading";
import ProductInfo from "@/components/productPage/ProductInfo";
import MoreSuppliers from "@/components/productPage/MoreSuppliers";
import ProductLikeThis from "@/components/productPage/ProductLikeThis";
import ProductDetails from "@/components/productPage/ProductDetails";
import BreadCrump from "@/components/Product/BreadCrump";
import Loading from "@/components/ui/loading/Loading";
import MobileProductInfo from "@/components/productPage/mobile/MobileProductInfo";
import MobileBuyCard from "@/components/productPage/mobile/MobileBuyCard";
import MobileMoreSuppliers from "@/components/productPage/mobile/MobileMoreSuppliers";
import MobileCommentSection from "@/components/productPage/mobile/MobileCommentSection";
import Details from "@/components/productPage/ProductInfo/Details";
import MobileCommentsPage from "@/components/productPage/mobile/MobileCommentPage/MobileCommentsPage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const pid = () => {
  const router = useRouter();
  const token = getCookie("access");
  const dispatch = useDispatch();
  const isLoading = usePageLoading();
  const basketData = useSelector(getBasketFromRedux);
  const [showProductInfo, setShowProductInfo] = useState(false);
  const [showMoreSuppliers, setShowMoreSuppliers] = useState(false);
  const [showCommentsPage, setShowCommentsPage] = useState(false);
  const [shopId, setShopId] = useState(null);

  const results = useQueries({
    queries: [
      {
        queryFn: async () => await getProductById(router?.query?.pid, token),
        queryKey: ["productData", router?.query?.pid],
        cacheTime: 0,
        staleTime: Infinity,
        onSuccess: (res) => {
          setShopId(res?.prime_shop_product?.shop?.id);
        },
      },
      {
        queryKey: ["badgeList", 1],
        queryFn: () => getMyBasketData(token),
        onSuccess: (res) => {},
        staleTime: Infinity,
        cacheTime: 0,
        enabled: !!token,
      },
      {
        queryFn: async () => await getProductBsaketId(token, shopId),
        queryKey: ["basketData", shopId],
        cacheTime: 0,
        staleTime: Infinity,
      },
    ],
  });

  const changeProductShopHandler = (id) => {
    router.push(`/product/${router?.query?.pid}/${id}`);
  };

  const submitOrder = useMutation({
    mutationFn: (req) => addToBasket(token, req.itemId, req.quan, req.shopId),
    onSuccess: (res) => {
      // setShopId(res?.id);
      results[0].refetch();
      results[1].refetch();
    },
  });

  const deletItem = useMutation({
    mutationFn: (req) => removeFromBasket(token, req.id, req.shopId),
    onSuccess: (res) => {},
    onError: (err) => {},
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
  if (results[0].status === "loading") return <Loading />;
  if (showCommentsPage)
    return <MobileCommentsPage setShowCommentsPage={setShowCommentsPage} />;

  return (
    <div className="bg-slate-100 md:bg-white  ">
      <Head>
        <title> {results[0]?.data?.title} | سامانه عرضه کالا </title>
      </Head>
      {isLoading && <Loading />}
      {showProductInfo && (
        <MobileProductInfo setShowProductInfo={setShowProductInfo} />
      )}
      {showMoreSuppliers && (
        <MobileMoreSuppliers
          changeProductShopHandler={changeProductShopHandler}
          suppliers={results[0]?.data?.other_shops}
          submitOrder={submitOrder}
          basket={results[1]?.data}
          setShowMoreSuppliers={setShowMoreSuppliers}
        />
      )}
      <div className="sticky top-0">
        <div className="md:hidden text-regalBlue flex justify-between w-full  bg-white p-5">
          <button onClick={() => router.back()}>
            <XMarkIcon className="h-7 w-7" />
          </button>
          {results[0]?.data?.order_count > 0 && (
            <h3 className="text-gray-500 text-xs font-bold flex justify-center items-center">
              از این محصول در{" "}
              <span className="text-gray-600 mx-1">
                {results[0]?.data?.order_count}
              </span>{" "}
              سبد خرید دارید
            </h3>
          )}
          <button onClick={() => router.push("/myBasket")} className="relative">
            <ShoppingCartIcon className="h-7 w-7 text-gray-500" />
            {basketData?.results?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {basketData?.results?.length}
              </span>
            )}
          </button>
        </div>
        <div className="bg-gray-200 flex justify-between items-center px-3 py-1">
          <Link
            href={`/supplier/${results[0]?.data?.prime_shop_product?.shop?.shop_unique_id}`}
            className="text-sm font-bold text-navy flex justify-center items-center"
          >
            <Image
              alt="supplierProfilepic"
              src={require("../../../../public/assets/Images/supplierProfile/ProPic.png")}
            />
            <h2>{results[0]?.data?.prime_shop_product?.shop?.title}</h2>
          </Link>
          <button
            onClick={() => setShowMoreSuppliers(!showMoreSuppliers)}
            className="text-xs font-bold text-white bg-teal-400 rounded-lg py-3 px-8"
          >
            تغییر فروشگاه
          </button>
        </div>
      </div>
      <BreadCrump crumpList={results[0]?.data?.bread_crumbs} />
      <ProductInfo
        setShowMoreSuppliers={setShowMoreSuppliers}
        basket={results[1]?.data}
        product={results[0]?.data}
        submitOrder={submitOrder}
        deletItem={deletItem}
        setShowProductInfo={setShowProductInfo}
      />
      {/* <MobileShopDetail
        shopNumber={results[0]?.data?.shop_products?.length}
        setShowMoreSuppliers={setShowMoreSuppliers}
        shopId={results[0]?.data?.prime_shop_product?.shop?.shop_unique_id}
        supplierName={results[0]?.data?.prime_shop_product?.shop?.title}
      /> */}
      <Details setShowProductInfo={setShowProductInfo} />
      <MoreSuppliers
        suppliers={results[0]?.data?.shop_products}
        submitOrder={submitOrder}
        basket={results[1]?.data?.lines}
      />
      <ProductLikeThis products={results[0]?.data?.related_products} />
      <ProductDetails />
      <MobileBuyCard
        basketId={results[2]?.data?.[0]?.id}
        price={results[0]?.data?.price}
        product={results[0]?.data}
        basket={results[1]?.data?.results}
        submitOrder={submitOrder}
        deletItem={deletItem}
      />
      <MobileCommentSection setShowCommentsPage={setShowCommentsPage} />
      {/* <ToastContainer limit={1} /> */}
    </div>
  );
};

export default pid;
pid.layout = "L1";

export async function getServerSideProps(context) {
  const { req, res } = context;
  const token = getCookie("access", { req, res });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["baskets", token], () =>
    getProductById(token, token)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

// export async function getStaticProps({ params }) {
//   const { pid } = params;
//   const queryClient = new QueryClient();
//   queryClient.fetchQuery(["producData", id], () => getProductById(pid));
//   return {
//     props: { dehydratedState: dehydrate(queryClient) },
//     revalidate: 1,
//   };
// }

// export async function getStaticPaths() {
//   const products = await getAllProductById();
//   const paths = products.results.map((product) => {
//     return {
//       params: {
//         pid: JSON.stringify(product.unique_product_code),
//       },
//     };
//   });

//   return {
//     paths,
//     // fallback: true,
//   };
// }
