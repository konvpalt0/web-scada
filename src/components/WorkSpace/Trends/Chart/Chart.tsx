import React from "react";
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {getGridArea} from "../../../../utilities/commonFunctions/screenFunctions";
import {SpritePosition, SignalData} from "../../../../redux/reducers/types";

interface OwnProps extends SpritePosition {
  data: Array<SignalData> | undefined,
}

type Props = OwnProps;

const Chart: React.FC<Props> = ({x, y, data}) => {
  const css = getGridArea(x, y, x + 60, y + 20);
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