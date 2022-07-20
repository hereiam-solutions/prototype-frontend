import { BSON } from 'realm-web';
import { geoJSONPoint } from './../../../components/map/mapTypes';

enum roles {
  'LEMA' = 'lema',
  'OCC' = 'occ',
  'LEMAAPPROVER' = 'lemaApprover',
  'UCC' = 'ucc',
  'SCC' = 'scc',
  'LOGISTICS' = 'logistics',
  'SAFETYANDSECURITY' = 'safety and security',
  'COMMUNICATIONS' = 'communications',
  'TEAMLEADER' = 'teamLeader',
  'MEDIC' = 'medic',
  'DOGHANDLER' = 'dogHandler',
  'TEAMMEMBER' = 'teamMember',
}

export type PersonSchema = {
  //   _id: BSON.ObjectId;
  //   userId: BSON.ObjectId;
  //   identifier: string;
  //   active: boolean;
  firstName: string;
  lastName: string;
  missionReadyStatus: boolean;
  //   managingOrganization: BSON.ObjectId;
  //   team: BSON.ObjectId;
  role: roles[];
  missions: BSON.ObjectId[];
  deployedToMission: BSON.ObjectId;
  //   rollCallReport: [];
  //   contact: {
  //     email: string;
  //     phone: string;
  //     satcom: string;
  //     pager: string;
  //     radio: [{ callsign: string }, { channel: string }, { frequency: string }];
  //   };
  //   allowTracking: boolean;
  geoJSON: geoJSONPoint;
};

export type UpdatePersonArgs = {
  _id: BSON.ObjectId;
  userId: BSON.ObjectId;
  identifier: string;
  active: boolean;
  firstName: string;
  lastName: string;
  missionReadyStatus: boolean;
  managingOrganization: BSON.ObjectId;
  team: BSON.ObjectId;
  role: roles[];
  missions: BSON.ObjectId[];
  deployedToMission: BSON.ObjectId;
  rollCallReport: [];
  contact: {
    email: string;
    phone: string;
    satcom: string;
    pager: string;
    radio: [{ callsign: string }, { channel: string }, { frequency: string }];
  };
  allowTracking: boolean;
  geoJSON: geoJSONPoint;
};
