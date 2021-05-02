import systemReducer from "./reducers/system-reducer/system-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import screenReducer from "./reducers/screen-reducer/screen-reducer";
import developmentReducer from "./reducers/development-reducer/development-reducer";
import objectsStateReducer from "./reducers/objects-state-reducer/objects-state-reducer";
import alarmReducer from "./reducers/alarm-reducer/alarm-reducer";
import regulatorsReducer from "./reducers/regulators-reducer/regulators-reducer";

const rootReducer = combineReducers({
    system: systemReducer,
    screen: screenReducer,
    development: developmentReducer,
    objects: objectsStateReducer,
    regulators: regulatorsReducer,
    alarms: alarmReducer,
  }
);
export type RootState = ReturnType<typeof rootReducer>;
// @ts-ignore
const upgradeCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, upgradeCompose(applyMiddleware(thunkMiddleWare)));

export {store};

