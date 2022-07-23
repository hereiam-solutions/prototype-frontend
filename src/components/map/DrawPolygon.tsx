import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import useMission from "../../hooks/useMission";
import useNavigation from "../../hooks/useNavigation";
import { useNavigate } from "react-router-dom";

const DrawPolygon = () => {
  let navigate = useNavigate();

  const { setPolygonDrawingCoordinates, setIsPolygonDrawingActive } =
    useMission();

  const { setIsDrawOpen } = useNavigation();

  const handleOnCreated = (e: any) => {
    let geoJSONPolygon: any = [];

    // restructuring of coordinates given by drawing tool
    if (e.layer._latlngs[0].length === 3) {
      geoJSONPolygon = [
        [
          [e.layer._latlngs[0][0].lat, e.layer._latlngs[0][0].lng],
          [e.layer._latlngs[0][1].lat, e.layer._latlngs[0][1].lng],
          [e.layer._latlngs[0][2].lat, e.layer._latlngs[0][2].lng],
        ],
      ];
    }

    if (e.layer._latlngs[0].length === 4) {
      geoJSONPolygon = [
        [
          [e.layer._latlngs[0][0].lat, e.layer._latlngs[0][0].lng],
          [e.layer._latlngs[0][1].lat, e.layer._latlngs[0][1].lng],
          [e.layer._latlngs[0][2].lat, e.layer._latlngs[0][2].lng],
          [e.layer._latlngs[0][3].lat, e.layer._latlngs[0][3].lng],
        ],
      ];
    }

    if (e.layer._latlngs[0].length === 5) {
      geoJSONPolygon = [
        [
          [e.layer._latlngs[0][0].lat, e.layer._latlngs[0][0].lng],
          [e.layer._latlngs[0][1].lat, e.layer._latlngs[0][1].lng],
          [e.layer._latlngs[0][2].lat, e.layer._latlngs[0][2].lng],
          [e.layer._latlngs[0][3].lat, e.layer._latlngs[0][3].lng],
          [e.layer._latlngs[0][4].lat, e.layer._latlngs[0][4].lng],
        ],
      ];
    }

    if (e.layer._latlngs[0].length === 6) {
      geoJSONPolygon = [
        [
          [e.layer._latlngs[0][0].lat, e.layer._latlngs[0][0].lng],
          [e.layer._latlngs[0][1].lat, e.layer._latlngs[0][1].lng],
          [e.layer._latlngs[0][2].lat, e.layer._latlngs[0][2].lng],
          [e.layer._latlngs[0][3].lat, e.layer._latlngs[0][3].lng],
          [e.layer._latlngs[0][4].lat, e.layer._latlngs[0][4].lng],
          [e.layer._latlngs[0][5].lat, e.layer._latlngs[0][5].lng],
        ],
      ];
    }

    if (e.layer._latlngs[0].length === 7) {
      geoJSONPolygon = [
        [
          [e.layer._latlngs[0][0].lat, e.layer._latlngs[0][0].lng],
          [e.layer._latlngs[0][1].lat, e.layer._latlngs[0][1].lng],
          [e.layer._latlngs[0][2].lat, e.layer._latlngs[0][2].lng],
          [e.layer._latlngs[0][3].lat, e.layer._latlngs[0][3].lng],
          [e.layer._latlngs[0][4].lat, e.layer._latlngs[0][4].lng],
          [e.layer._latlngs[0][5].lat, e.layer._latlngs[0][5].lng],
          [e.layer._latlngs[0][6].lat, e.layer._latlngs[0][6].lng],
        ],
      ];
    }

    if (e.layer._latlngs[0].length === 8) {
      geoJSONPolygon = [
        [
          [e.layer._latlngs[0][0].lat, e.layer._latlngs[0][0].lng],
          [e.layer._latlngs[0][1].lat, e.layer._latlngs[0][1].lng],
          [e.layer._latlngs[0][2].lat, e.layer._latlngs[0][2].lng],
          [e.layer._latlngs[0][3].lat, e.layer._latlngs[0][3].lng],
          [e.layer._latlngs[0][4].lat, e.layer._latlngs[0][4].lng],
          [e.layer._latlngs[0][5].lat, e.layer._latlngs[0][5].lng],
          [e.layer._latlngs[0][6].lat, e.layer._latlngs[0][6].lng],
          [e.layer._latlngs[0][7].lat, e.layer._latlngs[0][7].lng],
        ],
      ];
    }

    if (e.layer._latlngs[0].length === 9) {
      geoJSONPolygon = [
        [
          [e.layer._latlngs[0][0].lat, e.layer._latlngs[0][0].lng],
          [e.layer._latlngs[0][1].lat, e.layer._latlngs[0][1].lng],
          [e.layer._latlngs[0][2].lat, e.layer._latlngs[0][2].lng],
          [e.layer._latlngs[0][3].lat, e.layer._latlngs[0][3].lng],
          [e.layer._latlngs[0][4].lat, e.layer._latlngs[0][4].lng],
          [e.layer._latlngs[0][5].lat, e.layer._latlngs[0][5].lng],
          [e.layer._latlngs[0][6].lat, e.layer._latlngs[0][6].lng],
          [e.layer._latlngs[0][7].lat, e.layer._latlngs[0][7].lng],
          [e.layer._latlngs[0][8].lat, e.layer._latlngs[0][8].lng],
        ],
      ];
    }

    if (e.layer._latlngs[0].length === 10) {
      geoJSONPolygon = [
        [
          [e.layer._latlngs[0][0].lat, e.layer._latlngs[0][0].lng],
          [e.layer._latlngs[0][1].lat, e.layer._latlngs[0][1].lng],
          [e.layer._latlngs[0][2].lat, e.layer._latlngs[0][2].lng],
          [e.layer._latlngs[0][3].lat, e.layer._latlngs[0][3].lng],
          [e.layer._latlngs[0][4].lat, e.layer._latlngs[0][4].lng],
          [e.layer._latlngs[0][5].lat, e.layer._latlngs[0][5].lng],
          [e.layer._latlngs[0][6].lat, e.layer._latlngs[0][6].lng],
          [e.layer._latlngs[0][7].lat, e.layer._latlngs[0][7].lng],
          [e.layer._latlngs[0][8].lat, e.layer._latlngs[0][8].lng],
          [e.layer._latlngs[0][9].lat, e.layer._latlngs[0][9].lng],
        ],
      ];
    }

    // const geoJSONPolygon = e.layer._latlngs[0].map((arr: []) => {
    //   return [arr.lat, arr.lng];
    // });

    // no idea why but the states in context seem to take a tiny amount of time to update
    // without the setTimeout the navigate() and setIsDrawOpen do not work correctly
    setTimeout(() => {
      setPolygonDrawingCoordinates(geoJSONPolygon);
      setIsPolygonDrawingActive(false);
      setIsDrawOpen(true);
      navigate("create-mission");
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
              color: "red", // Color the shape will turn when intersects
              message: "Intersections not possible!", // Message that will show when intersect
            },
            shapeOptions: {
              color: "blue",
            },
          },
        }}
        edit={{ edit: false, remove: false }}
      />
    </FeatureGroup>
  );
};

export default DrawPolygon;
