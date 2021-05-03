import React from "react";
import style from "./Screen.module.css";
import Valve from "./Drawing/Valve/Valve";
import {
  ObjectState,
  Resolution,
  Sprites,
} from "../../../redux/reducers/types";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {select} from "../../../redux/selectors/redux-selectors";
import Rectangle from "./Drawing/Rectangle/Reactangle";
import DoubleInformationField from "./Drawing/InformationField/DoubleInformationField";
import Pipe from "./Pipes/Pipe";
import Tank from "./Drawing/Tank/Tank";

type OwnProps = {
  resolution: Resolution;
};
type StateProps = {
  sprites: Sprites,
  objectId: string,
  selectObjectState: (objectId: string) => ObjectState,
}
type DispatchProps = {}
type Props = OwnProps & StateProps & DispatchProps;

const Screen: React.FC<Props> = ({resolution, sprites, selectObjectState, objectId}) => {
  const objectState = selectObjectState(objectId);
  const pipesColor = sprites.pipes.pipesColor;
  return (
    <div className={style.grid} style={mapResolutionToCSS(resolution)}>
      {sprites.pipes.pipeItems.map(pipe => <Pipe key={pipe.id} {...pipe} color={pipesColor[pipe.type]}/>)}
      {objectState.sensors.map(field => <DoubleInformationField key={field.meta.sensorTag} meta={field.meta}
                                                                data={field.sensorState[0]}/>)}
      {sprites.valves.map(valve => <Valve key={valve.id} x={valve.x} y={valve.y} status={"CLOSE"}/>)}
      {sprites.tanks.tankItems.map(tank => <Tank key={tank.id} {...tank}/>)}
      <Rectangle width={20} height={5} x={22} y={28}/>
    </div>
  )
}

const mstp = (state: RootState): StateProps => ({
  sprites: select.getSprites(state),
  objectId: select.getCurrentObject(state),
  selectObjectState: select.getObjectState(state),
})

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {})(Screen);

export const mapResolutionToCSS = (resolution: Resolution): React.CSSProperties => {
  return {
    width: resolution.width,
    height: resolution.height,
  }
};
