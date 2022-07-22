import { BSON } from 'realm-web';
import { geoJSONPoint } from './../../../components/map/mapTypes';
import { hazardTypes } from '../../../components/map/mapTypes';

export type HazardSchema = {
  _id: BSON.ObjectId;
  identifier: string;
  mission: BSON.ObjectId;
  hazard_type: hazardTypes;
  placed_by: BSON.ObjectId;
  timestamp: string;
  status: 'active' | 'inactive';
  geoJSON: geoJSONPoint;
};

export type CreateHazardArgs = {
  // commented out have to be defaulted in realm function
  // _id: BSON.ObjectId;
  identifier: string;
  mission: BSON.ObjectId;
  hazard_type: hazardTypes;
  // placed_by: BSON.ObjectId;
  //   timestamp: string;
  status: 'active' | 'inactive';
  geoJSON: geoJSONPoint;
};
