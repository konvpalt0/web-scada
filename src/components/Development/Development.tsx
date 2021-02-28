import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {
  removeSensors,
  setSensors,
  startObject,
  stopObject,
  getObject,
} from "../../redux/reducers/development-reducer/development-reducer";
import {select} from "../../redux/selectors/redux-selectors";
import {DevelopmentState} from "../../redux/reducers/development-reducer/types";

interface OwnProps {

}

interface DispatchProps {
  startObject: any,
  stopObject: any,
  setSensors: any,
  removeSensors: any,
  getObject: any,
}

type StateProps = {
  response: DevelopmentState["response"];
};
type Props = OwnProps & DispatchProps & StateProps;

const Development: React.FC<Props> = ({startObject, stopObject, removeSensors, setSensors, getObject, response}) => {
  const [textArea, setTextArea] = useState("");
  useEffect(() => {
    setTextArea(JSON.stringify(response, null, 2));
  }, [response]);
  const [objectId, setObjectId] = useState("1");
  return (
    <div>
      <h1>Development</h1>
      <div>
        <button onClick={() => startObject(objectId)}>Start</button>
        <button onClick={() => stopObject(objectId)}>Stop</button>
        <button onClick={() => getObject(objectId)}>Get</button>
        <button onClick={() => removeSensors(objectId)}>Remove sensors</button>
        <button onClick={() => setSensors(objectId, JSON.parse(textArea || "{}"))}>Set sensors</button>
        <input type="number" value={objectId} onChange={(event) => setObjectId(event.target.value)}/>
        <button onClick={() => {setTextArea("")}}>Clear</button>
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
})(Development);