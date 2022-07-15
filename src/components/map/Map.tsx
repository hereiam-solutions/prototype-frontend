import styled from 'styled-components';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import GetCurrentLocation from './mapEvents/CurrentLocationMarker';

const Map = () => {
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

        <GetCurrentLocation />
      </StyledMapContainer>
    </>
  );
};

// styled components
const StyledMapContainer = styled(MapContainer)`
  position: sticky;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

export default Map;
