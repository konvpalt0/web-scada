import {authAPI} from "../../../utilities/axiosApi/axios-api";
import {LoginType, SystemActionTypes, SystemState, UPDATE_SESSION} from "./types";
import {Dispatch} from "redux";


const initState: SystemState = {
  loggedIn: false,
  session: "",
  userName: "",
}

const systemReducer = (state= initState, action: SystemActionTypes): SystemState => {
  switch (action.type) {
    case UPDATE_SESSION:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default systemReducer;

//AC
export const updateSession = (newSession: SystemState):SystemActionTypes => ({type:UPDATE_SESSION, payload: newSession})

//THUNK C
export const login = (email: string, password: string, rememberMe: boolean): LoginType => async (dispatch: Dispatch<SystemActionTypes>) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response > 0) {
    console.log(`Your id is ${response}`);
    const newSession: SystemState = {
      loggedIn: true,
      userName: email,
      session: "1",
    }
    dispatch(updateSession(newSession));
  }
  else console.log("Incorrect password or email");
};
