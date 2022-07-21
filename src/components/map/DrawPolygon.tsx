import { FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import useMission from '../../hooks/useMission';
import useNavigation from '../../hooks/useNavigation';
import { useNavigate } from 'react-router-dom';

const DrawPolygon = () => {
  let navigate = useNavigate();

  const {
    polygonDrawingCoordinates,
    setPolygonDrawingCoordinates,
    setIsPolygonDrawingActive,
  } = useMission();

  const { isDrawOpen, setIsDrawOpen } = useNavigation();

  const handleOnCreated = (e: any) => {
    console.log('onCreated');

    // no idea why but the states in context seem to take a tiny amount of time to update
    // without the setTimeout the navigate() and setIsDrawOpen do not work correctly
    setTimeout(() => {
      setPolygonDrawingCoordinates(e.layer._latlngs);
      setIsPolygonDrawingActive(false);
      setIsDrawOpen(true);
      navigate('create-mission');
    }, 10);
  };

  return (
    <FeatureGroup>
      <EditControl
        position="topright"
        onCreated={handleOnCreated}
        // onEditStop={handleOnEdited}
        // onDeleted={handleOnDeleted}
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
        edit={{ edit: false, remove: false }}
      />
    </FeatureGroup>
  );
};

export default DrawPolygon;
