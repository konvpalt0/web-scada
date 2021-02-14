//State types
export interface StateTotal {
  auth: StateAuthReducer,
}

export interface StateAuthReducer {
  email: string,
  password: string,
  rememberMe: boolean,
}

//Redux selectors
export interface ReduxSelectors {
  getAuth: (state: StateTotal) => StateAuthReducer,
}

//Redux reducer actions
export interface Action<ActionType, Data> {
  type: ActionType,
  data: Data,
}