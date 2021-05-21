import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {Events, HmiSprite, InformationBlockSpec} from "../../../../../redux/reducers/types";

interface OwnProps extends HmiSprite<InformationBlockSpec>, Events {
}

type Props = OwnProps;

const InformationBlock: React.FC<Props> = ({position, meta, spec, events}) => {
  const x = position.x;
  const y = position.y;
  const css = getGridArea(x, y, x + spec.width, y + spec.height);
  const svgHeight = 18/2 * spec.height;
  const svgWidth = 48/4 * spec.width;
  return (
    <div style={css} className={style.informationField} {...events}>
      <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        <text x="0.2rem" y="50%" dominantBaseline="central" alignmentBaseline="central">
          {spec.text}
        </text>
      </svg>
    </div>
  )
}

export default InformationBlock;