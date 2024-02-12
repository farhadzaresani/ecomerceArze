import React, { useState, useEffect } from "react";
// Next
import Link from "next/link";
import { useRouter } from "next/router";
//Cookie
import { getCookie, removeCookies } from "cookies-next";
//Redux
import { isOpenModal, openLocatinMenu } from "@/store/reducers/locationReducer";
import { currentUser, removeUserData } from "@/store/reducers/userReducer";
import { currentAddress, removeAddress } from "@/store/reducers/addressReducer";
import {
  currentValue,
  openProductMenu,
} from "@/store/reducers/productMenuReducer";
import {
  getBasketFromRedux,
  removeBasket,
  setBasket,
} from "@/store/reducers/basketReducer";
//React Query
import { useMutation, useQueries } from "@tanstack/react-query";
//Components
import SelectLocation from "../Location/SelectLocation";
import BadgeButton from "./BadgeButton";
import ProductMenu from "../productMenu";
import UserDropDown from "./UserDropDown";
import InputDropDown from "./inputDropDown/InputDropDown";
//Icons
import MainName from "../../ui/icons/layout/MainName";
import MainLogo from "../../ui/icons/layout/MainLogo";
import LogedInArrow from "../../ui/icons/logedInArrow";
import MobileMainLogo from "@/components/ui/icons/layout/MobileMainLogo";
import MobileHeaderTitle from "@/components/ui/icons/layout/MobileHeaderTitle";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { UserIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
//API's
import {
  addNewAddress,
  getCategoryGroups,
  getMyAddresses,
  getMyBasketData,
} from "@/api/Api's";

const NavButtons = [
  { name: "فروشندگان", address: "/suppliers-list" },
  { name: "تخفیف ها و پیشنهادها", address: "/promotions" },
  { name: "فروشنده شوید", address: "#" },
];

const MainNavbar = (req, res) => {
  const router = useRouter();
  const auth = useSelector(currentUser);
  const locationeOpen = useSelector(isOpenModal);
  const basketStore = useSelector(getBasketFromRedux);
  const addreses = useSelector(currentAddress);
  const productMenuStatus = useSelector(currentValue);
  const token = getCookie("access", {});
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [openSearchDropDown, setopenSearchDropDown] = useState(false);

  const signOutHandler = () => {
    removeCookies("access");
    removeCookies("refresh");
    router.push("/");
    dispatch(removeUserData());
    dispatch(removeBasket());
    dispatch(removeAddress());
    setOpenDropDown(false);
    setIsLogedIn(false);
  };

  const openLocationMenuHandler = () => {
    dispatch(openLocatinMenu());
  };

  useEffect(() => {
    if (auth.id) {
      setIsLogedIn(true);
    }
    if (!token && auth.id) {
      signOutHandler();
    }
  }, [auth]);

  useEffect(() => {
    if (locationeOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [locationeOpen]);

  const results = useQueries({
    queries: [
      {
        queryKey: ["categorieList", 0],
        queryFn: getCategoryGroups,
        enabled: false,
        staleTime: Infinity,
      },
      {
        queryKey: ["badgeList", 1],
        queryFn: () => getMyBasketData(token, { req, res }),
        onSuccess: (res) => {
          dispatch(setBasket(res));
        },
        enabled: false,
        staleTime: Infinity,
      },
      {
        queryKey: ["addreses", 2],
        queryFn: () => getMyAddresses(token, { req, res }),
        onSuccess: (res) => {},
        enabled: false,
        staleTime: Infinity,
      },
    ],
  });

  const submitAddress = useMutation({
    mutationFn: (value) => addNewAddress(token, value),
    onSuccess: () => {
      dispatch(openLocatinMenu());
      results[2]?.refetch();
    },
  });

  return (
    <>
      {productMenuStatus && results[0].status === "success" && (
        <ProductMenu categories={results[0].data} />
      )}
      {openDropDown && (
        <UserDropDown
          setOpenDropDown={setOpenDropDown}
          signOutHandler={signOutHandler}
          user={auth}
        />
      )}
      <div
        className={`sticky bg-white w-full md:px-8 top-0 z-40 shadow-[0_0px_6px_2px_rgba(0,0,0,0.1)]  ${
          (router.pathname.includes("[pid]") && "hidden md:block") ||
          (router.pathname.includes("[spid]") && "hidden md:block")
        }  ${router.pathname.includes("auth") && " md:hidden"}  `}
      >
        <div className="  flex flex-col justify-between py-3  gap-5  ">
          <div className=" flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            <Link
              className=" hidden md:flex items-center justify-center gap-4  w-full md:w-auto "
              href={"/"}
            >
              <MainLogo />
              <MainName />
            </Link>
            <div>
              <Link
                className=" md:hidden flex flex-col items-center -space-y-1 justify-center md:gap-4  w-full md:w-auto "
                href={"/"}
              >
                <MobileMainLogo />
                <div className=" w-full flex justify-end px-2">
                  <MobileHeaderTitle />
                </div>
              </Link>
            </div>
            <div className="relative hidden md:block">
              {!searchInputValue && (
                <MagnifyingGlassIcon
                  className={`h-6 w-6  text-gray-400 absolute top-2.5 right-4 `}
                />
              )}
              <input
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                placeholder={`       جستجو  `}
                className={`  outline-none  rounded-lg py-2 px-5  md:w-[580px] h-11 empty bg-gray-100 font-medium text-base `}
                onFocus={() => setopenSearchDropDown(true)}
                onBlur={() => setopenSearchDropDown(false)}
              />
              {openSearchDropDown && (
                <InputDropDown isEmpty={!searchInputValue ? true : false} />
              )}
            </div>
            <div className="md:flex  hidden gap-6 ">
              {isLogedIn ? (
                <>
                  <button
                    onClick={() => setOpenDropDown(!openDropDown)}
                    className="bg-cream p-3 rounded-lg justify-center items-center flex gap-2 "
                  >
                    <UserIcon className="h-6 w-6 text-navy" />
                    <LogedInArrow />
                  </button>
                </>
              ) : (
                <Link
                  href={"/auth"}
                  className="bg-cream px-7 py-2.5 rounded-lg text-base font-medium flex justify-center items-center "
                >
                  ورود | ثبت نام
                </Link>
              )}
              <Link className=" flex" href={"/myBasket"}>
                <BadgeButton
                  number={
                    results[1].status === "success" &&
                    basketStore?.[0]?.lines?.length
                  }
                />
              </Link>
            </div>
          </div>
          <div className="md:flex  justify-between hidden ">
            <div className="flex justify-center items-center gap-20   ">
              <Link
                className=" h-full flex justify-center items-center text-sm font-bold text-gray-700 "
                onMouseOver={() => {
                  dispatch(openProductMenu());
                }}
                href={`/products-list`}
              >
                دسته بندی کالا ها
              </Link>
              {NavButtons.map((item) => {
                return (
                  <Link
                    href={`${item.address}`}
                    key={item.name}
                    className={` text-sm font-medium text-gray-600 border-b-${
                      router.pathname === item.address && "2"
                    } p-1 border-cream`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className=" md:block  hidden ">
              <button
                onClick={openLocationMenuHandler}
                className=" text-sm font-semibold text-navy flex items-center gap-2 "
              >
                <MapPinIcon className="h-5 w-5" />
                {addreses.city_name
                  ? `${
                      addreses?.city_name
                    }  ${addreses?.street_address_1?.slice(0, 20)}
                  ${addreses?.street_address_1.length > 20 ? "..." : ""}
                  `
                  : "لطفا شهر خود را انتخاب کنید"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {locationeOpen && (
        <SelectLocation
          addressList={results[2].data}
          closeMenu={openLocationMenuHandler}
          submitAddress={submitAddress}
        />
      )}
    </>
  );
};

export default MainNavbar;
