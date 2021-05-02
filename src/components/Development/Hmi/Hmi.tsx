import React from "react";
import style from "../../WorkSpace/Screen/Screen.module.css";
import Pipe from "../../WorkSpace/Screen/Pipes/Pipe";
import DoubleInformationField from "../../WorkSpace/Screen/Drawing/InformationField/DoubleInformationField";
import Valve from "../../WorkSpace/Screen/Drawing/Valve/Valve";
import Tank from "../../WorkSpace/Screen/Drawing/Tank/Tank";
import Rectangle from "../../WorkSpace/Screen/Drawing/Rectangle/Reactangle";
import {mapResolutionToCSS} from "../../WorkSpace/Screen/Screen";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {ObjectState, ScreenState} from "../../../redux/reducers/types";
import {select} from "../../../redux/selectors/redux-selectors";
import Cell from "../../WorkSpace/Screen/Cell/Cell";


type OwnProps = {};
type StateProps = {
  hmi: ScreenState,
  objectState: ObjectState,
};
type DispatchProps = {};
type Props = OwnProps & StateProps & DispatchProps;

const field: Array<{x: number, y: number}> = [];
for (let i = 1; i <= 64; i++)
  for (let j = 1; j <= 36; j++)
    field.push({x: i,y: j});

const Hmi: React.FC<Props> = ({hmi, objectState}) => {
  const resolution = hmi.resolution;
  const sprites = hmi.sprites;
  const pipesColor = hmi.sprites.pipes.pipesColor;
  return (
    <div>
      <div className={style.grid} style={mapResolutionToCSS(resolution)}>
        {field.map(cell => <Cell key={cell.x*100+cell.y} column={cell.x} row={cell.y}/>)}
        {sprites.pipes.pipeItems.map(pipe => <Pipe key={pipe.id} {...pipe} color={pipesColor[pipe.type]}/>)}
        {objectState.sensors.map(field => <DoubleInformationField key={field.meta.sensorTag} meta={field.meta}
                                                                  data={field.sensorState[0]}/>)}
        {sprites.valves.map(valve => <Valve key={valve.id} xStart={valve.x} yStart={valve.y} status={"CLOSE"}/>)}
        {sprites.tanks.tankItems.map(tank => <Tank key={tank.id} {...tank}/>)}
        <Rectangle width={20} height={5} xStart={22} yStart={28}/>
      </div>
    </div>
  );
}

const mstp = (state: RootState): StateProps => ({
  hmi: select.getDevelopmentHmi(state),
  objectState: select.getObjectState(state)(select.getCurrentObject(state)),
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {})(Hmi);