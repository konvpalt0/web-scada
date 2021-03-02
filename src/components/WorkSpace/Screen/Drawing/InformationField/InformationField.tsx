import {StartPosition} from "../../Element/Element";
import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";

interface OwnProps extends StartPosition {
  information: string,
}

type Props = OwnProps;

const InformationField: React.FC<Props> = ({yStart, xStart, information}) => {
  const css = getGridArea(xStart, yStart, xStart + 4, yStart + 2);
  return (
    <div style={css} className={style.informationField}>
      <svg viewBox="0 0 48 18">
        <text x="0%" y="50%" dominantBaseline="central" alignmentBaseline="central" >
          {information}
        </text>
      </svg>
    </div>
  )
}

export default InformationField;