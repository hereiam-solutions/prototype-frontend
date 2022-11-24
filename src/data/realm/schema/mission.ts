import { BSON } from 'realm-web';
import { geoJSONPolygon } from './../../../components/map/mapTypes';
import { disasterTypesEnum } from './../../../components/map/mapTypes';

export enum RiskLevel {
  'ONE' = '1-Minimal',
  'TWO' = '2-Low',
  'THREE' = '3-Moderate',
  'FOUR' = '4-Substantial',
  'FIVE' = '5-High',
}

export enum SecurityLevel {
  'ZERO' = '0-Work',
  'ONE' = '1-Monitoring',
  'TWO' = '2-Hibernation',
  'THREE' = '3-Relocation',
  'FOUR' = '4-Evacuation',
}

export enum SecurityCategory {
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

export enum ConditionsCategory {
  'TEMPERATURE' = 'Temperature',
  'WIND' = 'Wind',
  'RAINFALL' = 'Rainfall',
  'EXTREME' = 'Extreme',
  'ALERT' = 'Alert',
}

export type MissionSchema = {
  _id: BSON.ObjectId;
  timestamp: string;
  mission_leader: BSON.ObjectId;
  operating_teams: BSON.ObjectId[];
  participants: BSON.ObjectId[];
  identifier: string;
  disasterType: disasterTypesEnum;
  objectives: string[];
  roleAndMandates: string[];
  threatsAndRisks: string[];
  riskLevel: RiskLevel;
  estimatedPopulation: number;
  securityLevel: SecurityLevel;
  evacuationRoute: string;
  additionalEvacuationSignal: string;
  safeHaven: string;
  nextHospital: string;
  nextVeterinary: string;
  nationalAssetsDeployed: boolean;
  internationalAssetsDeployed: boolean;
  CIMICDeployed: boolean;
  start_of_mission: string;
  end_of_mission: string;
  nuts: string;
  geoJSON: geoJSONPolygon;
};

export type CreateMissionArgs = {
  //   _id: BSON.ObjectId;
  //   timestamp: string;
  //   mission_leader: BSON.ObjectId;
  //   operating_teams: BSON.ObjectId[];
  //   participants: BSON.ObjectId[];
  identifier: string;
  disasterType: string;
  objectives: string[];
  roleAndMandates: string[];
  threatsAndRisks: string[];
  riskLevel: string;
  estimatedPopulation: number;
  securityLevel: string;
  evacuationRoute: string;
  additionalEvacuationSignal: string;
  safeHaven: string;
  nextHospital: string;
  nextVeterinary: string;
  //   nationalAssetsDeployed: boolean;
  //   internationalAssetsDeployed: boolean;
  //   CIMICDeployed: boolean;
  start_of_mission: string;
  end_of_mission: string;
  //   nuts: string;
  geoJSON: geoJSONPolygon; 
};
