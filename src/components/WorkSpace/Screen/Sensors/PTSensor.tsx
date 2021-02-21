import React from "react";
import {StartPosition} from "../Element/Element";
import style from "../Screen.module.css";
import {getGridArea} from "../../../../utilities/commonFunctions/screenFunctions";

interface Props extends StartPosition {

}

const PT: React.FC<Props> = ({xStart, yStart}) => {
  const css = getGridArea(xStart - 1, yStart - 1, xStart + 2, yStart + 2);

  return <div className={style.sensor} style={css}>
    <svg viewBox="0 0 20 20">
      <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
        PT
      </text>
    </svg>
  </div>
}

export default PT;