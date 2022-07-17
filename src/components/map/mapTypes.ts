export type Location = [latitude: number, longitude: number];

export type geoJSONPoint = {
  type: 'Point';
  coordinates: Location;
};

type PolygonCoordinates<Location> = {
  0: Location;
  1: Location;
} & Array<Location>;

export type geoJSONPolygon = {
  type: 'Polygon';
  coordinates: PolygonCoordinates<Location>;
};

export enum MarkerType {
  HAZARD = 'hazard',
  CASUALTY = 'casualty',
  BOO = 'boo',
}

export type screenCoordinatesType = {
  x: number;
  y: number;
};

export enum hazardTypes {
  AVALANCHE = 'avalanche',
  BIOLOGICALINCIDENT = 'biological incident',
  BOMB = 'bomb',
  CHEMICALINCIDENT = 'chemical incident',
  CONTAGIOUSILLNESS = 'contagious illness',
  EARTHQUAKE = 'earthquake',
  EXPLOSION = 'explosion',
  FIRE = 'fire',
  FLOOD = 'flood',
  HURRICANE = 'hurricane',
  MARITIME = 'maritime',
  NUCLEAR = 'nuclear',
  PLANECRASH = 'plane crash',
  POWEROUTAGE = 'power outage',
  RIOT = 'riot',
  ROCKSLIDE = 'rock slide',
  TRAFFICACCIDENT = 'traffic accident',
  TRAIN = 'train',
  WATERDISRUPTION = 'water disruption',
}

export enum booTypes {
  DIVISIONCOMMAND = 'division command',
  ELECTRICITYPOINT = 'electricity point',
  FIREBRIGADE = 'fire brigade',
  MEDICALFACILITY = 'medical facility',
  MILITARY = 'military',
  MUNICIPALITYAUTHORITIES = 'municipality authorities',
  POLICE = 'police',
  SHELTER = 'shelter',
  WATERPOINT = 'water point',
}

export type ActiveMarkerType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};
