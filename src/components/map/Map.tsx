import styled from 'styled-components';
import { MapContainer, TileLayer } from 'react-leaflet';
import DrawPolygon from './DrawPolygon';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import GetCurrentLocation from './mapEvents/CurrentLocationMarker';
import useMission from '../../hooks/useMission';

const Map = () => {
  const { isPolygonDrawingActive } = useMission();

  return (
    <>
      <StyledMapContainer
        center={[0, 0]}
        zoom={13}
        scrollWheelZoom={false}
        tap={true}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {isPolygonDrawingActive && <DrawPolygon />}

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
