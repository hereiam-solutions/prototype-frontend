import { useEffect, useState } from "react";
import { useMapEvents, Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Location } from "../mapTypes";

import { RiExternalLinkLine } from "react-icons/ri";
import { renderToStaticMarkup } from "react-dom/server";

const iconMarker = renderToStaticMarkup(
  <RiExternalLinkLine
    size={30}
  />
);
const locationIcon = divIcon({
  html: iconMarker,
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
