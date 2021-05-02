import {ThunkAction} from "redux-thunk";
import React from "react";

//======================
export interface AlarmState {
  settings: {
    colors: AlarmColorSetting,
  }
  alarmLog: Array<AlarmsItemType>,
}
export interface AlarmColorSetting {
  warning: React.CSSProperties["color"],
  message: React.CSSProperties["color"],
  alarm: React.CSSProperties["color"],
}
export interface AlarmsItemType {
  id: string,
  date: string,
  message: string,
  type: "alarm" | "message" | "warning",
}

//Const types
export const ADD_ALARM: "alarm-reducer/ADD_ALARM" = "alarm-reducer/ADD_ALARM";

//Action types
export interface AddAlarmAction {
  type: typeof ADD_ALARM,
  payload: AlarmsItemType,
}

//All Actions
export type AlarmActionTypes = AddAlarmAction;
//Thunk types


//======================
//development-reducer

export type DevelopmentState = {
  hmiState: ScreenState,
  sensorsState: SensorMeta[],
}
//Const types
  export const UPDATE_SENSORS_STATE: "development-reducer/UPDATE_SENSORS_STATE" = "development-reducer/UPDATE_SENSORS_STATE";
//Action types
  export type UpdateSensorsStateAction = {
    type: typeof UPDATE_SENSORS_STATE,
    payload: SensorMeta[],
  };
//All Actions
  export type DevelopmentActionTypes = UpdateSensorsStateAction;
//Thunk types
  export type SetSensorsState = ThunkAction<Promise<void>, DevelopmentState, unknown, UpdateSensorsStateAction>;
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
  min: string,
  max: string,
  minAlarm: string,
  maxAlarm: string,
  minWarning: string,
  maxWarning: string,
  x: string,
  y: string,
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
//regulators-reducer
export type RegulatorsState = {
  regulators: Array<Regulator>;
}
export type Regulator = {
  id: string,
  settings: RegulatorSettings,
}
export type RegulatorSettings = {
  targetForAutoMode: number,
  targetForManualMode: number,
  kp: number,
  ki: number,
  kd: number,
  deadZone: number,
}
//Const types
export const UPDATE_REGULATOR_SETTINGS: "regulator-reducer/UPDATE_REGULATOR_SETTINGS" = "regulator-reducer/UPDATE_REGULATOR_SETTINGS";
//Action types
export type UpdateRegulatorSettingsAction = {type: typeof UPDATE_REGULATOR_SETTINGS, payload: RegulatorSettings, id: string};
export type RegulatorsStateActionsTypes = UpdateRegulatorSettingsAction;
//Thunk types


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