import { Marker, Popup, useMapEvents } from "react-leaflet";

const LocationMarker = (props) => {
  const handleClick = (e) => {
    props.setPosition({
      lat: e.latlng.lat,
      lng: e.latlng.lng,
      // ottieni il livello di zoom corrente dalla mappa
    });
    console.log("Coordinate cliccate:", e.latlng);
  };

  const map = useMapEvents({
    click: handleClick,
  });

  return props.position === null ? null : (
    <Marker position={props.position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default LocationMarker;
