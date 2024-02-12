import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/20/solid";
import { DevicePhoneMobileIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

const ProfileHeroSection = ({ shop, setShowInfo }) => {
  const showInfoHandler = () => {
    setShowInfo(true);
  };

  return (
    <>
      <div
        className=" bg-[url('/assets/Images/supplierProfile/shopBG.png')] md:bg-[url('/assets/Images/supplierProfile/supHero.png')] 
      bg-cover flex pb-10 mx-3 md:mx-0 md:pb-0 rounded-b-2xl relative"
      >
        <div
          className="md:hidden h-10 w-full absolute bottom-0 rounded-b-2xl bg-gradient-to-t from-black/70 to-transparent 
        flex items-end p-1"
        >
          {/* <ClockIcon className='h-6 w-6 text-white' />
           */}
          <Image
            className="translate-y-6  "
            alt="supplierProfilepic"
            src={require("../../../public/assets/Images/supplierProfile/ProPic.png")}
          />
        </div>

        <div className="w-1/2 py-5  flex flex-col gap-3">
          <div className="hidden md:flex">
            <div className="bg-cream p-1 py-7">
              <h1 className="text-6xl font-bold text-navy">{shop?.title}</h1>
            </div>
            <div
              className=" gap-2.5 bg-cream shadow-[0px_4px_23px_rgba(0,0,0,0.31)] rounded-l-2xl flex flex-col justify-center items-center 
            px-5"
            >
              <h3 className="flex font-bold text-navy gap-1">
                عملکرد فروشنده | <p className="text-green-400">عالی</p>
              </h3>
              <h4 className="flex justify-center items-center gap-1.5 text-sm text-navy font-bold">
                رضایت مشتریان
                <p className="text-white bg-green-400 pt-1.5 pb-1 px-3.5 rounded-lg text-sm font-medium ">
                  85%
                </p>
              </h4>
            </div>
          </div>
          <div className="hidden md:flex gap-7 justify-start w-4/6 px-7 mr-1">
            <div>
              <div className="text-white flex gap-1   font-medium border-b-[1px] border-cream py-2 mb-2">
                <MapPinIcon className="h-6 w-7 text-white" />
                <p>
                  تهران، سیزده آبان، بازار آهن مکان، پلاک 202، فروشگاه شهر آهن
                </p>
              </div>
              <div className="flex gap-4">
                <h5 className="text-white font-medium gap-1 flex">
                  <DevicePhoneMobileIcon className="h-5 w-6 " />
                  09123456789
                </h5>
                <h5 className="text-white font-medium gap-1 flex">
                  <PhoneIcon className="h-5 w-6    " />
                  02112345678
                </h5>
              </div>
            </div>
            <Image
              alt="supplier"
              width={106}
              height={106}
              src="/assets/Images/supplierProfile/location.png"
            />
          </div>
        </div>
        <div className="w-1/2 font-bold hidden md:flex justify-end items-end gap-6 pb-2 pl-8">
          <div className="flex flex-col justify-center items-center gap-3">
            <button className="w-40 h-9 bg-cream text-navy rounded-lg border-2 border-cream  ">
              محصولات
            </button>
            <div className="h-[2px] w-20 bg-cream "></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 rounded-full  ">
            <button className="w-40 h-9 bg-cream text-navy rounded-lg border-2 border-cream  ">
              نظرات کاربران
            </button>
            <div className="h-[2px] w-20 bg-transparent "></div>
          </div>
        </div>
      </div>
      <div className="bg-white mt-6 px-6 flex flex-col gap-1 md:hidden">
        <div className="flex justify-between items-center gap-1">
          <h1 className=" font-black text-lg">{shop?.title}</h1>
          <button
            onClick={showInfoHandler}
            className="text-navy  rounded-md flex justify-center items-center px-2 py-0.5 gap-1 text-xs font-semibold "
          >
            <InformationCircleIcon className="h-6 w-6 " />
          </button>
        </div>
        <div
          className=" gap-4 mt-3 flex  justify-between items-center 
        "
        >
          <h3 className="flex font-bold text-sm text-navy gap-1">
            عملکرد فروشنده | <p className="text-green-400">عالی</p>
          </h3>
          <h4 className="flex justify-center items-center gap-1.5 text-sm text-navy font-bold">
            رضایت مشتریان
            <p className="text-white bg-green-400  px-2  rounded text-[8px] font-medium ">
              85%
            </p>
          </h4>
        </div>
        <div className="flex justify-center items-center gap-1 mt-3 ">
          <MapPinIcon className="h-4 w-4 text-red-600" />
          <span className="text-xs font-normal text-gray-700 flex justify-center items-center ">
            address
          </span>
        </div>
      </div>
    </>
  );
};

export default ProfileHeroSection;
