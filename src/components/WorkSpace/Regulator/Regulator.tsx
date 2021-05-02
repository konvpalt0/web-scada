import React from "react";
import {RegulatorSettings, Resolution} from "../../../redux/reducers/types";
import {mapResolutionToCSS} from "../Screen/Screen";
import {useFormik} from "formik";
import {select} from "../../../redux/selectors/redux-selectors";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {updateRegulatorSettings} from "../../../redux/reducers/regulators-reducer/regulators-reducer";

interface OwnProps {
  resolution: Resolution,
};
type StateProps = {
  objectId: string,
  regulatorSettings: RegulatorSettings,
};
type DispatchProps = {
  updateRegulatorSettings: (regulatorId: string, payload: RegulatorSettings) => void,
};
type Props = OwnProps & StateProps & DispatchProps;

const Regulator: React.FC<Props> = ({resolution, regulatorSettings, updateRegulatorSettings}) => {
  const formik = useFormik<RegulatorSettings>({
    initialValues: {...regulatorSettings},
    onSubmit: values => {
      updateRegulatorSettings("0", values);
    }
  })
  return (
    <div style={mapResolutionToCSS(resolution)}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>Уставка для автоматического режима</div>
          <input name="targetForAutoMode" type="number" step="0.1" value={formik.values.targetForAutoMode} onChange={formik.handleChange}/>
        </div>
        <div>
          <div>Уставка для ручного режима</div>
          <input name="targetForManualMode" type="number" step="0.1" value={formik.values.targetForManualMode} onChange={formik.handleChange}/>
        </div>
        <div>
          <div>Коэффициент пропорциональной составляющей</div>
          <input name="kp" type="number" step="0.1" value={formik.values.kp} onChange={formik.handleChange}/>
        </div>
        <div>
          <div>Коэффициент интегральной составляющей</div>
          <input name="ki" type="number" step="0.1" value={formik.values.ki} onChange={formik.handleChange}/>
        </div>
        <div>
          <div>Коэффициент дифференциальной составляющей</div>
          <input name="kd" type="number" step="0.1" value={formik.values.kd} onChange={formik.handleChange}/>
        </div>
        <div>
          <div>Зона нечувствительности</div>
          <input name="deadZone" type="number" value={formik.values.deadZone} onChange={formik.handleChange}/>
        </div>
        <button type="submit">Accept</button>
      </form>
    </div>
  )
};

const mstp = (state: RootState): StateProps => ({
  objectId: select.getCurrentObject(state),
  regulatorSettings: select.getRegulatorSettings(state)("0"),
})

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
  updateRegulatorSettings
})(Regulator);
