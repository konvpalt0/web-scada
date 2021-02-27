import {DevelopmentActionTypes, DevelopmentState, DevThunk, UPDATE_RESPONSE, UpdateResponseAction} from "./types";
import {devAPI} from "../../../utilities/axiosApi/axios-api";

const initState: DevelopmentState = {
  response: {},
}

const developmentReducer = (state: DevelopmentState = initState, action: DevelopmentActionTypes) => {
  switch (action.type) {
    case UPDATE_RESPONSE:
      return({
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