import styled from 'styled-components';
import { MapContainer, TileLayer, FeatureGroup, Circle } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import { useState } from 'react';
import { Location } from './mapTypes';

const DrawPolygon = () => {
  const [polygon, setPolygon] = useState<Location[]>([]);

  const handleOnCreated = (e: any) => {
    console.log('onCreated');
    setPolygon(e.layer._latlngs);
  };

  const handleOnEdited = (e: any) => {
    console.log('onEdited');
    console.log(e.target);
    setPolygon(e);
  };

  const handleOnDeleted = (e: any) => {
    console.log('onDeleted');
    setPolygon([]);
  };

  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        // onEditStop={handleOnEdited}
        onCreated={handleOnCreated}
        onDeleted={handleOnDeleted}
        draw={{
          rectangle: false,
          polyline: false,
          circle: false,
          marker: false,
          circlemarker: false,
          polygon: {
            allowIntersection: false,
            drawError: {
              color: 'red', // Color the shape will turn when intersects
              message: 'Intersections not possible!', // Message that will show when intersect
            },
            shapeOptions: {
              color: 'blue',
            },
          },
        }}
        edit={{ edit: false }}
      />
    </FeatureGroup>
  );
};

export default DrawPolygon;
