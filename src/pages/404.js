import Loading from "@/components/ui/loading/Loading";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return (
    <>
      <Loading />
    </>
    // <div className='h-screen flex justify-center items-center'>
    //   <h1 className='text-[10em] font-extrabold'>404</h1>
    // </div>
  );
};

export default Custom404;
Custom404.layout = "L3";
