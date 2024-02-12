import React from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import {
  TrashIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  UserIcon,
  PencilIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { addNewAddress, getMyAddresses } from "@/api/Api's";
import {
  QueryClient,
  dehydrate,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import MobileNavbar from "../../../components/layout/MobileNavbar/MobileNavbar";
import { useState } from "react";
import Loading from "@/components/ui/loading/Loading";

const DynamicMap = dynamic(
  () => import("../../../components/littleMap/LittleMap"),
  {
    ssr: false,
  }
);

const Addresses = () => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const router = useRouter();
  const token = getCookie("access");

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["address"],
    queryFn: () => {
      if (token) {
        return getMyAddresses(token);
      } else {
        return Promise.resolve(null); // Return a resolved promise to skip the fetch
      }
    },
    staleTime: Infinity,
  });

  const submitAddress = useMutation({
    mutationFn: (value) => addNewAddress(token, value),
    onSuccess: () => {
      refetch();
    },
  });

  const goBack = () => {
    router.back();
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="shadow-md py-5 px-8 sticky top-0 bg-white z-20">
          <button onClick={goBack} className="flex gap-3">
            <ArrowRightIcon className="h-6 w-6 text-regalBlue" />
            <h1>آدرس ها</h1>
          </button>
        </div>

        <div className="flex flex-col gap-3 mt-3 px-1">
          {data?.results?.map((item, i) => {
            return (
              <div
                key={item?.street_address_1}
                className="text-gray-700 bg-white p-3 rounded-lg"
              >
                <h1 className="text-sm font-normal">
                  {item?.street_address_1}
                </h1>
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2.5 items-center">
                      <BuildingOfficeIcon className="h-6 w-6 text-regalBlue" />
                      <h4 className="text-gray-500 text-xs">
                        {item?.province}
                      </h4>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <MapPinIcon className="h-6 w-6 text-regalBlue" />
                      <h4 className="text-gray-500 text-xs">
                        {item?.postal_code}
                      </h4>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <DevicePhoneMobileIcon className="h-6 w-6 text-regalBlue" />
                      <h4 className="text-gray-500 text-xs">{item?.phone}</h4>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <UserIcon className="h-6 w-6 text-regalBlue" />
                      <h4 className="text-gray-500 text-xs">
                        {" "}
                        {`${item?.first_name} ${item?.last_name}`}
                      </h4>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-col gap-1.5 mx-1">
                      <TrashIcon className="h-4 w-4 text-red-500" />
                      <PencilIcon className="h-4 w-4 text-navy" />
                    </div>
                    <div className="overflow-hidden flex justify-center items-center h-24 w-24 rounded-2xl">
                      <DynamicMap lat={item?.y} lng={item?.x} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <MobileNavbar />

        <div
          onClick={() => router.push("/profile/addresses/addNewAddress")}
          className="fixed bottom-20 left-4 flex justify-center items-center font-light rounded-lg bg-teal-400 h-11 w-11"
        >
          <PlusIcon className="h-7 w-7 text-white" />
        </div>
      </div>
    </>
  );
};

Addresses.layout = "L2";
export default Addresses;

export async function getServerSideProps(context) {
  const { req, res } = context;
  const token = getCookie("access", { req, res });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["baskets", token], () =>
    getMyAddresses(token)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
