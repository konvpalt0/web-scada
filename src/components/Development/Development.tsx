import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {
  removeSensors,
  setSensors,
  startObject,
  stopObject,
  getObject, getHMI, setHMI, removeHMI,
} from "../../redux/reducers/development-reducer/development-reducer";
import {select} from "../../redux/selectors/redux-selectors";
import {DevelopmentState, SensorsPayload} from "../../redux/reducers/development-reducer/types";
import {Sprites} from "../../redux/reducers/screen-reducer/types";

interface OwnProps {}

interface DispatchProps {
  startObject: (objectId: number) => void,
  stopObject: (objectId: number) => void,
  setSensors: (objectId: number, sensors: SensorsPayload["sensors"]) => void,
  removeSensors: (objectId: number) => void,
  getObject: (objectId: number) => void,
  getHMI: (objectId: number) => void,
  setHMI: (objectId: number, hmi: Sprites) => void,
  removeHMI: (objectId: number) => void,
}

type StateProps = {
  response: DevelopmentState["response"];
};
type Props = OwnProps & DispatchProps & StateProps;

const Development: React.FC<Props> = ({
                                        startObject,
                                        stopObject,
                                        removeSensors,
                                        setSensors,
                                        getObject,
                                        getHMI,
                                        removeHMI,
                                        setHMI,
                                        response
                                      }) => {
  const [textArea, setTextArea] = useState("");
  useEffect(() => {
    setTextArea(JSON.stringify(response, null, 2));
  }, [response]);
  const [objectId, setObjectId] = useState(1);
  return (
    <div>
      <h1>Development</h1>
      <div>
        <button onClick={() => startObject(objectId)}>Start</button>
        <button onClick={() => stopObject(objectId)}>Stop</button>
        <button onClick={() => getObject(objectId)}>Get</button>
        <button onClick={() => removeSensors(objectId)}>Remove sensors</button>
        <button onClick={() => setSensors(objectId, JSON.parse(textArea || "{}"))}>Set sensors</button>
        <input type="number" value={objectId} onChange={(event) => setObjectId(+event.target.value)}/>
        <button onClick={() => setTextArea("")}>Clear</button>
        <p>HMI</p>
        <button onClick={() => getHMI(objectId)}>Get</button>
        <button onClick={() => setHMI(objectId, JSON.parse(textArea || "{}"))}>Set</button>
        <button onClick={() => removeHMI(objectId)}>Remove</button>
        <input type="number" value={objectId} onChange={(event) => setObjectId(+event.target.value)}/>
        <button onClick={() => {setTextArea(JSON.stringify(defaultTextArea, null, 2))}}>Default</button>
      </div>
      <textarea value={textArea} onChange={(event) => setTextArea(event.target.value)}
                style={{height: "500px", width: "100%"}}/>
    </div>
  )
}

const mstp = (state: RootState): StateProps => {
  return {
    response: select.getResponse(state),
  };
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
  startObject,
  stopObject,
  removeSensors,
  setSensors,
  getObject,
  getHMI,
  setHMI,
  removeHMI,
})(Development);

const defaultTextArea: Sprites = {
  valves: [
    {id: 0, x: 51, y: 31, status: "OPEN"},//gas valve
    {id: 1, x: 47, y: 8, status: "CLOSE"},//steam valve
    {id: 2, x: 42, y: 2, status: "MOVING"},//water valve
  ],
  pipes: {
    anglePipes: [
      {id: 10, x: 37, y: 31, connect: "TR"},//gas
      {id: 11, x: 26, y: 31, connect: "TL"},//oxygen
      {id: 12, x: 26, y: 3, connect: "BL"},//co2
      {id: 13, x: 33, y: 2, connect: "BR"},//water
      {id: 14, x: 36, y: 8, connect: "BR"},//steam
    ],
    horizontalPipes: [
      {id: 100, x: 37, y: 31, width: 28},//gas
      {id: 101, x: 26, y: 31, width: -25},//oxygen
      {id: 102, x: 26, y: 3, width: -25},//co2
      {id: 103, x: 34, y: 2, width: 31},//water
      {id: 104, x: 37, y: 8, width: 28},//steam
    ],
    verticalPipes: [
      {id: 1001, x: 37, y: 31, height: -4},//gas
      {id: 1002, x: 26, y: 31, height: -4},//oxygen
      {id: 1003, x: 26, y: 4, height: 20},//co2
      {id: 1004, x: 36, y: 9, height: 2},//steam
      {id: 1005, x: 33, y: 3, height: 6},//water
      {id: 1006, x: 32, y: 11, height: 8},//boiler_left
      {id: 1007, x: 37, y: 11, height: 8},//boiler_right
    ],
  },
  informationFields: [

  ],
};