import Screen from "./Screen/Screen";
import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {Resolution} from "../../redux/reducers/screen-reducer/types";
import {select} from "../../redux/selectors/redux-selectors";
import {updateScreenResolution} from "../../redux/reducers/screen-reducer/screen-reducer";


const resolutions = {
  "480p": {
    width: 854,
    height: 480,
  },
  "720p": {
    width: 1280,
    height: 720,
  },
  "1080p": {
    width: 1920,
    height: 1080,
  },
}

const WorkSpace: React.FC<Props> = ({resolution, updateScreenResolution}) => {

  return (
    <div>
      WorkSpace
      <button onClick={() => updateScreenResolution(resolutions["480p"])}>480p</button>
      <button onClick={() => updateScreenResolution(resolutions["720p"])}>720p</button>
      <button onClick={() => updateScreenResolution(resolutions["1080p"])}>1080p</button>
      <Screen resolution={resolution}/>
    </div>
  )
}

const mstp = (state: RootState): StateProps => {
  return {
    resolution: select.getResolution(state),
  }
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
  updateScreenResolution,
})(WorkSpace);

type StateProps = {
  resolution: {
    width: number,
    height: number,
  },
};

type DispatchProps = {
  updateScreenResolution: (newResolution: Resolution) => void,
};

type OwnProps = {};

type Props = StateProps & DispatchProps & OwnProps;