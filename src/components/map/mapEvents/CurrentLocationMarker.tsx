import { useEffect, useState } from "react";

import { useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Location } from "../mapTypes";

import { divIcon } from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { RiAccountPinCircleFill } from "react-icons/ri";

import styled from "styled-components";

let iconSize = 30;

const StyledLocationMarker = styled.button`
 background-color: #F8DE00;
 border-radius: 50px;
`;
//customize logo
const iconMarker = renderToStaticMarkup(
  <div>
    <StyledLocationMarker>
      <RiAccountPinCircleFill
      size={iconSize}
        />
    </StyledLocationMarker>
  </div>  
);

const locationIcon = divIcon({
  html: iconMarker,
  className: 'currentlocation',
  iconAnchor: [0,24],
});

//locate
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

  return (
   
      <Marker position={currentLocation} icon={locationIcon} />
 
  );
  
}

export default GetCurrentLocation;
