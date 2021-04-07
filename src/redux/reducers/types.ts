import {ThunkAction} from "redux-thunk";
import React from "react";
//======================
//development-reducer

export interface DevelopmentState {
  response: {},
}

export interface Sensor {
  tag: string,
  measure: "МПа" | "мм" | "C\u00B0" | "%" | "м3/ч" | "Па" | "КПа" | "дискр" | "об/мин",
  min: number,
  max: number,
}

export interface SensorsPayload {
  objectID: number,
  sensors: Array<Sensor>
}

export interface HMIState {
  objectID: number,
  hmi: Sprites,
}

//Const types
export const UPDATE_RESPONSE: "development-reducer/UPDATE_RESPONSE" = "development-reducer/UPDATE_RESPONSE";

//Action types
export interface UpdateResponseAction {
  type: typeof UPDATE_RESPONSE,
  payload: DevelopmentState["response"],
}

//All Actions
export type DevelopmentActionTypes = UpdateResponseAction;
//Thunk types
export type DevThunk = ThunkAction<Promise<void>, DevelopmentState, unknown, UpdateResponseAction>;
//======================
//object-state-reducer
export interface SensorData {
  value: string,
  date: string,
}

export interface SensorMeta {
  sensorTag: string,
  information: string,
  measure: "МПа" | "мм" | "C\u00B0" | "%" | "м3/ч" | "Па" | "КПа" | "дискр" | "об/мин",
  x: number,
  y: number,
}

export interface SensorState {
  isSensorInit: boolean,
  meta: SensorMeta,
  sensorState: Array<SensorData>,
}

export interface ObjectState {
  objectId: string,
  sensors: Array<SensorState>,
}

export interface Objects {
  objects: Array<ObjectState>,
}

//Const types
export const UPDATE_SENSOR_STATE: "objects-state-reducer/UPDATE_SENSOR_STATE" = "objects-state-reducer/UPDATE_SENSOR_STATE";
export const UPDATE_IS_SENSOR_INIT: "objects-state-reducer/UPDATE_IS_SENSOR_INIT" = "objects-state-reducer/UPDATE_IS_SENSOR_INIT";

//Action types
export interface UpdateSensorAction {
  type: typeof UPDATE_SENSOR_STATE,
  payload: SensorData,
  objectId: string,
  sensorTag: string,
}

export interface UpdateIsSensorInit {
  type: typeof UPDATE_IS_SENSOR_INIT,
  objectId: string,
  sensorTag: string,
}

//All actions
export type ObjectsStateActions = UpdateSensorAction | UpdateIsSensorInit;
//Thunk types
export type GetObjectState = ThunkAction<Promise<void>, Objects, unknown, ObjectsStateActions>;
export type GetSensorState = ThunkAction<Promise<void>, Objects, unknown, ObjectsStateActions>;
export type GetInitSensorState = ThunkAction<Promise<void>, Objects, unknown, ObjectsStateActions>;
//======================
//screen-reducer
export interface Position {
  x: number,
  y: number,
  id: string,
  description: string,
}

export interface Valves extends Position {
}
export interface PipesColor {
  water: React.CSSProperties["color"],
  gas: React.CSSProperties["color"],
  oil: React.CSSProperties["color"],
  air: React.CSSProperties["color"],
  steam: React.CSSProperties["color"],
  smoke: React.CSSProperties["color"],
}
export interface PipeType extends Position{
  type: "water" | "gas" | "oil" | "air" | "steam" | "smoke",
  orientation: "horizontal" | "vertical" | "TL" | "TR" | "BL" | "BR",
  width?: number,
  height?: number,
}
export interface TankType extends Position {
  type: "boilerTop" | "boilerBottom" | "native",
  radius: number,
}

export interface Sprites {
  valves: Array<Valves>,
  pipes: {
    pipesColor: PipesColor,
    pipeItems: Array<PipeType>,
  }
  tanks: {
    tankItems: Array<TankType>,
  }
}

export interface Resolution {
  width: number,
  height: number,
}

export interface ScreenState {
  resolution: Resolution,
  sprites: Sprites,
}

//Const types
export const UPDATE_SCREEN_RESOLUTION: "screen-reducer/UPDATE_SCREEN_RESOLUTION" = "screen-reducer/UPDATE_SCREEN_RESOLUTION";

//Action types
export interface UpdateScreenResolutionAction {
  type: typeof UPDATE_SCREEN_RESOLUTION,
  payload: Resolution,
}

//All actions
export type ScreenActionTypes = UpdateScreenResolutionAction;
//Thunk types

//======================
//system-reducer
export interface OwnObjectInfo {
  objectId: string,
}
export interface Session {
  loggedIn: boolean,
  session: string,
  userName: string,
  ownObjects: Array<OwnObjectInfo>
}

export interface SystemState {
  isInit: boolean,
  currentObject: string,
  session: Session,
}

//Const types
export const UPDATE_SESSION: "system-reducer/UPDATE_SESSION" = "system-reducer/UPDATE_SESSION";
export const UPDATE_SYSTEM_INIT: "system-reducer/UPDATE_SYSTEM_INIT" = "system-reducer/UPDATE_SYSTEM_INIT";
export const UPDATE_CURRENT_OBJECT: "system-reducer/UPDATE_CURRENT_OBJECT" = "system-reducer/UPDATE_CURRENT_OBJECT";
//Action types
export interface UpdateSessionAction {
  type: typeof UPDATE_SESSION,
  payload: Session,
}
export interface UpdateSystemInit {
  type: typeof UPDATE_SYSTEM_INIT,
  payload: boolean,
}
export interface UpdateCurrentObject {
  type: typeof UPDATE_CURRENT_OBJECT,
  payload: string,
}
//All actions
export type SystemActionTypes = UpdateSessionAction | UpdateSystemInit | UpdateCurrentObject;
//Thunk types
export type Login = ThunkAction<Promise<void>, SystemState, unknown, UpdateSessionAction>;
export type Initialisation = ThunkAction<Promise<void>, SystemState, unknown, UpdateSystemInit | UpdateCurrentObject>;