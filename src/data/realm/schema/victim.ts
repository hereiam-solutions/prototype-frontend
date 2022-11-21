import { BSON } from "realm-web";
import { geoJSONPoint } from "../../../components/map/mapTypes";

export enum ageGroups {
  ZERO = "0-1",
  ONE = "2-5",
  TWO = "6-11",
  THREE = "12-64",
  FOUR = "65+",
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
  FAMILIY = "Family",
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
  detailsVictim: [
    { bodymarks: string },
    { clothing: string },
    { face: string },
    { hair: string }
  ];
  extricatedLevel: extricatedLevels;
  total_extrication_from: string;
  total_extrication_to: string;
  found_by: BSON.ObjectId;
  found_on: BSON.ObjectId;
  positionInStructure: string;
  foundStreetAddress: string;
  handoverTo: string;
  handover: handovers;
  geoJSON: geoJSONPoint;
};

export type CreatePatientArgs = {
  mission: string;
  agegroup: ageGroups;
  gender: genders;
  status: statuses;
  myAction: string[];
  detailsVictim: [
    { bodymarks: string },
    { clothing: string },
    { face: string },
    { hair: string }
  ];
  extricatedLevel: extricatedLevels;
  total_extrication_from: string;
  total_extrication_to: string;
  found_by: BSON.ObjectId;
  found_on: BSON.ObjectId;
  positionInStructure: string;
  foundStreetAddress: string;
  handoverTo: string;
  handover: handovers;
  geoJSON: geoJSONPoint;
};

export type DeletePatientArgs = {
  _id: string;
};
