import React from "react";
import {Resolutions} from "../WorkSpace";

type OwnProps = {
  resolution: Resolutions;
}
type Props = OwnProps;

const Screen: React.FC<Props> = ({resolution}) => {
  return (
    <div className={resolution}>
      Screen
    </div>
  )
}

export default Screen;