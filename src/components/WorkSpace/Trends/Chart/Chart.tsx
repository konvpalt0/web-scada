import React from "react";
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {getGridArea} from "../../../../utilities/commonFunctions/screenFunctions";
import {SensorData} from "../../../../redux/reducers/types";
import {StartPosition} from "../../types";

interface OwnProps extends StartPosition {
  data: Array<SensorData> | undefined,
}

type Props = OwnProps;

const Chart: React.FC<Props> = ({xStart, yStart, data}) => {
  const css = getGridArea(xStart, yStart, xStart + 60, yStart + 20);
  const data1 = data?.map(it => {const date = new Date(it.date); return {...it, date: `${date.getMinutes()}:${date.getSeconds()}`}});
  return (
    <div style={css}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={600} height={300} data={data1}>
          <XAxis dataKey="date"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Line dataKey="value" stroke="#8884d8" animationDuration={0}/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;