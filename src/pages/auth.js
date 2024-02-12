import AuthContainer from "@/components/loginSignup/AuthContainer";
import LoginPhoneNumber from "@/components/loginSignup/LoginPhoneNumber";
import React, { useState } from "react";
import OtpForm from "@/components/loginSignup/OtpForm";
import LoginPassword from "@/components/loginSignup/LoginPassword";
import ForgetPassPhoneNumber from "@/components/loginSignup/ForgetPassPhoneNumber";
import SetNewPassword from "@/components/loginSignup/SetNewPassword";
import SubmitNewPassword from "@/components/loginSignup/SubmitNewPassword";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  checkPhoneNumberForOtpCode,
  checkIsValidPhoneNumber,
  loginWithNumberAndPassword,
  verifyOtpCode,
} from "../api/Api's";
import { getCookie, hasCookie, removeCookies, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/reducers/userReducer";
import Loading from "@/components/ui/loading/Loading";
import Head from "next/head";
import usePageLoading from "@/hooks/usePageLoading";
import { useEffect } from "react";
import MainNavbar from "@/components/layout/MainNavbar";

const Auth = (req, res) => {
  const isCookie = hasCookie("access", { req, res });
  const prevUrl = getCookie("prevUrl", { req, res });
  const isPrevUrl = hasCookie("prevUrl", { req, res });
  const router = useRouter();
  const isLoading = usePageLoading();
  const dispatch = useDispatch();
  const [col, setCol] = useState(0);
  const [loginData, setLoginData] = useState({
    phone_number: "",
    password: "",
    key: "",
  });

  useEffect(() => {
    if (isCookie) {
      router.push("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const checkExistencePhoneNumber = useMutation({
    mutationFn: (phone_number) => {
      return checkIsValidPhoneNumber(phone_number);
    },
    onSuccess: (res) => {
      if (res.exists) {
        setCol(2);
      } else {
        getPhoneNumberForOtp.mutate();
      }
    },
    onError: (err) => {},
  });

  const getPhoneNumberForOtp = useMutation({
    mutationFn: (phone_number) => {
      return checkPhoneNumberForOtpCode(phone_number);
    },
    onSuccess: (res) => {
      setCol(1);
    },
  });

  const submitVerifyCode = useMutation({
    mutationFn: (value) => {
      return verifyOtpCode({
        phone_number: value.phone_number,
        otp: value.key,
      });
    },
    onSuccess: async (res) => {
      dispatch(setUser(res.user_data));
      setCookie("access", res.access, {});
      setCookie("refresh", res.refresh, {});

      if (isPrevUrl) {
        window.location.replace(prevUrl);
      } else {
        window.location.replace("/");
      }
      removeCookies("prevUrl");
    },
  });

  const loginWithPasswordHandler = useMutation({
    mutationFn: () => {
      return loginWithNumberAndPassword(loginData);
    },
    onSuccess: (res) => {
      setCookie("access", res.access, {});
      setCookie("refresh", res.refresh, {});
      router.push("/");
    },
  });

  return (
    <>
      <Head>
        <title> ورود | سامانه عرضه کالا </title>
      </Head>
      <div className="flex justify-center items-center gap-3  md:hidden ">
        <MainNavbar />
      </div>
      <div className=" bg-white md:bg-cream  flex justify-center items-center h-full overflow-auto ">
        {isLoading && <Loading />}
        {(checkExistencePhoneNumber.status === "loading" && <Loading />) ||
          (getPhoneNumberForOtp.status === "loading" && <Loading />) ||
          (submitVerifyCode.status === "loading" && <Loading />) ||
          (loginWithPasswordHandler.status === "loading" && <Loading />)}
        <AuthContainer>
          {col === 0 && (
            <LoginPhoneNumber
              register={register}
              handleSubmit={handleSubmit((num) =>
                getPhoneNumberForOtp.mutate(num)
              )}
              errorMessage={errors.phone_number ? true : false}
            />
          )}
          {col === 1 && (
            <OtpForm
              register={register}
              Expiration_time={getPhoneNumberForOtp?.data?.Expiration_time}
              handleSubmit={handleSubmit((data) =>
                submitVerifyCode.mutate(data)
              )}
              watch={watch}
              errorMessage={errors.key ? true : false}
              setCol={setCol}
            />
          )}
          {col === 2 && (
            <LoginPassword
              setLoginData={setLoginData}
              loginData={loginData}
              forgetPass={() => setCol(3)}
              backButton={() => setCol(2)}
              loginWithOtp={() => {
                setCol(2);
              }}
              login={loginWithPasswordHandler}
            />
          )}
          {col === 3 && <ForgetPassPhoneNumber onClick={() => setCol(4)} />}
          {col === 4 && <OtpForm submit={() => setCol(5)} />}
          {col === 5 && <SetNewPassword submit={() => setCol(6)} />}
          {col === 6 && <SubmitNewPassword />}
        </AuthContainer>
      </div>
    </>
  );
};

export default Auth;

Auth.layout = "L2";
