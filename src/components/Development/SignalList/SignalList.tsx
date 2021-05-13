import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {SignalMeta} from "../../../redux/reducers/types";
import {select} from "../../../redux/selectors/redux-selectors";
import style from "./SignalList.module.css";
import gStyle from "../../../GlobalStyle.module.css";
import composeClassNames from "../../../utilities/commonFunctions/composeClassNames";
import {setSensorsMetaState} from "../../../redux/reducers/development-reducer/development-reducer";
import SignalForm from "./SignalForm";

type StateProps = {
  signalList: SignalMeta[],
};
type DispatchProps = {
  setSensorsMetaState: (sensorsMeta: SignalMeta[]) => void,
};
type OwnProps = {};
type Props = StateProps & DispatchProps & OwnProps;

const SensorInfo: React.FC<{sensorMeta: SignalMeta}> = ({sensorMeta}) => {
  return (
    <div className={composeClassNames(style.sensorItem, gStyle.hover)}>
      {Object.entries(sensorMeta).map(([key, value]) => <div className={style.content} key={key}>{value}</div>)}
    </div>
  )
}

const SignalList: React.FC<Props> = ({signalList, setSensorsMetaState}) => {
  return (
    <div className={style.sensorItemsWrapper}>
      <div className={style.sensorItem}>
        {Object.keys(signalList[0]).map(key => <div key={key} className={style.header}>{key}</div>)}
      </div>
      {signalList.map(sensor => <SensorInfo sensorMeta={sensor}/>)}
      <SignalForm setSensorsMetaState={setSensorsMetaState} signalList={signalList}/>
    </div>
  )
}

const mstp = (state: RootState): StateProps => ({
  signalList: select.getObjectState(state)("1").signals.map(sensor => sensor.meta),
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
  setSensorsMetaState,
})(SignalList);