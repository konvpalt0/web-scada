import {
  Resolution,
  ScreenActionTypes,
  ScreenState,
  UPDATE_SCREEN_RESOLUTION,
  UpdateScreenResolutionAction
} from "./types";

const initState: ScreenState = {
  resolution: {
    height: 480,
    width: 854,
  },
}

const screenReducer = (state: ScreenState = initState, action:ScreenActionTypes): ScreenState => {
  switch (action.type) {
    case UPDATE_SCREEN_RESOLUTION:
      return ({
        ...state,
        resolution: action.payload,
      });
    default:
      return state;
  }
}

export default screenReducer;

//AC
export const updateScreenResolution = (newResolution: Resolution): UpdateScreenResolutionAction => ({type: UPDATE_SCREEN_RESOLUTION, payload: newResolution});
