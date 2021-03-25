import './App.css';
import Header from "./components/Header/Header";
import React from "react";
import {Route} from "react-router";
import {Switch} from "react-router";
import Login from "./components/Login/Login";
import WorkSpace from "./components/WorkSpace/WorkSpace";
import Development from "./components/Development/Development";
import {compose} from "redux";
import withInit from "./utilities/hoc/withInit";

const App: React.FC<{}> = () => {
  return (
    <>
      <Switch>
        <Route path="/login" render={() => <Login/>}/>
        <Route path={"/"} render={() => <Header/>}/>
      </Switch>
      <Route path={"/workspace"} render={() => <WorkSpace/>}/>
      <Route path={"/development"} render={() => <Development/>}/>
    </>
  )
}

export default compose(
  withInit,
)(App);