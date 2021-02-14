import {authAPI} from "../../utilities/axiosApi/axios-api";
import {Action, StateAuthReducer} from "../../utilities/types/types";

const SET_EMAIL: "auth-reducer/SET_EMAIL" = "auth-reducer/SET_EMAIL";
const SET_PASSWORD: "auth-reducer/SET_PASSWORD" = "auth-reducer/SET_PASSWORD";
const SET_CHECKBOX: "auth-reducer/SET_CHECKBOX" = "auth-reducer/SET_CHECKBOX";

const initState = {
  email: "",
  password: "",
  rememberMe: false,
}

const authReducer = (state: StateAuthReducer = initState, action:Action<string, any>): StateAuthReducer => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.data,
      }
    case SET_PASSWORD:
      return {
        ...state,
        password: action.data,
      }
    case SET_CHECKBOX:
      return {
        ...state,
        rememberMe: action.data,
      }
    default:
      return state
  }
}

export default authReducer;

//AC
export const setEmail = (email: string): Action<typeof SET_EMAIL, string> => ({type: SET_EMAIL, data: email});
export const setPassword = (password: string): Action<typeof SET_PASSWORD, string> => ({
  type: SET_PASSWORD,
  data: password
});
export const setCheckbox = (value: boolean): Action<typeof SET_CHECKBOX, boolean> => ({
  type: SET_CHECKBOX,
  data: value
});

//THUNK C
//TODO fix any
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response > 0) console.log(`Your id is ${response}`);
  else console.log("Incorrect password or email");
};
