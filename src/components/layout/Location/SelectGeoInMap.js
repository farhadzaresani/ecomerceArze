import { MapPinIcon } from "@heroicons/react/20/solid";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { XMarkIcon } from "@heroicons/react/20/solid";

//

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const SelectGeoInMap = ({ closeMenu, submit }) => {
  const center = [51.505, -0.09];

  return (
    <div className='bg-white rounded-3xl '>
      <div className='flex flex-col justify-center items-center gap-2 border-b-2 p-6 mx-4'>
        <XMarkIcon
          onClick={closeMenu}
          className='h-6 w-6 text-black absolute left-4 top-4 cursor-pointer'
        />
        <h1 className='font-bold text-base text-gray-700'>
          لطفا ادرس جدید خود را انتخاب کنید
        </h1>
        <p className='font-medium text-gray-600 text-xs text-center'>
          موقعیت مکانی آدرس خود را انتخاب کنید
        </p>
      </div>
      <div className='p-4 '>
        <MapContainer
          className='z-10'
          // ref={mapRef}
          style={{
            height: "325px",
            width: "612px",
            maxWitdh: "100%",
            borderRadius: "8px",
          }}
          center={[35.5501, 51.515]}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          {/* <Marker position={[35.5501, 51.515]}></Marker> */}
        </MapContainer>
        <MapPinIcon className='h-12 w-12    text-blue-500 absolute mb-10  z-20 top-[50%] right-[45%] ' />
      </div>
      <button
        onClick={submit}
        className='absolute bottom-8 z-20 right-[35%] bg-navy text-white text-base font-bold px-5 py-2.5 rounded-lg '
      >
        انتخاب آدرس و ادامه{" "}
      </button>
    </div>
  );
};

export default SelectGeoInMap;
