import authReducer from "./reducers/auth-reducer";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";

const reducers = combineReducers({
    auth: authReducer,
  }
);

const upgradeCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, upgradeCompose(applyMiddleware(thunkMiddleWare)));

export {store};