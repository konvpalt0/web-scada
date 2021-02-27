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
  sprites: {
    valves: [
      {id: 0, x: 51, y: 31, status: "OPEN"},
      {id: 1, x: 55, y: 6, status: "CLOSE"},
      {id: 2, x: 50, y: 2, status: "MOVING"},
    ],
    pipes: {
      anglePipes: [
        {id: 10, x: 37, y: 31, connect: "TR"},
        {id: 11, x: 26, y: 31, connect: "TL"},
        {id: 12, x: 26, y: 3, connect: "BL"},
        {id: 13, x: 41, y: 2, connect: "BR"},
        {id: 14, x: 44, y: 6, connect: "BR"},
      ],
      horizontalPipes: [
        {id: 100, x: 37, y: 31, width: 26},
        {id: 101, x: 26, y: 31, width: -25},
        {id: 102, x: 26, y: 3, width: -25},
        {id: 103, x: 42, y: 2, width: 21},
        {id: 104, x: 45, y: 6, width: 18},
      ],
      verticalPipes: [
        {id: 1001, x: 37, y: 31, height: -4},
        {id: 1002, x: 26, y: 31, height: -4},
        {id: 1003, x: 26, y: 4, height: 20},
        {id: 1004, x: 44, y: 7, height: 2},
        {id: 1005, x: 41, y: 3, height: 5},
        {id: 1006, x: 40, y: 10, height: 8},
        {id: 1007, x: 45, y: 10, height: 8},
      ],
    },
    informationFields: [

    ],
  }
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
