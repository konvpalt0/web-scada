import React from "react";
import {Resolutions} from "../WorkSpace";
import style from "./Screen.module.css";
import Cell from "./Cell/Cell";
import Element, {ElementOwnProps} from "./Element/Element";

type OwnProps = {
  resolution: Resolutions;
}
type Props = OwnProps;

const Screen: React.FC<Props> = ({resolution}) => {
  let Cells: Array<JSX.Element> = [];

  for (let row = 1; row <= 36; row++) {
    for (let column = 1; column <= 64; column++) {
      Cells.push(<Cell key={row*100+column} row={row} column={column}/>);
    }
  }

  const drawPipe = (props: ElementOwnProps): JSX.Element => <Element {...props}/>

  const pipeProps: ElementOwnProps = {
    className: style.pipe,
    columnStart: 10,
    columnEnd: 20,
    rowStart: 10,
    rowEnd: 10,
  }

  return (
    <div className={resolution + " " + style.grid}>
      {drawPipe(pipeProps)}
    </div>
  )
}

export default Screen;