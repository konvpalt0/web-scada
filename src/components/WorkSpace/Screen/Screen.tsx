import React from "react";
import {Resolutions} from "../WorkSpace";
import style from "./Screen.module.css";
import Cell from "./Cell/Cell";
import HorizontalPipe from "./Pipes/HorizontalPipe";
import VerticalPipe from "./Pipes/VerticalPipe";
import AnglePipe from "./Pipes/AnglePipe";
import PT from "./Sensors/PTSensor";

type OwnProps = {
  resolution: Resolutions;
}
type Props = OwnProps;

const Screen: React.FC<Props> = ({resolution}) => {
  let Cells: Array<JSX.Element> = [];

  for (let row = 1; row <= 36; row++) {
    for (let column = 1; column <= 64; column++) {
      Cells.push(<Cell key={row * 100 + column} row={row} column={column}/>);
    }
  }

  return (
    <div className={resolution + " " + style.grid}>
      <HorizontalPipe length={10} xStart={10} yStart={10}/>
      <VerticalPipe height={10} xStart={9} yStart={11}/>
      <AnglePipe connect={"BR"} xStart={9} yStart={10}/>
      <AnglePipe connect={"TL"} xStart={20} yStart={10}/>
      <VerticalPipe height={-5} xStart={20} yStart={10}/>
      <PT xStart={20} yStart={8}/>
    </div>
  )
}

export default Screen;