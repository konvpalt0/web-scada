import React from "react";
import style from "./Screen.module.css";
import Cell from "./Cell/Cell";
import HorizontalPipe from "./Pipes/HorizontalPipe";
import VerticalPipe from "./Pipes/VerticalPipe";
import AnglePipe from "./Pipes/AnglePipe";
import PT from "./Sensors/PTSensor";
import Circle from "./Drawing/Circle/Circle";
import InformationField from "./Drawing/InformationField/InformationField";
import Valve from "./Drawing/Valve/Valve";
import {Resolution} from "../../../redux/reducers/screen-reducer/types";

type OwnProps = {
  resolution: Resolution;
}
type Props = OwnProps;

const Screen: React.FC<Props> = ({resolution}) => {
  //DEBUG
  // let Cells: Array<JSX.Element> = [];
  //
  // for (let row = 1; row <= 36; row++) {
  //   for (let column = 1; column <= 64; column++) {
  //     Cells.push(<Cell key={row * 100 + column} row={row} column={column}/>);
  //   }
  // }

  return (
    <div className={style.grid} style={mapResolutionToCSS(resolution)}>
      <HorizontalPipe length={10} xStart={10} yStart={10}/>
      <VerticalPipe height={10} xStart={9} yStart={11}/>
      <AnglePipe connect={"BR"} xStart={9} yStart={10}/>
      <AnglePipe connect={"TL"} xStart={20} yStart={10}/>
      <VerticalPipe height={-5} xStart={20} yStart={10}/>
      <PT xStart={20} yStart={8}/>
      <Circle radius={3} xStart={15} yStart={15}/>
      <InformationField information={"LOL"} xStart={30} yStart={30}/>
      <Valve xStart={35} yStart={30} status={"CLOSE"} resolution={resolution}/>
    </div>
  )
}

export default Screen;

const mapResolutionToCSS = (resolution: Resolution): React.CSSProperties => {
  return {
    width: resolution.width,
    height: resolution.height,
  }
};