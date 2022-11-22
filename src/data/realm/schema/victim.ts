import { BSON } from "realm-web";
import { geoJSONPoint } from "../../../components/map/mapTypes";

export enum ageGroups {
  BABY = "0-1",
  PRESCHOOLER = "2-5",
  CHILD = "6-11",
  ADOLESCENT = "12-24",
  ADULT = "25-64",
  ELDERLY = "65+",
}

export enum genders {
  MALE = "male",
  FEMALE = "female",
  DIVERSE = "divers",
}

export enum statuses {
  IMMEDIATE = "immediate",
  DELAYED = "delayed",
  MINIMAL = "minimal",
  EXPECTANT = "expectant",
  LOST = "lost",
  AFFECTED = "affected",
}

export enum extricatedLevels {
  ASSISTED = "assisted",
  ASR3 = "ASR3",
  ASR4 = "ASR4",
  ASR5 = "ASR5",
}

export enum handovers {
  FAMILY = "Family",
  LOCALS = "Locals",
  AMBULANCE = "Ambulance",
  MEDICAL = "Medical Team",
  CARRIER = "Carrier support",
  HELICOPTER = "Helicopter",
  HOSPITAL = "Hospital",
  MORTUARY = "Mortuary",
  OTHER = "other",
}

export type VictimSchema = {
  _id: BSON.ObjectId;
  timestamp: string;
  identifier: string;
  active: boolean;
  agegroup: ageGroups;
  gender: genders;
  status: statuses;
  myAction: string[];
  extricatedLevel: extricatedLevels;
  total_extrication_from: string;
  total_extrication_to: string;
  positionInStructure: string;
  foundStreetAddress: string;
  handoverTo: string;
  handover: handovers;
  geoJSON: geoJSONPoint;
};

export type CreateVictimArgs = {
  mission: string;
  agegroup: ageGroups;
  gender: genders;
  status: statuses;
  myAction: string[];
  extricatedLevel: extricatedLevels;
  total_extrication_from: string;
  total_extrication_to: string;
  positionInStructure: string;
  foundStreetAddress: string;
  handoverTo: string;
  handover: handovers;
  geoJSON: geoJSONPoint;
};

export type DeleteVictimArgs = {
  _id: string;
};
