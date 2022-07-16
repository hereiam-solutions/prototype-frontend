export type ActiveMarkerType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};

export type Location = [latitude: number, longitude: number];

export enum MarkerType {
  HAZARD = 'hazard',
  CASUALTY = 'casualty',
  BOO = 'boo',
}

export type screenCoordinatesType = {
  x: number;
  y: number;
};
