import React from "react";
import {Resolutions} from "../WorkSpace";
import style from "./Screen.module.css";
import Cell from "./Cell/Cell";

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


  return (
    <div className={resolution + " " + style.grid}>
      {Cells}
    </div>
  )
}

export default Screen;