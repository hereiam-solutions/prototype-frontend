import { geoJSONPolygon } from './../../components/map/mapTypes';
import { geoJSONPoint } from '../../components/map/mapTypes';
import { hazardTypes, booTypes } from '../../components/map/mapTypes';
import { BSON } from 'realm-web';

// hazard
export type HazardSchema = {
  _id: BSON.ObjectId;
  identifier: string;
  mission: BSON.ObjectId;
  hazard_type: hazardTypes;
  placed_by: BSON.ObjectId;
  timestamp: string;
  status: 'active' | 'inactive';
  location: geoJSONPoint;
};

export type HazardArgs = {
  // commented out have to be defaulted in realm function
  // _id: BSON.ObjectId;
  identifier: string;
  mission: BSON.ObjectId;
  hazard_type: hazardTypes;
  // placed_by: BSON.ObjectId;
  //   timestamp: string;
  status: 'active' | 'inactive';
  location: geoJSONPoint;
};

// location / boo
export type LocationSchema = {
  _id: BSON.ObjectId;
  status: 'active' | 'inactive';
  name: string;
  alias: string;
  type: booTypes;
  contact: [
    { email: string },
    { phone: string },
    { satcom: string },
    { radio: [{ callsign: string }, { channel: string }] }
  ];
  managingOrganization: BSON.ObjectId;
  partOf: BSON.ObjectId;
  location: geoJSONPoint;
};

export type LocationArgs = {
  // commented out have to be defaulted in realm function
  // _id: BSON.ObjectId;
  status: 'active' | 'inactive';
  name: string;
  alias: string;
  type: booTypes;
  // contact: [
  //   { email: string },
  //   { phone: string },
  //   { satcom: string },
  //   { radio: [{ callsign: string }, { channel: string }] }
  // ];
  // managingOrganization: BSON.ObjectId;
  // partOf: BSON.ObjectId;
  location: geoJSONPoint;
};

// mission
enum RiskLevel {
  'ONE' = '1-Minimal',
  'TWO' = '2-Low',
  'THREE' = '3-Moderate',
  'FOUR' = '4-Substantial',
  'FIVE' = '5-High',
}

enum SecurityLevel {
  'ZERO' = '0-Work',
  'ONE' = '1-Monitoring',
  'TWO' = '2-Hibernation',
  'THREE' = '3-Relocation',
  'FOUR' = '4-Evacuation',
}

enum SecurityCategory {
  'GENERAL' = 'General',
  'INCIDENT' = 'Incident',
  'ARMEDGROUPS' = 'Armed groups',
  'SENSITIVITIES' = 'Sensitivities',
  'NATURALHAZARDS' = 'Natural hazards',
  'CRIME' = 'Crime',
  'HAZMAT' = 'Hazmat',
  'PERSONNEL' = 'Personnel',
  'OTHER' = 'Other',
}

export type MissionSchema = {
  _id: BSON.ObjectId;
  timestamp: string;
  identifier: string;
  estimatedPopulation: number;
  nuts: string;
  mission_leader: BSON.ObjectId;
  start_of_mission: string;
  end_of_mission: string;
  participants: BSON.ObjectId[];
  operating_teams: BSON.ObjectId[];
  location: geoJSONPolygon;
  roleAndMandates: string[];
  objectives: string[];
  nationalAssetsDeployed: boolean;
  internationalAssetsDeployed: boolean;
  CIMICDeployed: boolean;
  threatsAndRisks: string[];
  riskLevel: RiskLevel;
  securityLevel: SecurityLevel;
  securityReport: [
    { reported_from: BSON.ObjectId },
    { situation: string },
    { securityCategory: SecurityCategory },
    { timestamp: string }
  ];
  evacuationRoute: string;
  additionalEvacuationSignal: string;
  safeHaven: string;
  nextHospital: string;
  nextVeterinary: string;
};

export type MissionArgs = {
  // commented out have to be defaulted in realm function
  // _id: BSON.ObjectId;
  // timestamp: string;
  identifier: string;
  estimatedPopulation: number;
  // nuts: string;
  mission_leader: BSON.ObjectId;
  start_of_mission: string;
  end_of_mission: string;
  // participants: BSON.ObjectId[];
  // operating_teams: BSON.ObjectId[];
  location: geoJSONPolygon;
  // roleAndMandates: string[];
  // objectives: string[];
  // nationalAssetsDeployed: boolean;
  // internationalAssetsDeployed: boolean;
  // CIMICDeployed: boolean;
  // threatsAndRisks: string[];
  riskLevel: RiskLevel;
  securityLevel: SecurityLevel;
  // securityReport: [
  //   { reported_from: BSON.ObjectId },
  //   { situation: string },
  //   { securityCategory: SecurityCategory },
  //   { timestamp: string }
  // ];
  // evacuationRoute: string;
  // additionalEvacuationSignal: string;
  // safeHaven: string;
  // nextHospital: string;
  // nextVeterinary: string;
};

// person / casualty
export type PersonSchema = {};
