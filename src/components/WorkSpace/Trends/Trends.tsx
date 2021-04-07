import React, {useEffect} from "react";
import style from "../Screen/Screen.module.css";
import {mapResolutionToCSS} from "../Screen/Screen";
import Chart from "./Chart/Chart";
import {connect} from "react-redux";
import {select} from "../../../redux/selectors/redux-selectors";
import {RootState} from "../../../redux/store";
import {
  getObjectState,
  getSensorState, initSensorState,
  updateSensor
} from "../../../redux/reducers/objects-state-reducer/objects-state-reducer";
import {Resolution, SensorData, SensorState} from "../../../redux/reducers/types";
import {RouteComponentProps} from "react-router";

interface OwnProps {
  resolution: Resolution,
}

interface StateProps {
  objectId: string,
  sensorState: (objectId: string) => (sensorId: string) => SensorState,
  selectIsSensorInit: (objectId: string) => (sensorId: string) => boolean,
}

interface DispatchProps {
  updateSensor: (newSensorState: SensorData, objectId: string, sensorId: string) => void,
  getObjectState: (objectId: string) => void,
  getSensorState: (objectId: string, sensorId: string) => void,
  initSensorState: (objectId: string, sensorId: string) => void,
}

interface Match {
  sensorId: string,
}

type Props = RouteComponentProps<Match> & OwnProps & DispatchProps & StateProps;

const Trends: React.FC<Props> = ({
                                   resolution,
                                   updateSensor,
                                   sensorState,
                                   getObjectState,
                                   getSensorState,
                                   initSensorState,
                                   selectIsSensorInit,
                                   objectId,
                                   ...props
                                 }) => {
  const sensorId = props.match.params.sensorId;
  const isSensorInit = selectIsSensorInit(objectId)(sensorId);
  const sensorData = sensorState(objectId)(sensorId);
  //initialisation history for plot
  useEffect(() => {
    initSensorState(objectId, sensorId);
  }, [objectId, sensorId, initSensorState])
  //request new data for plot
  useEffect(() => {
    if (isSensorInit) {
      setTimeout(() => {
        updateSensor({date: String(new Date()), value: "" + Math.random()}, objectId, sensorId);
        //getSensorState(objectId, sensorId);
      }, 2000);
    }
  }, [getSensorState, sensorData.sensorState, isSensorInit, objectId, sensorId]);

  return (
    <div className={style.grid} style={mapResolutionToCSS(resolution)}>
      <div>{sensorId}</div>
      <Chart data={sensorData.sensorState} xStart={1} yStart={1}/>
    </div>
  )
}

const mstp = (state: RootState): StateProps => ({
  objectId: select.getCurrentObject(state),
  sensorState: select.getSensorState(state),
  selectIsSensorInit: select.getIsSensorInit(state),
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
  updateSensor,
  getObjectState,
  getSensorState,
  initSensorState,
})(Trends);