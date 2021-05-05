import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {Resolution, HmiSprite, ValveSpec, Events} from "../../../../../redux/reducers/types";
import {connect} from "react-redux";
import {RootState} from "../../../../../redux/store";
import {select} from "../../../../../redux/selectors/redux-selectors";
import composeClassNames from "../../../../../utilities/commonFunctions/composeClassNames";

type StateProps = {
  resolution: Resolution,
}
interface OwnProps extends HmiSprite<ValveSpec>, Events {
}
type Props = OwnProps & StateProps;

const Valve: React.FC<Props> = ({position, meta, spec, resolution, events}) => {
  const x = position.x;
  const y = position.y;
  const status = spec.status;
  const css = getGridArea(x - 1, y - 1, x + 2, y + 2);
  const borderSize = Math.floor(resolution.height / 36 * 1.5);
  let borders: React.CSSProperties = {
    borderWidth: `${borderSize}px`,
    borderStyle: "solid",
  };
  return (
    <div style={{...css, ...borders}} className={composeClassNames(style.valve, getColor(status))} {...events}/>
  )
}

const mstp = (state: RootState): StateProps => {
  return {
    resolution: select.getResolution(state)
  }
}

export default connect<StateProps, {}, OwnProps, RootState>(mstp, {})(Valve);

const getColor = (status: ValveSpec["status"]): string => {
  switch (status) {
    case "CLOSE":
      return style.close;
    case "OPEN":
      return style.open;
    case "MOVING":
      return style.moving;
  }
}

