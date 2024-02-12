import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { renderToString } from "react-dom/server";

const LittleMap = ({ lat, lng }) => {
  const centerPosition =
    lat?.length > 0 && lng?.length > 0
      ? [Number(lng), Number(lat)]
      : [35.5501, 51.515];
  const customIcon = L.divIcon({
    html: renderToString(
      <MapPinIcon className="h-7 w-7 translate-x-2 -translate-y-2 text-red-600" />
    ),
  });

  return (
    <MapContainer
      className="z-10"
      style={{
        height: "200px",
        width: "400px",
        maxWitdh: "100%",
        borderRadius: "8px",
      }}
      center={centerPosition}
      zoom={12}
      scrollWheelZoom={false} // Disable scroll wheel zoom
      dragging={false} // Disable dragging
      doubleClickZoom={false} // Disable double click zoom
      touchZoom={false} // Disable touch zoom
      zoomControl={false} // Disable zoom control
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={[35.5501, 51.515]}></Marker> */}
      <Marker position={centerPosition} icon={customIcon} />
    </MapContainer>
  );
};

export default LittleMap;
