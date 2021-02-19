import systemReducer from "./reducers/system-reducer/system-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";

const rootReducer = combineReducers({
    system: systemReducer,
  }
);
export type RootState = ReturnType<typeof rootReducer>;
// @ts-ignore
const upgradeCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, upgradeCompose(applyMiddleware(thunkMiddleWare)));

export {store};

