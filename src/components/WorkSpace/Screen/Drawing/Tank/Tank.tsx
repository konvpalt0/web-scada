import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {TankType} from "../../../../../redux/reducers/types";
import composeClassNames from "../../../../../utilities/commonFunctions/composeClassNames";

interface OwnProps extends TankType {
}

type Props = OwnProps;

const Tank: React.FC<Props> = ({x,y, radius, type}) => {
  const css = getGridArea(x - radius, y - radius, x + radius, y + radius);
  return (
    <div style={css} className={composeClassNames(style.tankWrapper, style[type])}>
      <div className={style.tank}></div>
    </div>
  )
}

export default Tank;