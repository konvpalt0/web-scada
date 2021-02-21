import React from "react";
import {StartPosition} from "../Element/Element";
import style from "../Screen.module.css";
import {getGridArea} from "../../../../utilities/commonFunctions/screenFunctions";

interface Props extends StartPosition {
  height: number,
}

const VerticalPipe: React.FC<Props> = ({xStart, yStart, height}) => {
  const css = getGridArea(xStart, yStart, xStart + 1, yStart + height);

  return <div style={css} className={style.vPipe}/>
}

export default VerticalPipe;