import { BSON } from "realm-web";
import { geoJSONPoint } from "../../../components/map/mapTypes";

export enum constructionTypes {
    BRICKCONCRETE = "Brick/Concrete Ceiling",
    BRICKWOOD = "Brick/Wood Ceiling",
    CONCRETECONSTRUCTION = "Reinforced Concrete Construction",
    CONCRETEWALLS = "Reinforced Concrete Walls",
    CONCRETESLABS = "Precast Concrete Slabs",
    STEELFRAME = "Steel Frame",
    STONE = "Stone/Adobe",
    OTHER = "Other"
};

export enum buildingUses {
    LIVING = "Living",
    SHOPPING = "Shopping",
    HOSPITAL = "Hospital",
    CARE = "Care",
    OFFICE = "Office",
    RELIGIOUS = "Religious",
    SCHOOL = "School",
    INDUSTRIAL = "Industrial",
    HOTEL = "Hotel",
    RESTAURANT = "Restaurant",
    MIXED = "Mixed",
    OTHER = "Other"
};

export enum collapses {
    PLANE = "Inclined plane",
    MULTILAYER = "Multi-layer collapse",
    OUTSPREAD = "Outspread multi-layer collapse",
    PANCAKESEVERAL = "Pancake collapse several stories",
    PANCAKEONE = "Pancake collapse one story",
    HEAPVERTICAL = "Heap on debris on vertical elements",
    HEAPUNCOLLAPSED = "Heap on debris on uncollapsed stories",
    HEAPDEBRIS = "Heap on debris",
    HEAPPLATES = "Heap of debris with plates",
    OVERHANG = "Overhang",
    OVERTURN = "Overturn",
    OTHER = "Other"
};

export enum voids {
    BIG = "big",
    SMALL = "small"
};

export enum operatingLevels {
    ASR1 = "ASR1",
    ASR2 = "ASR2",
    ASR3 = "ASR3",
    ASR4 = "ASR4",
    ASR5 = "ASR5"
};

export enum worksiteTriageLevels {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F"
};

export enum innerHazards {
    ASBESTOS = "ASBESTOS",
    TOXINS = "BREATHING TOXINS",
    DIFFUSION = "DIFFUSION",
    FEAR = "FEAR REACTION",
    FALL = "FALL",
    RADIOACTIVE = "RADIOACTIVE",
    BIOLOGICAL = "BIOLOGICAL",
    CHEMICAL = "CHEMICAL",
    ANIMALS = "ANIMALS",
    INFECTIOUS = "INFECTIOUS",
    FIRE = "FIRE",
    EXPLOSION = "EXPLOSION",
    GAS = "GAS",
    ELECTRICITY = "ELECTRICITY",
    BREAKDOWN = "BREAKDOWN",
    DROWNING = "DROWNING",
    ILLNESS = "ILLNESS"
};

export type WorksiteSchema = {
    _id: BSON.ObjectId;
    placed_by: BSON.ObjectId;
    timestamp: string;
    identifier: string;
    address: string;
    boundaries: string;
    constructionType: constructionTypes;
    buildingUse: buildingUses;
    floorArea: string;
    floorNumber: string;
    basementNumber: string;
    collapse: collapses;
    damage: string;
    voids: voids;
    operatingTeams: string[];
    operatingLevel: operatingLevels;
    worksiteTriageLevel: worksiteTriageLevels;
    missingPersons: string;
    confirmedLive: string;
    confirmedVictims: string;
    needsMedical: boolean;
    needsFirefighting: boolean;
    needsDecon: boolean;
    needsPumping: boolean;
    needsDogSearch: boolean;
    needsTechnicalSearch: boolean;
    needsShoring: boolean;
    needsBreaking: boolean;
    needsLifting: boolean;
    needsRoping: boolean;
    liveVictimsExtricated: string;
    deadVictimsRecovered: string;
    otherOperationalActivities: string[];
    logisticalNeeds: string[];
    nextActionPlan: string[];
    worksiteRelevantContacts: string[];
    hasHazmat: boolean;
    innerHazards: innerHazards;
    unusualHazards: string;
    notice: string;
    status: "active" | "inactive";
    mission: BSON.ObjectId;
    geoJSON: geoJSONPoint;
};

export type CreateWorksiteArgs = {
    // _id: BSON.ObjectId;
    // placed_by: BSON.ObjectId;
    // timestamp: string;
    identifier: string;
    address: string;
    boundaries: string;
    constructionType: constructionTypes;
    buildingUse: buildingUses;
    floorArea: string;
    floorNumber: string;
    basementNumber: string;
    collapse: collapses;
    damage: string;
    voids: voids;
    operatingTeams: string[];
    operatingLevel: operatingLevels;
    worksiteTriageLevel: worksiteTriageLevels;
    missingPersons: string;
    confirmedLive: string;
    confirmedVictims: string;
    needsMedical: boolean;
    needsFirefighting: boolean;
    needsDecon: boolean;
    needsPumping: boolean;
    needsDogSearch: boolean;
    needsTechnicalSearch: boolean;
    needsShoring: boolean;
    needsBreaking: boolean;
    needsLifting: boolean;
    needsRoping: boolean;
    liveVictimsExtricated: string;
    deadVictimsRecovered: string;
    otherOperationalActivities: string[];
    logisticalNeeds: string[];
    nextActionPlan: string[];
    worksiteRelevantContacts: string[];
    hasHazmat: boolean;
    innerHazards: innerHazards;
    unusualHazards: string;
    notice: string;
    status: "active";
    mission: string;
    geoJSON: geoJSONPoint;
};

export type DeleteWorksiteArgs = {
    _id: string;
};
