import {StartPosition} from "../../Element/Element";
import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {Resolution} from "../../../../../redux/reducers/screen-reducer/types";

interface OwnProps extends StartPosition {
  status: "CLOSE" | "OPEN" | "MOVING",
  resolution: Resolution,
}

type Props = OwnProps;

const Valve: React.FC<Props> = ({xStart,yStart, status, resolution}) => {
  const css = getGridArea(xStart, yStart, xStart, yStart);
  console.log(resolution);
  let borders: React.CSSProperties = {
    borderTop: `10px solid transparent`,
    borderBottom: `10px solid transparent`,
    borderLeft: `10px solid red`,
    borderRight: `10px solid red`,
  };
  return (
    <div style={{...css, ...borders}} className={style.valve}/>
  )
}

export default Valve;