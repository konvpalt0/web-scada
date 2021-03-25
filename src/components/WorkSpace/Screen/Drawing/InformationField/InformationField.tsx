import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {StartPosition} from "../../../types";
import {NavLink} from "react-router-dom";

interface OwnProps extends StartPosition {
  id: string,
  information: string,
}

type Props = OwnProps;

const InformationField: React.FC<Props> = ({yStart, xStart, information, id}) => {
  const css = getGridArea(xStart, yStart, xStart + 4, yStart + 2);

  return (
    <NavLink to={`/workspace/trends/${id}`} style={css} className={style.informationField}>
      <svg viewBox="0 0 48 18">
        <text x="0%" y="50%" dominantBaseline="central" alignmentBaseline="central">
          {information}
        </text>
      </svg>
    </NavLink>
  )
}

export default InformationField;