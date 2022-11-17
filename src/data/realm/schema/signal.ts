import { BSON } from "realm-web";
import { geoJSONPoint } from "../../../components/map/mapTypes";
import { signalTypes } from "../../../components/map/mapTypes";

export type SignalSchema = {
  _id: BSON.ObjectId;
  identifier: string;
  mission: BSON.ObjectId;
  signal_type: signalTypes;
  placed_by: BSON.ObjectId;
  timestamp: string;
  status: "active" | "inactive";
  geoJSON: geoJSONPoint;
};

export type CreateSignalArgs = {
  identifier: string;
  mission: string;
  signal_type: string;
  status: "active" | "inactive";
  geoJSON: geoJSONPoint;
};

export type DeleteSignalArgs = {
  _id: string;
};
