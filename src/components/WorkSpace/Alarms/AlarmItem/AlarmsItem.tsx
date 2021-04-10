import React from "react";
import { AlarmsItemType } from "../../../../redux/reducers/types";
import composeClassNames from "../../../../utilities/commonFunctions/composeClassNames";
import gStyle from "../../../../GlobalStyle.module.css";
import style from "../../WorkSpace.module.css";

interface OwnProps extends AlarmsItemType{
  color: React.CSSProperties["color"];
}

type Props = OwnProps;

const AlarmsItem: React.FC<Props> = ({id,message,type,date, color}) => {
  return (
    <div className={composeClassNames(gStyle.hover, style.alarmItem)} style={{backgroundColor: color}}>
      <div>{id}</div>
      <div>{date}</div>
      <div>{message}</div>
      <div>{type}</div>
    </div>
  )
}

export default AlarmsItem;