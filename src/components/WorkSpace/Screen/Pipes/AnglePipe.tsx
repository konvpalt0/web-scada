import React from "react";
import {StartPosition} from "../Element/Element";
import style from "../Screen.module.css";
import {getGridArea} from "../../../../utilities/commonFunctions/screenFunctions";

interface Props extends StartPosition {
  connect: "TL" | "TR" | "BL" | "BR",
}

const AnglePipe: React.FC<Props> = ({connect, xStart, yStart}) => {
  const className: string = getClassName(connect);
  const css = getGridArea(xStart, yStart,xStart + 1, yStart + 1);

  return <div className={className} style={css}/>
}

export default AnglePipe;

const getClassName = (rule: string): string => {
  switch (rule) {
    case "TL":
      return style.aPipeTL;
    case "TR":
      return style.aPipeTR;
    case "BL":
      return style.aPipeBL;
    case "BR":
      return style.aPipeBR;
    default:
      return style.error;
  }
}