import systemReducer from "./reducers/system-reducer/system-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import screenReducer from "./reducers/screen-reducer/screen-reducer";

const rootReducer = combineReducers({
    system: systemReducer,
    screen: screenReducer,
  }
);
export type RootState = ReturnType<typeof rootReducer>;
// @ts-ignore
const upgradeCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, upgradeCompose(applyMiddleware(thunkMiddleWare)));

export {store};

