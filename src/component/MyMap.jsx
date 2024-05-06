import { TileLayer, MapContainer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import MeteoAlClick from "./MeteoAlClick";
import { useState } from "react";
const MyMap = () => {
  const [position, setPosition] = useState(null);

  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          position={position}
          setPosition={setPosition}
        />
      </MapContainer>
      <MeteoAlClick city={position} />
    </>
  );
};
export default MyMap;
