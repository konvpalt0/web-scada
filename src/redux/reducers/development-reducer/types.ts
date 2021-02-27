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
export type DevThunk = ThunkAction<Promise<void>, DevelopmentState, unknown, UpdateResponseAction>;

export type DevelopmentActionTypes = UpdateResponseAction;