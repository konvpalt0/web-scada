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

  const drawPipe = (columnStart: number,
                    columnEnd: number,
                    rowStart: number,
                    rowEnd: number): JSX.Element => {
    let className: string;
    if ((Math.abs(rowEnd - rowStart) - Math.abs(columnEnd - columnStart)) > 0)
      className = style.vPipe;
    else className = style.hPipe;
    const props: ElementOwnProps = {
      columnStart,
      columnEnd,
      rowStart,
      rowEnd,
      className
    }
    return <Element {...props}/>
  }




  return (
    <div className={resolution + " " + style.grid}>
      {drawPipe(10,30,10,10)}
      {drawPipe(10,10,11,30)}
      {drawPipe(15,15,5,20)}
    </div>
  )
}

export default Screen;