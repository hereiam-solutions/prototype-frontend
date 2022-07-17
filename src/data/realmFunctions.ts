import { geoJSONPoint } from './../components/map/mapTypes';
import { hazardTypes } from '../components/map/mapTypes';

export const realmFunctionNames = {
  addNewHazard: 'addNewHazard',
};

export type addNewHazardArgs = {
  identifier: string;
  mission: string;
  hazard_type: hazardTypes;
  placed_by: string;
  location: geoJSONPoint;
};
