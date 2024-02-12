import React, { useState, useEffect } from "react";
import Loading from "../ui/loading/Loading";
import MainNavbar from "../layout/MainNavbar";
import MobileNavbar from "../layout/MobileNavbar/MobileNavbar";
import Image from "next/image";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    // Render an error fallback UI
    return (
      <div className="bg-gray-100 h-screen ">
        <MainNavbar />
        <div className="  flex items-start px-4 ">
          <div className="mx-auto p-7 bg-white w-full rounded-lg flex flex-col justify-center items-center gap-5 mt-10 ">
            <Image
              src={"assets/Svgs/error/errorBoundry.svg"}
              width={220}
              height={82}
            />
            <h1 className="text-base font-normal text-center text-navy ">
              خطایی رخ داده است. لطفا با پشتیبانی تماس بگیرید.
            </h1>
            <button className="bg-orange-400 text-white px-5 py-2.5 rounded-lg text-base font-bold">
              ارتباط با پشتیبانی
            </button>
          </div>
        </div>
        <MobileNavbar />
      </div>
    );
  }

  return children;
}
export default ErrorBoundary;
