import './App.css';
import Header from "./components/header/header";
import React from "react";
import {Route} from "react-router";
import {Switch} from "react-router";
import Login from "./components/login/login";

const App: React.FC<{}> = () => {
  return (
    <Switch>
      <Route path="/login" render={() => <Login/>}/>
      <Route path={"/"} render={() => <Header/>}/>
    </Switch>
  )
}

export default App;