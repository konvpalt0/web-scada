import React from "react";
import InformationField from "./InformationField";
import {SensorData, SensorMeta} from "../../../../../redux/reducers/types";

interface OwnProps {
  meta: SensorMeta,
  data: SensorData,
}
interface DispatchProps {

}
interface StateProps {

}
type Props = OwnProps & DispatchProps & StateProps;

const DoubleInformationField: React.FC<Props> = ({meta, data}) => {
  return (
    <>
      <InformationField xStart={+meta.x} yStart={+meta.y} information={meta.information} id={meta.sensorTag}/>
      <InformationField xStart={+meta.x+4} yStart={+meta.y} information={data.value + meta.measure} id={meta.sensorTag}/>
    </>
  )
}

export default DoubleInformationField;