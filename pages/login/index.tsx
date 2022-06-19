import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// import 'leaflet-defaulticon-compatibility';

import dynamic from 'next/dynamic';
import styled from 'styled-components';

// Map component has to be imported dynamically with ssr set to false
// if the Map component using react-leaflet is rendered server-side, there is no windows object which is needed
const Map = dynamic(() => import('../../components/Map'), { ssr: false });

function Index() {
  return (
    <MapWrapper>
      <Map />
    </MapWrapper>
  );
}

const MapWrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

export default Index;
