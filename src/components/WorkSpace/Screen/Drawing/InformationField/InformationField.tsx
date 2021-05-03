import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {NavLink} from "react-router-dom";
import {Events, Position} from "../../../../../redux/reducers/types";

interface OwnProps extends Position, Events {
  id: string,
  information: string,
}

type Props = OwnProps;

const InformationField: React.FC<Props> = ({y, x, information, id, onClick}) => {
  const css = getGridArea(x, y, x + 4, y + 2);
    const events = {onClick};
  return (
    <NavLink to={`/workspace/trends/${id}`} style={css} className={style.informationField} {...events}>
      <svg viewBox="0 0 48 18">
        <text x="5%" y="50%" dominantBaseline="central" alignmentBaseline="central">
          {information}
        </text>
      </svg>
    </NavLink>
  )
}

export default InformationField;