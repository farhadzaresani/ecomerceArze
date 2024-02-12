import { useEffect, useState } from "react";
import { ClockIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function OtpTimer({
  runTimer,
  setRunTimer,
  countDown,
  setCountDown,
  Expiration_time,
  handleBackeButton,
}) {
  useEffect(() => {
    let timerId;

    if (runTimer) {
      setCountDown(Expiration_time);
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1);
      }, 1000);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [runTimer]);

  useEffect(() => {
    if (countDown < 0 && runTimer) {
      setRunTimer(false);
      setCountDown(0);
    }
  }, [countDown, runTimer]);

  const togglerTimer = () => setRunTimer((t) => !t);

  const seconds = String(countDown % 60).padStart(2, 0);
  const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

  return (
    <>
      {countDown === 0 ? (
        <button
          onClick={handleBackeButton}
          className="flex items-center gap-1.5 text-sm font-medium text-regalBlue "
        >
          <ArrowPathIcon className="w-5 h-5" /> ارسال مجدد کد
        </button>
      ) : (
        <div className="flex justify-between gap-1 font-medium text-navy w-16">
          <div className="w-full">
            <ClockIcon className="h-6 w-6 md:text-black" />
          </div>
          <div className="w-full">
            {minutes}:{seconds}
          </div>
        </div>
      )}
    </>
  );
}
