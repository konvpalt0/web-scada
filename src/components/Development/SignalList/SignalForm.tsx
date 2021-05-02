import React from "react";
import composeClassNames from "../../../utilities/commonFunctions/composeClassNames";
import style from "./SignalList.module.css";
import {select} from "../../../redux/selectors/redux-selectors";
import {useFormik} from "formik";
import {SensorMeta} from "../../../redux/reducers/types";

type OwnProps = {
  setSensorsMetaState: (sensorsMeta: SensorMeta[]) => void,
  signalList: SensorMeta[],
}

const SignalForm: React.FC<OwnProps> = ({setSensorsMetaState, signalList}) => {
  const formik = useFormik<SensorMeta>({
    initialValues: {
      sensorTag: "",
      measure: "%",
      information: "",
      min: "",
      max: "",
      minAlarm: "",
      maxAlarm: "",
      minWarning: "",
      maxWarning: "",
      x: "",
      y: "",
    },
    onSubmit: values => {
      setSensorsMetaState([...signalList, values]);
    },
  });
  const measures: Array<SensorMeta["measure"]> = ["%", "дискр", "C°", "КПа", "м3/ч", "мм", "МПа", "об/мин", "Па"];

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={composeClassNames(style.sensorItem)}>
          <input type="text" name="sensorTag" value={formik.values.sensorTag} placeholder={"Enter tag"}
                 onChange={formik.handleChange}/>
          <select required name="measure" onChange={formik.handleChange} defaultValue="default">
            <option value="default" disabled>Choose measure</option>
            {measures.map(measure => <option key={measure} value={measure}>{measure}</option>)}
          </select>
          <input type="text" name="information" value={formik.values.information} placeholder={"Enter information"}
                 onChange={formik.handleChange}/>
          <input type="text" name="min" value={formik.values.min} placeholder={"Enter min"}
                 onChange={formik.handleChange}/>
          <input type="text" name="max" value={formik.values.max} placeholder={"Enter max"}
                 onChange={formik.handleChange}/>
          <input type="text" name="minAlarm" value={formik.values.minAlarm} placeholder={"Enter minAlarm"}
                 onChange={formik.handleChange}/>
          <input type="text" name="maxAlarm" value={formik.values.maxAlarm} placeholder={"Enter maxAlarm"}
                 onChange={formik.handleChange}/>
          <input type="text" name="minWarning" value={formik.values.minWarning} placeholder={"Enter minWarning"}
                 onChange={formik.handleChange}/>
          <input type="text" name="maxWarning" value={formik.values.maxWarning} placeholder={"Enter maxWarning"}
                 onChange={formik.handleChange}/>
          <input type="text" name="x" value={formik.values.x} placeholder={"Enter x"}
                 onChange={formik.handleChange}/>
          <input type="text" name="y" value={formik.values.y} placeholder={"Enter y"}
                 onChange={formik.handleChange}/>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}

export default SignalForm;

