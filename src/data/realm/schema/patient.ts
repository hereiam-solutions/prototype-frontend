import { BSON } from "realm-web";
import { geoJSONPoint } from "./../../../components/map/mapTypes";
import { locationTypes } from "../../../components/map/mapTypes";

// enum roles {
//   'LEMA' = 'lema',
//   'OCC' = 'occ',
//   'LEMAAPPROVER' = 'lemaApprover',
//   'UCC' = 'ucc',
//   'SCC' = 'scc',
//   'LOGISTICS' = 'logistics',
//   'SAFETYANDSECURITY' = 'safety and security',
//   'COMMUNICATIONS' = 'communications',
//   'TEAMLEADER' = 'teamLeader',
//   'MEDIC' = 'medic',
//   'DOGHANDLER' = 'dogHandler',
//   'TEAMMEMBER' = 'teamMember',
// }

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
  UNKNOWN = "unknown",
}

export enum statuses {
  ONGOINGCPR = "ongoing CPR",
  URGENT = "urgent",
  LESSURGENT = "less urgent",
  NOTURGENT = "not urgent",
}

export enum injuries {
  NONE = "none",
  STABLE = "stable",
  CRITICAL = "critical",
}

export enum extricated {
  "assist only",
  "light debris",
  "ASR3",
  "ASR4",
  "ASR5",
}

export enum handover {
  "Family",
  "Locals",
  "Ambulance",
  "Medical Team",
  "Field Hospital",
  "Helicopter",
  "Hospital",
  "Mortuary",
  "other",
}

export type PatientSchema = {
  _id: BSON.ObjectId;
  timestamp: string;
  identifier: string;
  active: boolean;
  firstName: string;
  lastName: string;
  agegroup: ageGroups;
  gender: genders;
  language: string;
  status: statuses;
  injuries: injuries;
  isTeamMember: boolean;
  isTeamDog: boolean;
  triageReport: [];
  lemaInformation: string;
  detailsVictim: [];
  extricatedOn: extricated;
  total_extrication_from: string;
  total_extrication_to: string;
  found_by: BSON.ObjectId;
  found_on: BSON.ObjectId;
  positionInStructure: string;
  foundStreetAddress: string;
  handoverTo: string;
  handover: handover;
  geoJSON: geoJSONPoint;
};

export type CreatePatientArgs = {
  mission: string;
  agegroup: ageGroups;
  gender: genders;
  status: statuses;
  injuries: injuries;
  isTeamMember: boolean;
  geoJSON: geoJSONPoint;
};
