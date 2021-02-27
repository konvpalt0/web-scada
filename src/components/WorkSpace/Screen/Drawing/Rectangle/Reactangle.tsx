import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import {StartPosition} from "../../Element/Element";
import style from "../../Screen.module.css";

interface OwnProps extends StartPosition {
  width: number,
  height: number,
}
type Props = OwnProps;

const Rectangle: React.FC<Props> = ({xStart, yStart, width, height}) => {
  const css = getGridArea(xStart, yStart, xStart+width, yStart+height);
  return (
    <div style={css} className={style.rectangle}/>
  )
}

export default Rectangle;