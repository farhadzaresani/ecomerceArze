import { useEffect, useState } from "react";
import Router from "next/router";

const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);
    window.addEventListener("beforeunload", () => setIsLoading(true));
    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    return () => {
      window.removeEventListener("beforeunload", () => setIsLoading(true));
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);

  return isLoading;
};

export default usePageLoading;
