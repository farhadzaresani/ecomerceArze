import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { MapPinIcon as MapPinIconOutline } from "@heroicons/react/24/outline";
import { MapPinIcon as MapPinIconSolid } from "@heroicons/react/20/solid";
import { MapIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const ShopLoactionGeo = ({ closeMenu, submit }) => {
  const center = [51.505, -0.09];

  return (
    <div className='bg-white rounded-3xl z-40 '>
      <div className='flex flex-col justify-center items-center relative gap-2 border-b-2 p-4 mx-4'>
        <XMarkIcon
          onClick={closeMenu}
          className='h-6 w-6 text-black absolute left-0 top-4 cursor-pointer '
        />
        <h1 className='font-bold text-base text-gray-700'>
          مشاهده اطلاعات فروشگاه
        </h1>
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
        <MapPinIconSolid className='h-12 w-12    text-blue-500 absolute mb-10  z-20 top-[50%] right-[48%] ' />
      </div>
      <div>
        <div className='flex gap-1 text-gray-700'>
          <h2 className='font-bold'>
            <MapPinIconOutline className='h-6 w-6 text-gray-500' />
          </h2>
          <p></p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ShopLoactionGeo;

const DUMMY_DETAILS = [
  {
    title: "فاصله با شما :",
    value: "15 کیلومتر",
    icon: <MapPinIconOutline className='h-6 w-6 text-gray-500' />,
  },
  {
    title: "آدرس :",
    value: "تهران ، پیروز",
    icon: <MapIcon className='h-6 w-6 text-gray-500' />,
  },
  {
    title: "ساعات کاری :",
    value: " 9 تا 21",
    icon: <ClockIcon className='h-6 w-6 text-gray-500' />,
  },
];
