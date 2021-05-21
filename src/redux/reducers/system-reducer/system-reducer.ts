import {authAPI} from "../../../utilities/axiosApi/axios-api";
import {
  Initialisation,
  Login,
  Session,
  SystemActionTypes,
  SystemState,
  UPDATE_CURRENT_OBJECT,
  UPDATE_SESSION,
  UPDATE_SYSTEM_INIT,
  UpdateCurrentObject,
  UpdateSessionAction,
  UpdateSystemInit
} from "../types";


const initState: SystemState = {
  isInit: false,
  currentObject: "null",
  session: {
    loggedIn: false,
    session: "",
    userName: "",
    ownObjects: [
      {objectId: "1"},
    ],
  },
}

const systemReducer = (state = initState, action: SystemActionTypes): SystemState => {
  switch (action.type) {
    case UPDATE_SESSION:
      return {
        ...state,
        session: {...action.payload},
      }
    case UPDATE_SYSTEM_INIT:
      return {
        ...state,
        isInit: action.payload,
      }
    case UPDATE_CURRENT_OBJECT:
      return {
        ...state,
        currentObject: action.payload,
      }
    default:
      return state
  }
}

export default systemReducer;

//AC
export const updateSession = (newSession: Session): UpdateSessionAction => ({
  type: UPDATE_SESSION,
  payload: newSession
});
export const updateSystemInit = (initStatus: boolean): UpdateSystemInit => ({
  type: UPDATE_SYSTEM_INIT,
  payload: initStatus,
});
export const updateCurrentObject = (newCurrentObject: string): UpdateCurrentObject => ({
  type: UPDATE_CURRENT_OBJECT,
  payload: newCurrentObject,
});
//THUNK C
export const login = (email: string, password: string): Login => async (dispatch) => {
  const response = await authAPI.login(email, password);
  if (response > 0) {
    console.log(`Your id is ${response}`);
    const newSession: Session = {
      loggedIn: true,
      userName: email,
      session: "1",
      ownObjects: [{objectId: "1"}],
    }
    dispatch(updateSession(newSession));
  } else console.log("Incorrect password or email");
};
export const initialisation = (): Initialisation => async (dispatch) => {
  dispatch(updateCurrentObject("1"));
  dispatch(updateSystemInit(true));
}