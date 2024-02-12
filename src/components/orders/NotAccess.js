import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

const NotAccess = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-center items-center bg-white   border-[1px] rounded-lg  px-4 py-5 mx-2 '>
      <div className='bg-gray-400 p-3 rounded-full border-[10px] border-gray-300'>
        <InformationCircleIcon className='h-6 w-6 text-white ' />
      </div>
      <h1 className='text-xl font-extrabold text-regalBlue mt-4'>
        شما به حساب کاربری وارد نشده اید
      </h1>
      <span className='text-xs font-normal text-gray-500 mt-1'>
        برای ورود کلیک کنید{" "}
      </span>
      <button
        onClick={() => router.push("/auth")}
        className='bg-cream  border-navy text-navy border-[1px] rounded-lg w-full py-2.5 mt-5 font-semibold '
      >
        ورود به حساب کاربری
      </button>
    </div>
  );
};

export default NotAccess;
