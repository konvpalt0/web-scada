//State types
import {ThunkAction} from "redux-thunk";
import {DevelopmentState, UpdateResponseAction} from "../development-reducer/types";

interface Position {
  x: number,
  y: number,
  id: number,
}

export interface Valves extends Position {
  status: "CLOSE" | "OPEN" | "MOVING",
}

export interface HorizontalPipes extends Position {
  width : number,
}
export interface VerticalPipes extends Position {
  height : number,
}
export interface AnglePipes extends Position {
  connect : "TL" | "TR" | "BL" | "BR",
}

export interface InformationFields extends Position {
  information: string,
}

export interface Sprites {
  valves: Array<Valves>,
  pipes: {
    horizontalPipes: Array<HorizontalPipes>,
    verticalPipes: Array<VerticalPipes>,
    anglePipes: Array<AnglePipes>,
  }
  informationFields: Array<InformationFields>,
}
export interface Resolution {
  width: number,
  height: number,
}

export interface ObjectItem {
  tag: string,
  value: number,
}
export interface ObjectState extends Array<ObjectItem>{}

export interface ScreenState {
  resolution: Resolution,
  sprites: Sprites,
  object: ObjectState,
}

//Const types
export const UPDATE_SCREEN_RESOLUTION: "screen-reducer/UPDATE_SCREEN_RESOLUTION" = "screen-reducer/UPDATE_SCREEN_RESOLUTION";
export const UPDATE_OBJECT_STATE: "screen-reducer/UPDATE_OBJECT_STATE" = "screen-reducer/UPDATE_OBJECT_STATE";
//Action types
export interface UpdateScreenResolutionAction {
  type: typeof UPDATE_SCREEN_RESOLUTION,
  payload: Resolution,
}
export interface UpdateObjectState {
  type: typeof UPDATE_OBJECT_STATE,
  payload: ObjectState,
}

//Thunk types
export type GetObjectStateThunk = ThunkAction<Promise<void>, DevelopmentState, unknown, UpdateObjectState>;

export type ScreenActionTypes = UpdateScreenResolutionAction | UpdateObjectState;