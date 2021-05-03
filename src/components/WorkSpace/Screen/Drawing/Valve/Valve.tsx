import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {Position, Resolution} from "../../../../../redux/reducers/types";
import {connect} from "react-redux";
import {RootState} from "../../../../../redux/store";
import {select} from "../../../../../redux/selectors/redux-selectors";
import composeClassNames from "../../../../../utilities/commonFunctions/composeClassNames";

const Valve: React.FC<Props> = ({x, y, status, resolution}) => {
  const css = getGridArea(x-1, y-1, x+2, y+2);
  const borderSize = Math.floor(resolution.height/36*1.5);
  let borders: React.CSSProperties = {
    borderWidth: `${borderSize}px`,
    borderStyle: "solid",
  };
  return (
    <div style={{...css, ...borders}} className={composeClassNames(style.valve, getColor(status))}/>
  )
}

const mstp = (state: RootState): StateProps => {
  return {
    resolution: select.getResolution(state)
  }
}

export default connect<StateProps, {}, OwnProps, RootState>(mstp, {})(Valve);

type StateProps = {
  resolution: Resolution,
}
interface OwnProps extends Position {
  status: "CLOSE" | "OPEN" | "MOVING",
}
type Props = OwnProps & StateProps;

const getColor = (status: OwnProps["status"]): string => {
  switch (status) {
    case "CLOSE":
      return style.close;
    case "OPEN":
      return style.open;
    case "MOVING":
      return style.moving;
  }
}

