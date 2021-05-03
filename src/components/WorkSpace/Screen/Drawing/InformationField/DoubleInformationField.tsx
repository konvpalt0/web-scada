import React from "react";
import InformationField from "./InformationField";
import {Events, SensorData, SensorMeta} from "../../../../../redux/reducers/types";

interface OwnProps extends Events{
  meta: SensorMeta,
  data: SensorData,
}
interface DispatchProps {

}
interface StateProps {

}
type Props = OwnProps & DispatchProps & StateProps;

const DoubleInformationField: React.FC<Props> = ({meta, data, onClick}) => {
    const events = {onClick};
    return (
        <>
            <InformationField x={+meta.x} y={+meta.y} information={meta.information} id={meta.sensorTag} {...events}/>
            <InformationField x={+meta.x + 4} y={+meta.y} information={data.value + meta.measure}
                              id={meta.sensorTag} {...events}/>
        </>
    )
}

export default DoubleInformationField;