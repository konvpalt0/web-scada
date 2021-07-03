import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {NavLink} from "react-router-dom";
import {Events, HmiSprite, InformationFieldSpec} from "../../../../../redux/reducers/types";

interface OwnProps extends HmiSprite<InformationFieldSpec>, Events {
  information: string,
}

type Props = OwnProps;

const InformationField: React.FC<Props> = ({position, meta, spec, information, events}) => {
  const x = position.x;
  const y = position.y;
  const id = spec.signalId;
  const css = getGridArea(x, y, x + 4, y + 2);
  return (
    <NavLink to={`/workspace/trends/${id}`} style={css} className={style.informationField} {...events}>
      <svg viewBox="0 0 55 18">
        <text x="5%" y="50%" dominantBaseline="central" alignmentBaseline="central">
          {information}
        </text>
      </svg>
    </NavLink>
  )
}

export default InformationField;