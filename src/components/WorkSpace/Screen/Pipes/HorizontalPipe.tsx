import React from "react";
import {StartPosition} from "../Element/Element";
import style from "../Screen.module.css";
import {getGridArea} from "../../../../utilities/commonFunctions/screenFunctions";

interface Props extends StartPosition {
  length: number,
}

const HorizontalPipe: React.FC<Props> = ({xStart, yStart, length}) => {
  const css = getGridArea(xStart, yStart, xStart + length, yStart + 1);

  return <div style={css} className={style.hPipe}/>
}

export default HorizontalPipe;