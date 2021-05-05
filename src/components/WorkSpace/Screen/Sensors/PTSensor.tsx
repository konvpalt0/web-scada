import React from "react";
import style from "../Screen.module.css";
import {getGridArea} from "../../../../utilities/commonFunctions/screenFunctions";
import {SpritePosition} from "../../../../redux/reducers/types";

interface Props extends SpritePosition {

}

const PT: React.FC<Props> = ({x, y}) => {
  const css = getGridArea(x - 1, y - 1, x + 2, y + 2);

  return <div className={style.sensor} style={css}>
    <svg viewBox="0 0 20 20">
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
        PT
      </text>
    </svg>
  </div>
}

export default PT;