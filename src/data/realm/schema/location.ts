import { BSON } from "realm-web";
import { geoJSONPoint } from "./../../../components/map/mapTypes";
import { locationTypes } from "../../../components/map/mapTypes";

export type LocationSchema = {
  _id: BSON.ObjectId;
  status: "active" | "suspended" | "inactive";
  name: string;
  alias: string;
  identifier: string;
  type: locationTypes;
  mission: BSON.ObjectId;
  contact: [
    { name: string },
    { position: string },
    { email: string },
    { phone: string },
    { satcom: string },
    {
      radio: [{ callsign: string }, { channel: string }, { frequency: string }];
    }
  ];
  managingOrganization: BSON.ObjectId;
  partOf: BSON.ObjectId;
  placed_by: BSON.ObjectId;
  timestamp: string;
  geoJSON: geoJSONPoint;
};

export type CreateLocationArgs = {
  status: "active" | "suspended" | "inactive";
  name: string;
  mission: string;
  type: locationTypes;
  geoJSON: geoJSONPoint;
};
