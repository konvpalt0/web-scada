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
        <Route path={"/:section"} render={(props) => <Header {...props}/>}/>
      </Switch>
      <Route path={"/workspace/:section"} render={(props) => <WorkSpace {...props}/>}/>
      <Route path={"/development/:section"} render={(props) => <Development {...props}/>}/>
    </>
  )
}

export default compose(
  withInit,
)(App);