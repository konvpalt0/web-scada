import React from "react";
import {Resolutions} from "../WorkSpace";
import style from "./Screen.module.css";

type OwnProps = {
  resolution: Resolutions;
}
type Props = OwnProps;

const Screen: React.FC<Props> = ({resolution}) => {
  return (
    <canvas className={resolution + " " + style.block}>
      Screen
    </canvas>
  )
}

export default Screen;