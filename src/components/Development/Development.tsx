import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import gStyle from "../../GlobalStyle.module.css";
import Menu from "../WorkSpace/Menu/Menu";
import {Route, Switch} from "react-router";
import Hmi from "./Hmi/Hmi";
import SignalList from "./SignalList/SignalList";

type OwnProps = {};
type DispatchProps = {};
type StateProps = {};
type Props = OwnProps & DispatchProps & StateProps;

const Development: React.FC<Props> = () => {
  return (
    <div>
      <div>
        <Menu menuItems={[
          {to: "/development/hmi", name: "HMI"},
          {to: "/development/signalList", name: "SignalList"},
        ]}/>
      </div>
      <div className={gStyle.block}>
        <Switch>
          <Route path={"/development/hmi"} render={() => <Hmi/>}/>
          <Route path={"/development/signalList"} render={() => <SignalList/>}/>
        </Switch>
      </div>
    </div>
  )
}

const mstp = (state: RootState): StateProps => {
  return {};
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {

})(Development);

/*const defaultTextArea: Sprites = {
  valves: [
    {id: "0", x: 51, y: 31, description: "gas valve"},//gas valve
    {id: "1", x: 47, y: 8, description: "steam valve"},//steam valve
    {id: "2", x: 42, y: 2, description: "water valve"},//water valve
  ],
  pipes: {
    pipesColor: {
      air: "#ffffff",
      gas: "#ffe13e",
      oil: "#373a36",
      steam: "#c7d5e0",
      water: "#d4f1f9",
      smoke: "#738276",
    },
    pipeItems: [
      //anglePipes
      {id: "10", x: 37, y: 35, orientation: "TR", description: "gas", type: "gas"},//gas
      {id: "11", x: 26, y: 35, orientation: "TL", description: "oxygen", type: "air"},//oxygen
      {id: "12", x: 26, y: 3, orientation: "BL", description: "co2", type: "smoke"},//co2
      {id: "13", x: 33, y: 3, orientation: "BR", description: "water", type: "water"},//water
      {id: "14", x: 36, y: 13, orientation: "BR", description: "steam", type: "steam"},//steam
      //horizontalPipes
      {id: "100", x: 38, y: 35, orientation: "horizontal", width: 27, description: "gas", type: "gas"},//gas
      {id: "101", x: 26, y: 35, orientation: "horizontal", width: -25, description: "oxygen", type: "air"},//oxygen
      {id: "102", x: 26, y: 3, orientation: "horizontal", width: -25, description: "co2", type: "smoke"},//co2
      {id: "103", x: 34, y: 3, orientation: "horizontal", width: 31, description: "water", type: "water"},//water
      {id: "104", x: 37, y: 13, orientation: "horizontal", width: 28, description: "steam", type: "steam"},//steam
      //verticalPipes
      {id: "1001", x: 37, y: 35, orientation: "vertical", height: -4, description: "gas", type: "gas"},//gas
      {id: "1002", x: 26, y: 35, orientation: "vertical", height: -4, description: "oxygen", type: "air"},//oxygen
      {id: "1003", x: 26, y: 4, orientation: "vertical", height: 25, description: "co2", type: "smoke"},//co2
      {id: "1004", x: 36, y: 14, orientation: "vertical", height: 2, description: "steam", type: "steam"},//steam
      {id: "1005", x: 33, y: 4, orientation: "vertical", height: 14, description: "water", type: "water"},//water
      {id: "1006", x: 32, y: 16, orientation: "vertical", height: 8, description: "boiler left", type: "water"},//boiler_left
      {id: "1007", x: 37, y: 16, orientation: "vertical", height: 8, description: "boiler right", type: "water"},//boiler_right
    ],
  },
  tanks: {
    tankItems: [
      {id: "99", x: 35, y: 24, type: "boilerBottom", description: "water boiler", radius: 3},
      {id: "98", x: 35, y: 16, type: "boilerTop", description: "water boiler", radius: 3},
    ],
  },
};*/

/*
const defaultSensors: Array<SensorMeta> = [
  //valves
  {sensorTag: "0", measure: "дискр", min: 0, max: 1, minAlarm: 0, maxAlarm: 1, minWarning: 0, maxWarning: 1, x: 0, y: 0, information}, //gas valve
  {sensorTag: "1", measure: "дискр", min: 0, max: 1,}, //steam valve
  {sensorTag: "2", measure: "дискр", min: 0, max: 1,}, //water valve
  //gas block
  {sensorTag: "10001", measure: "C°", min: 0, max: 100,}, //gas temperature
  {sensorTag: "10003", measure: "КПа", min: 47.5, max: 52.5,}, //gas pressure
  {sensorTag: "10005", measure: "м3/ч", min: 130, max: 200,}, //gas consumption
  //steam block
  {sensorTag: "10007", measure: "C°", min: 185, max: 194,}, //steam temperature
  {sensorTag: "10009", measure: "МПа", min: 0, max: 1.3,}, //steam pressure
  {sensorTag: "10011", measure: "м3/ч", min: 100, max: 150,}, //steam consumption
  //water block
  {sensorTag: "10013", measure: "C°", min: 15, max: 100,},  //water temperature
  {sensorTag: "10015", measure: "МПа", min: 0.5, max: 0.8,}, //water pressure
  {sensorTag: "10017", measure: "м3/ч", min: 0, max: 17,}, //water consumption
  //co2 block
  {sensorTag: "10021", measure: "C°", min: 180, max: 200,},  //co2 temperature
  {sensorTag: "10019", measure: "об/мин", min: 0, max: 900,}, //RPM flue gas ventilation
  //oxygen block
  {sensorTag: "10023", measure: "об/мин", min: 0, max: 900,}, //RPM flue gas ventilation
  //burner block
  {sensorTag: "10025", measure: "Па", min: 633, max: 700,}, //Underpressure in burner
  {sensorTag: "10027", measure: "дискр", min: 0, max: 1,}, //Presence of flame in burner
];*/
