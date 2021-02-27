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

type OwnProps = {
  resolution: Resolution;
};
type StateProps = {
 sprites: Sprites;
}
type Props = OwnProps & StateProps;

const Screen: React.FC<Props> = ({resolution, sprites}) => {
  /*DEBUG
  let Cells: Array<JSX.Element> = [];

  for (let row = 1; row <= 36; row++) {
    for (let column = 1; column <= 64; column++) {
      Cells.push(<Cell key={row * 100 + column} row={row} column={column}/>);
    }
  }*/

  return (
    <div className={style.grid} style={mapResolutionToCSS(resolution)}>
      {sprites.pipes.verticalPipes.map(pipe => <VerticalPipe key={pipe.id} xStart={pipe.x} yStart={pipe.y} height={pipe.height}/>)}
      {sprites.pipes.horizontalPipes.map(pipe => <HorizontalPipe key={pipe.id} xStart={pipe.x} yStart={pipe.y} length={pipe.width}/>)}
      {sprites.pipes.anglePipes.map(pipe => <AnglePipe key={pipe.id} xStart={pipe.x} yStart={pipe.y} connect={pipe.connect}/>)}
      {sprites.informationFields.map(field => <InformationField key={field.id} xStart={field.x} yStart={field.y} information={field.information}/>)}
      {sprites.valves.map(valve => <Valve key={valve.id} xStart={valve.x} yStart={valve.y} status={valve.status}/>)}

      <PT xStart={20} yStart={8}/>
      <Circle radius={3} xStart={43} yStart={18}/>
      <Circle radius={3} xStart={43} yStart={10}/>
    </div>
  )
}

const mstp = (state: RootState): StateProps => ({
  sprites: select.getSprites(state),
})

export default connect<StateProps, {}, OwnProps, RootState>(mstp, {})(Screen);

const mapResolutionToCSS = (resolution: Resolution): React.CSSProperties => {
  return {
    width: resolution.width,
    height: resolution.height,
  }
};