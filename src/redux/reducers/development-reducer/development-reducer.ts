import {
  DevelopmentActionTypes,
  DevelopmentState,
  DevThunk,
  SensorsPayload, Sprites,
  UPDATE_RESPONSE,
  UpdateResponseAction
} from "../types";
import {devAPI, objectAPI} from "../../../utilities/axiosApi/axios-api";
import {Dispatch} from "redux";

const initState: DevelopmentState = {
  response: {},
}

const developmentReducer = (state: DevelopmentState = initState, action: DevelopmentActionTypes) => {
  switch (action.type) {
    case UPDATE_RESPONSE:
      return ({
        ...state,
        response: action.payload,
      })
    default:
      return state;
  }
}

export default developmentReducer

const updateResponse = (response: {}): UpdateResponseAction => ({type: UPDATE_RESPONSE, payload: response});

export const startObject = (objectId: number): DevThunk => async (dispatch: Dispatch<DevelopmentActionTypes>) => {
  const response = await devAPI.startObject(objectId);
  dispatch(updateResponse(response));
}
export const stopObject = (objectId: number): DevThunk => async (dispatch: Dispatch<DevelopmentActionTypes>) => {
  const response = await devAPI.stopObject(objectId);
  dispatch(updateResponse(response));
}
export const removeSensors = (objectId: number): DevThunk => async (dispatch: Dispatch<DevelopmentActionTypes>) => {
  const response = await devAPI.removeSensors(objectId);
  dispatch(updateResponse(response));
}
export const setSensors = (objectId: number, sensors: SensorsPayload["sensors"]): DevThunk => async (dispatch: Dispatch<DevelopmentActionTypes>) => {
  if (!Object.keys(sensors).length) {
    sensors = initSensors
  }
  const response = await devAPI.setObjectConfiguration({objectID: objectId, sensors: sensors});
  dispatch(updateResponse(response));
}
export const getObject = (objectId: string): DevThunk => async (dispatch: Dispatch<DevelopmentActionTypes>) => {
  const response = await objectAPI.getObjectState(objectId);
  dispatch(updateResponse(response));
}
export const setHMI = (objectId: number, hmi: Sprites): DevThunk => async (dispatch: Dispatch<DevelopmentActionTypes>) => {
  const response = await devAPI.setHMI({objectID: objectId, hmi: hmi});
  dispatch(updateResponse(response));
}
export const getHMI = (objectId: number): DevThunk => async (dispatch: Dispatch<DevelopmentActionTypes>) => {
  const response = await devAPI.getHMI(objectId);
  dispatch(updateResponse(response));
}
export const removeHMI = (objectId: number): DevThunk => async (dispatch: Dispatch<DevelopmentActionTypes>) => {
  const response = await devAPI.removeHMI(objectId);
  dispatch(updateResponse(response));
}

const initSensors: SensorsPayload["sensors"] = [
  {
    tag: "TT_7б",
    measure: "C°",
    min: 180,
    max: 200
  },
  {
    tag: "TT_3",
    measure: "C°",
    min: 70,
    max: 120
  },
];