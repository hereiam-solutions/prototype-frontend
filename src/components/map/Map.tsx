import styled from "styled-components";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

import GetCurrentLocation from "./mapEvents/CurrentLocationMarker";
import { useEffect, useRef } from "react";
import useMissionMap from "../../hooks/useMissionMap";

const Map = () => {
  const { activeTileLayer, reRenderBoolean } = useMissionMap();

  const tileLayerRef = useRef(null);

  useEffect(() => {
    const getAllMarkers = async () => {
      try {
        if (tileLayerRef.current) {
          // @ts-ignore
          tileLayerRef.current.setUrl(activeTileLayer);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getAllMarkers();
  }, [reRenderBoolean, activeTileLayer]);

  return (
    <>
      <StyledMapContainer
        center={[52.454937, 13.525194]}
        zoom={10}
        maxZoom={18}
        scrollWheelZoom={false}
        tap={true}
        attributionControl={true}
      >
        <TileLayer ref={tileLayerRef} url={activeTileLayer} />

        <GetCurrentLocation />
      </StyledMapContainer>
    </>
  );
};

// styled components
const StyledMapContainer = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default Map;
