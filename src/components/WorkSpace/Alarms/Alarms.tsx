import React from "react";
import style from "../WorkSpace.module.css";
import gStyle from "../../../GlobalStyle.module.css";
import {AlarmColorSetting, AlarmsItemType, Resolution} from "../../../redux/reducers/types";
import {RootState} from "../../../redux/store";
import {connect} from "react-redux";
import {select} from "../../../redux/selectors/redux-selectors";
import AlarmsItem from "./AlarmItem/AlarmsItem";

interface OwnProps {
  resolution: Resolution,
}
interface DispatchProps {

}
interface StateProps {
  alarmsLog: Array<AlarmsItemType>,
  colorSet: AlarmColorSetting,
}
type Props = OwnProps & DispatchProps & StateProps;

const Alarms: React.FC<Props> = ({resolution, alarmsLog, colorSet}) => {
  return (
    //TODO
    <div className={style.alarmBody}>
      <div className={style.alarmItem}>
        <div className={gStyle.border}>id</div>
        <div>date</div>
        <div>message</div>
        <div>type</div>
      </div>
      <div>
        {alarmsLog.map(alarmItem => <AlarmsItem key={alarmItem.id} {...alarmItem} color={colorSet[alarmItem.type]}/>)}
      </div>
    </div>
  )
}

const mstp = (state: RootState): StateProps => ({
  alarmsLog: select.getAlarmsLog(state),
  colorSet: select.getAlarmsColorSettings(state),
})

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {})(Alarms);