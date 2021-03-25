import {
  Resolution,
  ScreenActionTypes,
  ScreenState,
  UPDATE_SCREEN_RESOLUTION,
  UpdateScreenResolutionAction
} from "../types";

const initState: ScreenState = {
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
      anglePipes: [
        {id: "10", x: 37, y: 35, connect: "TR", description: "gas"},//gas
        {id: "11", x: 26, y: 35, connect: "TL", description: "oxygen"},//oxygen
        {id: "12", x: 26, y: 3, connect: "BL", description: "co2"},//co2
        {id: "13", x: 33, y: 3, connect: "BR", description: "water"},//water
        {id: "14", x: 36, y: 13, connect: "BR", description: "steam"},//steam
      ],
      horizontalPipes: [
        {id: "100", x: 38, y: 35, width: 27, description: "gas"},//gas
        {id: "101", x: 26, y: 35, width: -25, description: "oxygen"},//oxygen
        {id: "102", x: 26, y: 3, width: -25, description: "co2"},//co2
        {id: "103", x: 34, y: 3, width: 31, description: "water"},//water
        {id: "104", x: 37, y: 13, width: 28, description: "steam"},//steam
      ],
      verticalPipes: [
        {id: "1001", x: 37, y: 35, height: -4, description: "gas"},//gas
        {id: "1002", x: 26, y: 35, height: -4, description: "oxygen"},//oxygen
        {id: "1003", x: 26, y: 4, height: 25, description: "co2"},//co2
        {id: "1004", x: 36, y: 14, height: 2, description: "steam"},//steam
        {id: "1005", x: 33, y: 4, height: 14, description: "water"},//water
        {id: "1006", x: 32, y: 16, height: 8, description: "boiler left"},//boiler_left
        {id: "1007", x: 37, y: 16, height: 8, description: "boiler right"},//boiler_right
      ],
    },
    informationFields: [
      //gas block
      {id: "10000", x: 54, y: 28, information: "T gas", description: "gas temperature"},//
      {id: "10002", x: 54, y: 30, information: "P gas", description: "gas pressure"},//
      {id: "10004", x: 54, y: 32, information: "Q gas", description: "gas consumption"},//
      //steam block
      {id: "10006", x: 54, y: 15, information: "T steam", description: "steam temperature"},//
      {id: "10008", x: 54, y: 17, information: "P steam", description: "steam pressure"},//
      {id: "10010", x: 54, y: 19, information: "Q steam", description: "steam consumption"},//
      //water block
      {id: "10012", x: 54, y: 5, information: "T water", description: "water temperature"},//
      {id: "10014", x: 54, y: 7, information: "P water", description: "water pressure"},//
      {id: "10016", x: 54, y: 9, information: "Q water", description: "water consumption"},//
      //co2 block
      {id: "10018", x: 4, y: 5, information: "RPM", description: "RPM flue gas ventilation"},//
      {id: "10020", x: 4, y: 7, information: "T flue gas", description: "flue gas temperature"},//
      //oxygen block
      {id: "10022", x: 4, y: 32, information: "RPM", description: "RPM oxygen ventilation"},//
      //burner block
      {id: "10024", x: 23, y: 29, information: "Underpressure", description: "Underpressure in burner"},//
      {id: "10026", x: 33, y: 29, information: "Flame", description: "Presence of flame in burner"},//
    ],
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
