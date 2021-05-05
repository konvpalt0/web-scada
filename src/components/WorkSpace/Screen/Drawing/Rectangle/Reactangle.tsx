import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {SpritePosition} from "../../../../../redux/reducers/types";

interface OwnProps extends SpritePosition {
  width: number,
  height: number,
}
type Props = OwnProps;

const Rectangle: React.FC<Props> = ({x, y, width, height}) => {
  const css = getGridArea(x, y, x+width, y+height);
  return (
    <div style={css} className={style.rectangle}/>
  )
}

export default Rectangle;