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
      {id: 0, x: 51, y: 35, status: "OPEN", description: "gas valve"},//gas valve
      {id: 1, x: 47, y: 13, status: "CLOSE", description: "steam valve"},//steam valve
      {id: 2, x: 42, y: 3, status: "MOVING", description: "water valve"},//water valve
    ],
    pipes: {
      anglePipes: [
        {id: 10, x: 37, y: 35, connect: "TR", description: "gas"},//gas
        {id: 11, x: 26, y: 35, connect: "TL", description: "oxygen"},//oxygen
        {id: 12, x: 26, y: 3, connect: "BL", description: "co2"},//co2
        {id: 13, x: 33, y: 3, connect: "BR", description: "water"},//water
        {id: 14, x: 36, y: 13, connect: "BR", description: "steam"},//steam
      ],
      horizontalPipes: [
        {id: 100, x: 38, y: 35, width: 27, description: "gas"},//gas
        {id: 101, x: 26, y: 35, width: -25, description: "oxygen"},//oxygen
        {id: 102, x: 26, y: 3, width: -25, description: "co2"},//co2
        {id: 103, x: 34, y: 3, width: 31, description: "water"},//water
        {id: 104, x: 37, y: 13, width: 28, description: "steam"},//steam
      ],
      verticalPipes: [
        {id: 1001, x: 37, y: 35, height: -4, description: "gas"},//gas
        {id: 1002, x: 26, y: 35, height: -4, description: "oxygen"},//oxygen
        {id: 1003, x: 26, y: 4, height: 25, description: "co2"},//co2
        {id: 1004, x: 36, y: 14, height: 2, description: "steam"},//steam
        {id: 1005, x: 33, y: 4, height: 14, description: "water"},//water
        {id: 1006, x: 32, y: 16, height: 8, description: "boiler left"},//boiler_left
        {id: 1007, x: 37, y: 16, height: 8, description: "boiler right"},//boiler_right
      ],
    },
    informationFields: [
      //gas block
      {id: 10004, x: 54, y: 28, information: "T gas", description: "gas temperature"},//
      {id: 10005, x: 58, y: 28, information: "50 C0", description: "value gas temperature"},//

      {id: 10002, x: 54, y: 30, information: "P gas", description: "gas pressure"},//
      {id: 10003, x: 58, y: 30, information: "50 kPa", description: "value gas pressure"},//

      {id: 10000, x: 54, y: 32, information: "Q gas", description: "gas consumption"},//
      {id: 10001, x: 58, y: 32, information: "50 m3/h", description: "value gas consumption"},//

      //steam block
      {id: 10010, x: 54, y: 15, information: "T steam", description: "steam temperature"},//
      {id: 10011, x: 58, y: 15, information: "50 C0", description: "value steam temperature"},//

      {id: 10008, x: 54, y: 17, information: "P steam", description: "steam pressure"},//
      {id: 10009, x: 58, y: 17, information: "50 kPa", description: "value steam pressure"},//

      {id: 10006, x: 54, y: 19, information: "Q steam", description: "steam consumption"},//
      {id: 10007, x: 58, y: 19, information: "50 m3/h", description: "value steam consumption"},//

      //water block
      {id: 10012, x: 54, y: 5, information: "T water", description: "water temperature"},//
      {id: 10013, x: 58, y: 5, information: "50 C0", description: "value water temperature"},//

      {id: 10014, x: 54, y: 7, information: "P water", description: "water pressure"},//
      {id: 10015, x: 58, y: 7, information: "50 kPa", description: "value water pressure"},//

      {id: 10016, x: 54, y: 9, information: "Q water", description: "water consumption"},//
      {id: 10017, x: 58, y: 9, information: "50 m3/h", description: "value water consumption"},//

      //co2 block
      {id: 10018, x: 4, y: 5, information: "RPM", description: "RPM flue gas ventilation"},//
      {id: 10019, x: 8, y: 5, information: "700", description: "value RPM flue gas ventilator"},//

      {id: 10020, x: 4, y: 7, information: "T flue gas", description: "flue gas temperature"},//
      {id: 10021, x: 8, y: 7, information: "50 C0", description: "value flue gas temperature"},//

      //oxygen block
      {id: 10022, x: 4, y: 32, information: "RPM", description: "RPM oxygen ventilation"},//
      {id: 10023, x: 8, y: 32, information: "700", description: "value RPM oxygen ventilator"},//

      //burner block
      {id: 10024, x: 23, y: 29, information: "Underpressure", description: "Underpressure in burner"},//
      {id: 10025, x: 27, y: 29, information: "10", description: "value underpressure in burner"},//

      {id: 10026, x: 33, y: 29, information: "Flame", description: "Presence of flame in burner"},//
      {id: 10027, x: 37, y: 29, information: "online", description: "value of presence of flame in burner"},//
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