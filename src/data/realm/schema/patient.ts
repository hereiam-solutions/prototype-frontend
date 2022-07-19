import { BSON } from 'realm-web';
import { geoJSONPoint } from './../../../components/map/mapTypes';
import { locationTypes } from '../../../components/map/mapTypes';

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

enum ageGroups {
  '0-1',
  '2-5',
  '6-11',
  '12-64',
  '65+',
}

enum genders {
  'male',
  'female',
  'divers',
  'unknown',
}

enum statuses {
  'ongoing CPR',
  'urgent',
  'less urgent',
  'not urgent',
}

enum injuries {
  'none',
  'stable',
  'critical',
}

enum extricated {
  'assist only',
  'light debris',
  'ASR3',
  'ASR4',
  'ASR5',
}

enum handover {
  'Family',
  'Locals',
  'Ambulance',
  'Medical Team',
  'Field Hospital',
  'Helicopter',
  'Hospital',
  'Mortuary',
  'other',
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
  // _id: BSON.ObjectId;
  // timestamp: string;
  // identifier: string;
  // active: boolean;
  // firstName: string;
  // lastName: string;
  agegroup: ageGroups;
  gender: genders;
  // language: string;
  status: statuses;
  injuries: injuries;
  isTeamMember: boolean;
  // isTeamDog: boolean;
  // triageReport: [];
  // lemaInformation: string;
  // detailsVictim: [];
  // extricatedOn: extricated;
  // total_extrication_from: string;
  // total_extrication_to: string;
  found_by: BSON.ObjectId;
  // found_on: BSON.ObjectId;
  // positionInStructure: string;
  // foundStreetAddress: string;
  // handoverTo: string;
  // handover: handover;
  geoJSON: geoJSONPoint;
};
