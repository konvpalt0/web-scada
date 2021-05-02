import {
  Resolution,
  ScreenActionTypes,
  ScreenState,
  UPDATE_SCREEN_RESOLUTION,
  UpdateScreenResolutionAction
} from "../types";

export const initState: ScreenState = {
  resolution: {
    height: 480,
    width: 854,
  },
  sprites: {
    valves: [
      {id: "0", x: 51, y: 35, description: "gas valve"},//gas valve
      {id: "1", x: 47, y: 13, description: "steam valve"},//steam valve
      {id: "2", x: 42, y: 3, description: "water valve"},//water valve
    ],
    pipes: {
      pipesColor: {
        air: "#ffffff",
        gas: "#ffe13e",
        oil: "#373a36",
        steam: "#c7d5e0",
        water: "#00c7ff",
        smoke: "#738276",
      },
      pipeItems: [
        //anglePipes
        {id: "10", x: 37, y: 35, orientation: "TR", description: "gas", type: "gas"},//gas
        {id: "11", x: 26, y: 35, orientation: "TL", description: "oxygen", type: "air"},//oxygen
        {id: "12", x: 26, y: 3, orientation: "BL", description: "co2", type: "smoke"},//co2
        {id: "13", x: 33, y: 3, orientation: "BR", description: "water", type: "water"},//water
        {id: "14", x: 36, y: 13, orientation: "BR", description: "steam", type: "steam"},//steam
        //horizontalPipes
        {id: "100", x: 38, y: 35, orientation: "horizontal", width: 27, description: "gas", type: "gas"},//gas
        {id: "101", x: 26, y: 35, orientation: "horizontal", width: -25, description: "oxygen", type: "air"},//oxygen
        {id: "102", x: 26, y: 3, orientation: "horizontal", width: -25, description: "co2", type: "smoke"},//co2
        {id: "103", x: 34, y: 3, orientation: "horizontal", width: 31, description: "water", type: "water"},//water
        {id: "104", x: 37, y: 13, orientation: "horizontal", width: 28, description: "steam", type: "steam"},//steam
        //verticalPipes
        {id: "1001", x: 37, y: 35, orientation: "vertical", height: -4, description: "gas", type: "gas"},//gas
        {id: "1002", x: 26, y: 35, orientation: "vertical", height: -4, description: "oxygen", type: "air"},//oxygen
        {id: "1003", x: 26, y: 4, orientation: "vertical", height: 25, description: "co2", type: "smoke"},//co2
        {id: "1004", x: 36, y: 14, orientation: "vertical", height: 2, description: "steam", type: "steam"},//steam
        {id: "1005", x: 33, y: 4, orientation: "vertical", height: 14, description: "water", type: "water"},//water
        {id: "1006", x: 32, y: 16, orientation: "vertical", height: 8, description: "boiler left", type: "water"},//boiler_left
        {id: "1007", x: 37, y: 16, orientation: "vertical", height: 8, description: "boiler right", type: "water"},//boiler_right
      ],
    },
    tanks: {
      tankItems: [
        {id: "99", x: 35, y: 24, type: "boilerBottom", description: "water boiler", radius: 3},
        {id: "98", x: 35, y: 16, type: "boilerTop", description: "water boiler", radius: 3},
      ],
    },
  },
}

const screenReducer = (state: ScreenState = initState, action: ScreenActionTypes): ScreenState => {
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
export const updateScreenResolution = (newResolution: Resolution): UpdateScreenResolutionAction => ({
  type: UPDATE_SCREEN_RESOLUTION,
  payload: newResolution
});
