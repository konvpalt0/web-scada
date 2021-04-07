import React from "react";
import {getGridArea} from "../../../../../utilities/commonFunctions/screenFunctions";
import style from "../../Screen.module.css";
import {Resolution} from "../../../../../redux/reducers/types";
import {connect} from "react-redux";
import {RootState} from "../../../../../redux/store";
import {select} from "../../../../../redux/selectors/redux-selectors";
import {StartPosition} from "../../../types";
import composeClassNames from "../../../../../utilities/commonFunctions/composeClassNames";

const Valve: React.FC<Props> = ({xStart, yStart, status, resolution}) => {
  const css = getGridArea(xStart-1, yStart-1, xStart+2, yStart+2);
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
interface OwnProps extends StartPosition {
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

