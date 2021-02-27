import React, {useState} from "react";
import {useFormik} from "formik";
import {devAPI} from "../../utilities/axiosApi/axios-api";
import {AxiosResponse} from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {startObject} from "../../redux/reducers/development-reducer/development-reducer";
import {select} from "../../redux/selectors/redux-selectors";
import {DevelopmentState} from "../../redux/reducers/development-reducer/types";

interface OwnProps {

}
interface DispatchProps {
  startObject: any,
}
type StateProps = {
  response: DevelopmentState["response"];
};
type Props = OwnProps & DispatchProps & StateProps;

interface FormProps {
  objectId: number,
  setResponseJson: (objectId: number) => Promise<AxiosResponse<JSON>>,
}

const Development: React.FC<Props> = ({startObject, response}) => {
  const [objectId, setObjectId] = useState("1");
  return (
    <div>
      <h1>Development</h1>
      <div>
        Buttons Here!
        <button onClick={() => startObject(objectId)}>Start object</button>
        <input type="number" value={objectId} onChange={(event) => setObjectId(event.target.value)}/>
      </div>
      <textarea value={JSON.stringify(response, null, 2)} onChange={() => {}} style={{height:"500px" ,width: "100%"}}/>
    </div>
  )
}

const mstp = (state: RootState): StateProps => {
  return {
    response: select.getResponse(state),
  };
}

export default connect<StateProps,DispatchProps,OwnProps,RootState>(mstp,{
  startObject,
})(Development);