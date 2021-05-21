import React, {useState} from "react";
import style from "../../WorkSpace/Screen/Screen.module.css";
import Pipe from "../../WorkSpace/Screen/Pipes/Pipe";
import DoubleInformationField from "../../WorkSpace/Screen/Drawing/InformationField/DoubleInformationField";
import Valve from "../../WorkSpace/Screen/Drawing/Valve/Valve";
import Tank from "../../WorkSpace/Screen/Drawing/Tank/Tank";
import Rectangle from "../../WorkSpace/Screen/Drawing/Rectangle/Reactangle";
import {mapResolutionToCSS} from "../../WorkSpace/Screen/Screen";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {
  ScreenState,
  HmiSprite,
  SignalState
} from "../../../redux/reducers/types";
import {select} from "../../../redux/selectors/redux-selectors";
import Cell from "../../WorkSpace/Screen/Cell/Cell";
import HmiRedactorForm from "./HmiRedactorForm";
import InformationBlock from "../../WorkSpace/Screen/Drawing/InformationField/InformationBlock";

type OwnProps = {};
type StateProps = {
  hmi: ScreenState,
  getSignal: (signalId: string) => SignalState,
};
type DispatchProps = {};
type Props = OwnProps & StateProps & DispatchProps;

const field: Array<{ x: number, y: number }> = [];
for (let i = 1; i <= 64; i++) {
  for (let j = 1; j <= 36; j++)
    field.push({x: i, y: j});
}

const nullSprite: HmiSprite = {
  position: {
    x: 0,
    y: 0,
  },
  meta: {
    id: "0",
    description: "null sprite",
  },
  spec: {
    status: "CLOSE",
  }
}

const Hmi: React.FC<Props> = ({hmi, getSignal}) => {
  const resolution = hmi.resolution;
  const sprites = hmi.sprites;
  const pipesColor = hmi.sprites.pipes.pipesColor;

  const [focusObjectInfo, setFocusObjectInfo] = useState<HmiSprite>(nullSprite);
  const onClickHandler = ({meta, position, spec}: HmiSprite, event: React.BaseSyntheticEvent): void => {
    event.preventDefault();
    setFocusObjectInfo({meta, position, spec});
  };
  const eventsCreator = (hmiSprite: HmiSprite) => {
    return {
      onClick: (event: React.BaseSyntheticEvent) => onClickHandler(hmiSprite, event),
    }
  }
  return (
    <div>
      <div className={style.grid} style={mapResolutionToCSS(resolution)}>
        {field.map(cell => <Cell key={cell.x * 100 + cell.y} column={cell.x} row={cell.y}/>)}
        {sprites.pipes.pipeItems.map(pipe => <Pipe key={pipe.meta.id} {...pipe} color={pipesColor[pipe.spec.type]}
                                                   events={eventsCreator(pipe)}/>)}
        {sprites.informationFields.informationFieldsItems.map(field => <DoubleInformationField
          key={field.meta.id} {...field} signal={getSignal(field.spec.signalId)} events={eventsCreator(field)}/>)}
        {sprites.informationBlocks.informationBlockItems.map(field => <InformationBlock key={field.meta.id} {...field} events={eventsCreator(field)}/>)}
        {sprites.valves.valveItems.map(valve => <Valve key={valve.meta.id} {...valve}
                                            events={eventsCreator(valve)}/>)}
        {sprites.tanks.tankItems.map(tank => <Tank key={tank.meta.id} {...tank}
                                                   events={eventsCreator(tank)}/>)}
      </div>
      <div>
        <HmiRedactorForm {...focusObjectInfo}/>
      </div>
    </div>
  );
}

const mstp = (state: RootState): StateProps => ({
  hmi: select.getScreen(state),
  getSignal: select.getSignalState(state)(select.getCurrentObject(state)),
});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {})(Hmi);