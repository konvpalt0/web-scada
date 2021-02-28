import {
  GetObjectStateThunk,
  ObjectState,
  Resolution,
  ScreenActionTypes,
  ScreenState,
  UPDATE_OBJECT_STATE,
  UPDATE_SCREEN_RESOLUTION,
  UpdateObjectState,
  UpdateScreenResolutionAction
} from "./types";
import {objectAPI} from "../../../utilities/axiosApi/axios-api";

const initState: ScreenState = {
  resolution: {
    height: 480,
    width: 854,
  },
  sprites: {
    valves: [
      {id: 0, x: 51, y: 31, status: "OPEN"},//gas valve
      {id: 1, x: 47, y: 8, status: "CLOSE"},//steam valve
      {id: 2, x: 42, y: 2, status: "MOVING"},//water valve
    ],
    pipes: {
      anglePipes: [
        {id: 10, x: 37, y: 31, connect: "TR"},//gas
        {id: 11, x: 26, y: 31, connect: "TL"},//oxygen
        {id: 12, x: 26, y: 3, connect: "BL"},//co2
        {id: 13, x: 33, y: 2, connect: "BR"},//water
        {id: 14, x: 36, y: 8, connect: "BR"},//steam
      ],
      horizontalPipes: [
        {id: 100, x: 37, y: 31, width: 28},//gas
        {id: 101, x: 26, y: 31, width: -25},//oxygen
        {id: 102, x: 26, y: 3, width: -25},//co2
        {id: 103, x: 34, y: 2, width: 31},//water
        {id: 104, x: 37, y: 8, width: 28},//steam
      ],
      verticalPipes: [
        {id: 1001, x: 37, y: 31, height: -4},//gas
        {id: 1002, x: 26, y: 31, height: -4},//oxygen
        {id: 1003, x: 26, y: 4, height: 20},//co2
        {id: 1004, x: 36, y: 9, height: 2},//steam
        {id: 1005, x: 33, y: 3, height: 6},//water
        {id: 1006, x: 32, y: 11, height: 8},//boiler_left
        {id: 1007, x: 37, y: 11, height: 8},//boiler_right
      ],
    },
    informationFields: [

    ],
  },
  object: [],
}

const screenReducer = (state: ScreenState = initState, action:ScreenActionTypes): ScreenState => {
  switch (action.type) {
    case UPDATE_SCREEN_RESOLUTION:
      return ({
        ...state,
        resolution: action.payload,
      });
    case UPDATE_OBJECT_STATE:
      return ({
        ...state,
        object: action.payload,
      })
    default:
      return state;
  }
}

export default screenReducer;

//AC
export const updateScreenResolution = (newResolution: Resolution): UpdateScreenResolutionAction => ({type: UPDATE_SCREEN_RESOLUTION, payload: newResolution});
const updateObjectState = (newObjectState: ObjectState): UpdateObjectState => ({type: UPDATE_OBJECT_STATE, payload: newObjectState});
//THUNK
export const getSensorsData = (objectId: number): GetObjectStateThunk => async (dispatch) => {
  const response = await objectAPI.getObjectState(objectId);
  dispatch(updateObjectState(response));
}