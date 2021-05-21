import {ThunkAction} from "redux-thunk";
import React, {BaseSyntheticEvent} from "react";

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
  sensorsState: SignalMeta[],
}
//Const types
export const UPDATE_SENSORS_STATE: "development-reducer/UPDATE_SENSORS_STATE" = "development-reducer/UPDATE_SENSORS_STATE";
//Action types
export type UpdateSensorsStateAction = {
  type: typeof UPDATE_SENSORS_STATE,
  payload: SignalMeta[],
};
//All Actions
export type DevelopmentActionTypes = UpdateSensorsStateAction;
//Thunk types
export type SetSensorsState = ThunkAction<Promise<void>, DevelopmentState, unknown, UpdateSensorsStateAction>;
//======================
//object-state-reducer
export interface SignalData {
  value: string,
  date: string,
}

export interface SignalMeta {
  signalId: string,
  information: string,
  measure: "МПа" | "мм" | "C\u00B0" | "%" | "м3/ч" | "Па" | "КПа" | "дискр" | "об/мин",
  min: string,
  max: string,
  minAlarm: string,
  maxAlarm: string,
  minWarning: string,
  maxWarning: string,
}

export interface SignalState {
  isSignalInit: boolean,
  meta: SignalMeta,
  signalState: Array<SignalData>,
}

export interface ObjectState {
  objectId: string,
  signals: Array<SignalState>,
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
  payload: SignalData,
  objectId: string,
  signalId: string,
}

export interface UpdateIsSensorInit {
  type: typeof UPDATE_IS_SENSOR_INIT,
  objectId: string,
  signalId: string,
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
export type UpdateRegulatorSettingsAction = { type: typeof UPDATE_REGULATOR_SETTINGS, payload: RegulatorSettings, id: string };
export type RegulatorsStateActionsTypes = UpdateRegulatorSettingsAction;
//Thunk types


//======================
//screen-reducer
export type Events = {
  events?: {
    onClick?: (event: React.BaseSyntheticEvent) => void,
  },
};

export interface SpritePosition {
  x: number,
  y: number,
}

export interface SpriteMeta {
  id: string,
  description: string,
}

export interface Sprite {
  position: SpritePosition,
  meta: SpriteMeta,
}

export interface ValveSpec {
  status: "CLOSE" | "OPEN" | "MOVING",
  orientation?: "90",
}

export interface PipesColor {
  water: React.CSSProperties["color"],
  gas: React.CSSProperties["color"],
  oil: React.CSSProperties["color"],
  air: React.CSSProperties["color"],
  steam: React.CSSProperties["color"],
  smoke: React.CSSProperties["color"],
}

export interface PipeSpec {
  type: "water" | "gas" | "oil" | "air" | "steam" | "smoke",
  orientation: "horizontal" | "vertical" | "TL" | "TR" | "BL" | "BR",
  width?: number,
  height?: number,
}

export interface InformationFieldSpec {
  signalId: string,
}

export interface InformationBlockSpec {
  height: number,
  width: number,
  text: string,
}

export interface TankSpec {
  type: "boilerTop" | "boilerBottom" | "native",
  radius: number,
}

export type HmiSprite<T = ValveSpec | PipeSpec | TankSpec | InformationFieldSpec | InformationBlockSpec> = Sprite & {
  spec: T;
}

export interface Sprites {
  valves: {
    valveItems: HmiSprite<ValveSpec>[],
  }
  pipes: {
    pipesColor: PipesColor,
    pipeItems: HmiSprite<PipeSpec>[],
  }
  tanks: {
    tankItems: HmiSprite<TankSpec>[],
  }
  informationFields: {
    informationFieldsItems: HmiSprite<InformationFieldSpec>[],
  }
  informationBlocks: {
    informationBlockItems: HmiSprite<InformationBlockSpec>[],
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
export const UPDATE_SCREEN_SPRITES: "screen-reducer/UPDATE_SPRITES" = "screen-reducer/UPDATE_SPRITES";
export const UPDATE_SCREEN_SINGLE_SPRITE: "screen-reducer/UPDATE_SCREEN_SINGLE_SPRITE" = "screen-reducer/UPDATE_SCREEN_SINGLE_SPRITE";
//Action types
export interface UpdateScreenResolutionAction {
  type: typeof UPDATE_SCREEN_RESOLUTION,
  payload: Resolution,
}

export type UpdateScreenSpritesAction = {
  type: typeof UPDATE_SCREEN_SPRITES,
  payload: Sprites,
};
export type UpdateScreenSingleSpriteAction = {
  type: typeof UPDATE_SCREEN_SINGLE_SPRITE,
  payload: HmiSprite,
  spriteId: SpriteMeta["id"],
};
//All actions
export type ScreenActionTypes = UpdateScreenResolutionAction | UpdateScreenSpritesAction | UpdateScreenSingleSpriteAction;
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