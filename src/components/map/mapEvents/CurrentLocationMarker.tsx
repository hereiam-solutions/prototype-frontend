import { useEffect, useState } from "react";
import { useMapEvents, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Location } from "../mapTypes";

const locationIcon = new Icon({
  iconUrl: "/icons/assets/location.svg",
  iconSize: [20, 20],
});

function GetCurrentLocation() {
  const map = useMapEvents({
    click: () => {
      map.locate();
    },
    zoomstart: () => {
      map.locate();
    },
    locationfound(e) {
      setCurrentLocation([e.latlng.lat, e.latlng.lng]);
    },
  });

  let center = map.getCenter();

  const [currentLocation, setCurrentLocation] = useState<Location>([
    center.lat,
    center.lng,
  ]);

  useEffect(() => {
    map.locate({
      setView: true,
      enableHighAccuracy: true,
    });
  }, [map]);

  return <Marker position={currentLocation} icon={locationIcon} />;
}

export default GetCurrentLocation;
