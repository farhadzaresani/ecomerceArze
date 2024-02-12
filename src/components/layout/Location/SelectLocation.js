import { useState } from "react";
import dynamic from "next/dynamic";
import LocationList from "./LocationList";
import AddressDetails from "./AddressDetails";

const MyAwesomeMap = dynamic(() => import("./SelectGeoInMap"), { ssr: false });

const SelectLocation = ({ closeMenu, submitAddress, addressList }) => {
  const [level, setLevel] = useState(0);

  const nextStep = (e) => {
    e.preventDefault();
    setLevel(1);
  };
  const stepThree = () => {
    setLevel(2);
  };

  return (
    <div className="fixed  z-30">
      <div
        onClick={closeMenu}
        className="absolute bg-black/20 w-[100vw] z-20  h-[100vh] flex "
      ></div>
      <div className="right-[30%] mt-10 fixed z-50 ">
        {level === 2 && (
          <AddressDetails submitAddress={submitAddress} closeMenu={closeMenu} />
        )}
        {level === 1 && (
          <MyAwesomeMap closeMenu={closeMenu} submit={stepThree} />
        )}
        {level === 0 && (
          <LocationList
            addressList={addressList}
            nextStep={nextStep}
            closeMenu={closeMenu}
          />
        )}
      </div>
    </div>
  );
};

export default SelectLocation;
