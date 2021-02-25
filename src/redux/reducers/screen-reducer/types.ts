//State types

export interface Resolution {
  width: number,
  height: number,
}

export interface ScreenState {
  resolution: Resolution,
}

//Const types
export const UPDATE_SCREEN_RESOLUTION: "screen-reducer/UPDATE_SCREEN_RESOLUTION" = "screen-reducer/UPDATE_SCREEN_RESOLUTION";
//Action types
export interface UpdateScreenResolutionAction {
  type: typeof UPDATE_SCREEN_RESOLUTION,
  payload: Resolution,
}
//Thunk types


export type ScreenActionTypes = UpdateScreenResolutionAction;