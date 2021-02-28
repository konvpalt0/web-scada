import {
  DevelopmentActionTypes,
  DevelopmentState,
  DevThunk,
  SensorsPayload,
  UPDATE_RESPONSE,
  UpdateResponseAction
} from "./types";
import {devAPI, objectAPI} from "../../../utilities/axiosApi/axios-api";

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

export const startObject = (objectId: number): DevThunk => async (dispatch) => {
  const response = await devAPI.startObject(objectId);
  dispatch(updateResponse(response));
}
export const stopObject = (objectId: number): DevThunk => async (dispatch) => {
  const response = await devAPI.stopObject(objectId);
  dispatch(updateResponse(response));
}
export const removeSensors = (objectId: number): DevThunk => async (dispatch) => {
  const response = await devAPI.removeSensors(objectId);
  dispatch(updateResponse(response));
}
export const setSensors = (objectId: number, sensors: SensorsPayload["sensors"]): DevThunk => async (dispatch) => {
  console.log(sensors);
  if (!Object.keys(sensors).length) {
    sensors = initSensors
  }
  console.log(sensors);
  const response = await devAPI.setObjectConfiguration({objectID: objectId, sensors: sensors});
  dispatch(updateResponse(response));
}
export const getObject = (objectId: number): DevThunk => async (dispatch) => {
  const response = await objectAPI.getObjectState(objectId);
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