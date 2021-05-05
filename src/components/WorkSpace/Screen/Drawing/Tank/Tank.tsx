import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {Events, HmiSprite, TankSpec} from "../../../../../redux/reducers/types";
import composeClassNames from "../../../../../utilities/commonFunctions/composeClassNames";

interface OwnProps extends HmiSprite<TankSpec>, Events{
}

type Props = OwnProps;

const Tank: React.FC<Props> = ({position, meta, spec, events}) => {
  const x = position.x;
  const y = position.y;
  const radius = spec.radius;
  const type = spec.type;
  const css = getGridArea(x - radius, y - radius, x + radius, y + radius);
  return (
    <div style={css} className={composeClassNames(style.tankWrapper, style[type])} {...events}>
      <div className={style.tank}></div>
    </div>
  )
}

export default Tank;