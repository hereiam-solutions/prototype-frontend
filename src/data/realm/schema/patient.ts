import { BSON } from "realm-web";
import { geoJSONPoint } from "./../../../components/map/mapTypes";

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

export type PatientSchema = {
  _id: BSON.ObjectId;
  timestamp: string;
  found_by: BSON.ObjectId;
  found_on: BSON.ObjectId;
  identifier: string;
  active: boolean;
  agegroup: ageGroups;
  gender: genders;
  status: statuses;
  extricatedLevel: extricatedLevels;
  total_extrication_from: string;
  total_extrication_to: string;
  positionInStructure: string;
  foundStreetAddress: string;
  handoverTo: string;
  handover: handovers;
  hair: string;
  face: string;
  clothing: string;
  bodymarks: string;
  geoJSON: geoJSONPoint;
};

export type CreatePatientArgs = {
  mission: string;
  agegroup: ageGroups;
  gender: genders;
  status: statuses;
  extricatedLevel: extricatedLevels;
  total_extrication_from: string;
  total_extrication_to: string;
  positionInStructure: string;
  foundStreetAddress: string;
  handoverTo: string;
  handover: handovers;
  hair: string;
  face: string;
  clothing: string;
  bodymarks: string;
  geoJSON: geoJSONPoint;
};

// export type UpdatePatientArgs = {
//   _id: string;
//   active: boolean;
// };

export type DeletePatientArgs = {
  _id: string;
};
