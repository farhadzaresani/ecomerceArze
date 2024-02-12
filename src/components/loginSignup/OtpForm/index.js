import React, { useEffect, useState } from "react";
import OtpTimer from "./OtpTimer";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const OtpForm = ({
  verifyCode,
  errorMessage,
  setCol,
  register,
  handleSubmit,
  Expiration_time,
  watch,
  getValues,
}) => {
  const [runTimer, setRunTimer] = useState(false);
  const [countDown, setCountDown] = useState(0);

  useEffect(() => {
    setRunTimer(true);
  }, []);

  const handleBackeButton = () => {
    setCol(0);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white md:w-[431px] w-screen  flex flex-col justify-between items-center md:py-8 px-4 rounded-3xl
 md:shadow-[0px_4px_10px_rgba(0,0,0,0.12)]"
    >
      <div className="flex flex-col justify-center items-center gap-2 text-navy ">
        <h1 className="font-bold text-3xl md:text-gray-900">
          کد تایید را وارد کنید
        </h1>
        <p className="font-medium md:text-gray-600 text-xs">
          کد تایید ارسال شده به تلفن همراه خود را وارد کنید
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-2 mt-8 ">
        <div className="flex justify-between w-full">
          <h2 className="md:hidden text-sm text-navy">کد تایید</h2>

          <OtpTimer
            runTimer={runTimer}
            setRunTimer={setRunTimer}
            countDown={countDown}
            setCountDown={setCountDown}
            Expiration_time={Expiration_time}
            handleBackeButton={handleBackeButton}
          />
        </div>
        <input
          {...register("key", {
            required: true,
            maxLength: 5,
            onChange: (e) => {
              if (e.target.value.length === 5) {
                handleSubmit();
              }
            },
          })}
          className={`p-2 w-full text-center tracking-[1em] whitespace-pre-wrap outline-none border-2 rounded-lg ${
            errorMessage && "border-red-600"
          }  `}
          placeholder="32589"
          type="number"
        />
        {errorMessage && (
          <span className="text-red-600 text-xs mr-2">
            کد وارد شده اشتباه است
          </span>
        )}
      </div>
      {verifyCode && (
        <div className="w-full mt-6">
          <button className=" text-teal-400 text-sm font-medium ">
            ورود با رمز عبور
          </button>
        </div>
      )}
      <button
        type="submit"
        className="bg-cream text-navy w-full py-2.5 font-bold rounded-lg mt-6 "
      >
        تایید
      </button>
      <div className="flex justify-center items-center w-full mt-4">
        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>
      <button
        type="button"
        onClick={handleBackeButton}
        className=" text-navy w-full py-2.5 font-bold rounded-lg  mt-4"
      >
        بازگشت
      </button>
    </form>
  );
};

export default OtpForm;
