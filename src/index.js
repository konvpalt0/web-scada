import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import changeBrightness from "./utilities/commonFunctions/changeBrightness";
import {MainControlEmu, ObjectEmu, PiControllerEmu} from "./utilities/server-emulator/level_emulator/level-emulator";

const rerender = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(() => rerender(store));
window.changeColor = changeBrightness;
rerender(store);

window.tObj = new ObjectEmu(10);
window.tReg = new PiControllerEmu();
window.tMain = new MainControlEmu([{object: window.tObj, regulator: window.tReg}]);