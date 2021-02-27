import React from "react";
import style from "./Screen.module.css";
import HorizontalPipe from "./Pipes/HorizontalPipe";
import VerticalPipe from "./Pipes/VerticalPipe";
import AnglePipe from "./Pipes/AnglePipe";
import PT from "./Sensors/PTSensor";
import Circle from "./Drawing/Circle/Circle";
import InformationField from "./Drawing/InformationField/InformationField";
import Valve from "./Drawing/Valve/Valve";
import {Resolution, Sprites} from "../../../redux/reducers/screen-reducer/types";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {select} from "../../../redux/selectors/redux-selectors";
import Rectangle from "./Drawing/Rectangle/Reactangle";
import {getSensorsData} from "../../../redux/reducers/screen-reducer/screen-reducer";

type OwnProps = {
  resolution: Resolution;
};
type StateProps = {
 sprites: Sprites;
}
type DispatchProps = {
  //TODO fix any
  getSensorsData: (objectId: number) => any,
}
type Props = OwnProps & StateProps & DispatchProps;

const Screen: React.FC<Props> = ({resolution, sprites, getSensorsData}) => {
  /*DEBUG
  let Cells: Array<JSX.Element> = [];

  for (let row = 1; row <= 36; row++) {
    for (let column = 1; column <= 64; column++) {
      Cells.push(<Cell key={row * 100 + column} row={row} column={column}/>);
    }
  }*/

  //test
  const getData = (objectId = 1): void => {
    getSensorsData(objectId);
  }
  //

  return (
    <div className={style.grid} style={mapResolutionToCSS(resolution)}>
      {sprites.pipes.verticalPipes.map(pipe => <VerticalPipe key={pipe.id} xStart={pipe.x} yStart={pipe.y} height={pipe.height}/>)}
      {sprites.pipes.horizontalPipes.map(pipe => <HorizontalPipe key={pipe.id} xStart={pipe.x} yStart={pipe.y} length={pipe.width}/>)}
      {sprites.pipes.anglePipes.map(pipe => <AnglePipe key={pipe.id} xStart={pipe.x} yStart={pipe.y} connect={pipe.connect}/>)}
      {sprites.informationFields.map(field => <InformationField key={field.id} xStart={field.x} yStart={field.y} information={field.information}/>)}
      {sprites.valves.map(valve => <Valve key={valve.id} xStart={valve.x} yStart={valve.y} status={valve.status}/>)}

      <PT xStart={20} yStart={8}/>
      <Circle radius={3} xStart={35} yStart={19}/>
      <Circle radius={3} xStart={35} yStart={11}/>
      <Rectangle width={20} height={5} xStart={22} yStart={23}/>

      <button onClick={() => getData()}></button>
    </div>
  )
}

const mstp = (state: RootState): StateProps => ({
  sprites: select.getSprites(state),
})

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
  getSensorsData,
})(Screen);

const mapResolutionToCSS = (resolution: Resolution): React.CSSProperties => {
  return {
    width: resolution.width,
    height: resolution.height,
  }
};