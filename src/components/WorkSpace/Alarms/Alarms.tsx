import React from "react";
import style from "../Screen/Screen.module.css";
import {mapResolutionToCSS} from "../Screen/Screen";
import {Resolution} from "../../../redux/reducers/types";

type OwnProps = {
  resolution: Resolution,
};
type Props = OwnProps;

const Alarms: React.FC<Props> = ({resolution}) => {
  return (
    <div className={style.grid} style={mapResolutionToCSS(resolution)}>Alarms</div>
  )
}

export default Alarms;