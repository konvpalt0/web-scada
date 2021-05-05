import React from "react";
import {Events, HmiSprite, PipeSpec} from "../../../../redux/reducers/types"
import {getPipeStyle} from "../../../../utilities/commonFunctions/screenFunctions";

type Props = HmiSprite<PipeSpec> & Events & {color: React.CSSProperties["color"]};

const Pipe: React.FC<Props> = ({position,spec,meta,color, events}) => {
  const orientation = spec.orientation;
  const x = position.x;
  const y = position.y;
  const width = spec.width || 0;
  const height = spec.height || 0;
  const getGrid = (xS:number, yS:number, xE:number, yE:number) => getPipeStyle(xS, yS, xE, yE, orientation, color);
  let css: React.CSSProperties = {};
  switch (orientation) {
    case "horizontal":
      css = getGrid(x, y, x + width, y + 1);
      break;
    case "vertical":
      css = getGrid(x, y, x + 1, y + height);
      break;
    case "TR":
      css = getGrid(x, y, x + 1, y + 1);
      break;
    case "TL":
      css = getGrid(x, y, x + 1, y + 1);
      break;
    case "BR":
      css = getGrid(x, y, x + 1, y + 1);
      break;
    case "BL":
      css = getGrid(x, y, x + 1, y + 1);
      break;
  }

  return <div style={css} {...events}/>
}

export default Pipe;