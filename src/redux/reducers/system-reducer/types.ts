//State types
import {ThunkAction} from "redux-thunk";

export interface SystemState {
  loggedIn: boolean,
  session: string,
  userName: string,
}
//Const types
export const UPDATE_SESSION: "system-reducer/UPDATE_SESSION" = "system-reducer/UPDATE_SESSION";
//Action types
export interface UpdateSessionAction {
  type: typeof UPDATE_SESSION,
  payload: SystemState,
}
//Thunk types
export type LoginType = ThunkAction<Promise<void>, SystemState, unknown, UpdateSessionAction>;

export type SystemActionTypes = UpdateSessionAction;