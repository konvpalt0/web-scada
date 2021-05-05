import {
  DevelopmentActionTypes,
  DevelopmentState,
  SignalMeta, SetSensorsState,
  UPDATE_SENSORS_STATE,
  UpdateSensorsStateAction,
} from "../types";
import {initState as initScreenState} from "../screen-reducer/screen-reducer";

const initState: DevelopmentState = {
  hmiState: {
    ...initScreenState,
  },
  sensorsState: [],
}

const developmentReducer = (state: DevelopmentState = initState, action: DevelopmentActionTypes) => {
  switch (action.type) {
    case UPDATE_SENSORS_STATE: return ({
      ...state,
      sensorsState: action.payload,
    });
    default: return state;
  }
}

export default developmentReducer

export const updateSensorsState = (sensorsMeta: SignalMeta[]): UpdateSensorsStateAction => ({
  type: UPDATE_SENSORS_STATE,
  payload: sensorsMeta,
});

export const setSensorsMetaState = (sensorsMeta: SignalMeta[]): SetSensorsState => async (dispatch) => {
  //TODO server works
  const response = 1;
  if (response === 1) {
    dispatch(updateSensorsState(sensorsMeta));
  }
};