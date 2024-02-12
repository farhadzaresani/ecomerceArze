import dynamic from "next/dynamic";
import React from "react";
const MyAwesomeMap = dynamic(() => import("./ShopLoactionGeo"), { ssr: false });
const MapContainer = ({ close }) => {
  return (
    <div
      // onClick={close}
      className='bg-black/10 fixed w-full h-full z-50 top-0 right-0 flex justify-center items-center'
    >
      <MyAwesomeMap closeMenu={close} />
    </div>
  );
};

export default MapContainer;
