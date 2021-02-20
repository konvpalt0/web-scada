import Screen from "./Screen/Screen";
import React, {useState} from "react";
import styleScreen from "./Screen/Screen.module.css";

const WorkSpace: React.FC<{}> = () => {
  const [screenResolution, setScreenResolution] = useState(styleScreen.resolution480);
  const changeResolution = (resolution: Resolutions): void => {
    setScreenResolution(resolution);
  }
  return(
    <div>
      WorkSpace
      <button onClick={() => changeResolution(styleScreen.resolution480)}>480p</button>
      <button onClick={() => changeResolution(styleScreen.resolution720)}>720p</button>
      <button onClick={() => changeResolution(styleScreen.resolution1080)}>1080p</button>
      <Screen resolution={screenResolution}/>
    </div>
  )
}

export default WorkSpace

export type Resolutions = typeof styleScreen.resolution480 | typeof styleScreen.resolution720 | typeof styleScreen.resolution1080;
