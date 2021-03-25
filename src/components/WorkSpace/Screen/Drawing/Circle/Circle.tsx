import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {StartPosition} from "../../../types";

interface OwnProps extends StartPosition {
  radius: number,
}

type Props = OwnProps;

const Circle: React.FC<Props> = ({xStart, yStart, radius}) => {
  const css = getGridArea(xStart - radius, yStart - radius, xStart + radius, yStart + radius);
  return (
    <div style={css} className={style.circle}/>
  )
}

export default Circle;