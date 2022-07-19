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

// old?
// export enum locationTypes {
//   DIVISIONCOMMAND = 'division command',
//   ELECTRICITYPOINT = 'electricity point',
//   FIREBRIGADE = 'fire brigade',
//   MEDICALFACILITY = 'medical facility',
//   MILITARY = 'military',
//   MUNICIPALITYAUTHORITIES = 'municipality authorities',
//   POLICE = 'police',
//   SHELTER = 'shelter',
//   WATERPOINT = 'water point',
// }

export enum locationTypes {
  COMMANDPOST = 'command post',
  BOO = 'BoO',
  UCC = 'UCC',
  OSOCC = 'OSOCC',
  RDC = 'RDC',
  EMTCC = 'EMTCC',
  UNDAC = 'UNDAC',
  BARRIER = 'barrier',
  CHECKPOINT = 'checkpoint',
  ASSEMBLYPOINT = 'assembly point',
  MEDICALPOST = 'medical post',
  SHELTER = 'shelter',
  PUBLICINFORMATION = 'public information',
  POWER = 'power',
  WATER = 'water',
  FOOD = 'food',
  APPAREL = 'apparel',
  SAFETY = 'safety',
  TRANSPORT = 'transport',
  REGISTRATION = 'registration',
  PSYCHOLOGICALINTERVENTION = 'psychological intervention',
  PRAYERSPACE = 'prayer space',
  CARE = 'care',
  MISSINGPERSONS = 'missing persons',
}

export enum disasterTypes {
  'DROUGHT' = 'Drought',
  'ARMEDCONFLICTS' = 'Armed Conflicts',
  'WARS' = 'Wars',
  'TERRORISM' = 'Terrorism',
  'CROWDACCIDENTS' = 'Crowd accidents',
  'STRUCTURALFAILURES' = 'Structural failures',
  'EARTHQUAKE' = 'Earthquake',
  'VOLCANICACTIVITY' = 'Volcanic activity',
  'TSUNAMI' = 'Tsunami',
  'ROCKFALL' = 'Rockfall',
  'AVALANCHE' = 'Avalanche',
  'LANDSLIDE' = 'Landslide',
  'SUBSIDENCE' = 'Subsidence',
  'TROPICALSTORM' = 'Tropical storm',
  'WINTERSTORM' = 'Winter storm',
  'LOCAL/CONVECTIVESTORM' = 'Local/Convective storm',
  'RIVERFLOOD' = 'River flood',
  'FLASHFLOOD' = 'Flash flood',
  'COASTALFLOOD' = 'Coastal flood',
  'HEATWAVE' = 'Heat wave',
  'COLDWAVE' = 'Cold wave',
  'EXTREMEWINTERCONDITIONS' = 'Extreme winter conditions',
  'FORESTFIRE' = 'Forest fire',
  'LANDFIRES' = 'Land fires',
  'EPIDEMIC' = 'Epidemic',
  'INSECTINFESTATION' = 'Insect infestation',
  'ANIMALSTAMPEDE' = 'Animal stampede',
  'METEORIT/ASTEORITIMPACT' = 'Meteorit/Asteorit impact',
  'SPACEWEATHER' = 'Space weather',
  'INDUSTRIALACCIDENT' = 'Industrial accident',
  'TRANSPORTACCIDENT' = 'Transport accident',
  'COLLAPSE' = 'Collapse',
  'EXPLOSION' = 'Explosion',
  'OTHER' = 'Other',
}

export type ActiveMarkerType = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};
