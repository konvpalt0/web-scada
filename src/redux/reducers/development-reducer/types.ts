//State types
import {ThunkAction} from "redux-thunk";

export interface DevelopmentState {
  response: {},
}

//Const types
export const UPDATE_RESPONSE: "development-reducer/UPDATE_RESPONSE" = "development-reducer/UPDATE_RESPONSE";
//Action types
export interface UpdateResponseAction {
  type: typeof UPDATE_RESPONSE,
  payload: DevelopmentState["response"],
}
//Thunk types
export interface Sensor {
  tag: string,
  measure: "МПа" | "мм" | "C°" | "%" | "м3/ч" | "Па" | "КПа" | "дискр",
  min: number,
  max: number,
}
export interface SensorsPayload {
  objectID: number,
  sensors: Array<Sensor>
}

export type DevThunk = ThunkAction<Promise<void>, DevelopmentState, unknown, UpdateResponseAction>;

export type DevelopmentActionTypes = UpdateResponseAction;