import { BSON } from "realm-web";
import { geoJSONPoint } from "./../../../components/map/mapTypes";
import { hazardTypes } from "../../../components/map/mapTypes";

export type HazardSchema = {
  _id: BSON.ObjectId;
  identifier: string;
  mission: BSON.ObjectId;
  hazard_type: hazardTypes;
  placed_by: BSON.ObjectId;
  timestamp: string;
  status: "active" | "inactive";
  geoJSON: geoJSONPoint;
};

export type CreateHazardArgs = {
  identifier: string;
  mission: string;
  hazard_type: hazardTypes;
  status: "active" | "inactive";
  geoJSON: geoJSONPoint;
};

// export type UpdateHazardArgs = {
//   _id: string;
//   status: "active" | "inactive";
// };

export type DeleteHazardArgs = {
  _id: string;
};
