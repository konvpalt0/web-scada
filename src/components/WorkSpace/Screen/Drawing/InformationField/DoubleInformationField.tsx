import React from "react";
import InformationField from "./InformationField";
import {Events, HmiSprite, InformationFieldSpec, SignalState} from "../../../../../redux/reducers/types";

interface OwnProps extends HmiSprite<InformationFieldSpec>, Events {
  signal: SignalState,
}

interface DispatchProps {
}

interface StateProps {
}

type Props = OwnProps & DispatchProps & StateProps;

const DoubleInformationField: React.FC<Props> = ({position, meta, spec, events, signal}) => {

  return (
    <>
      <InformationField {...{position, meta, spec}} information={`${signal.meta.information}`} events={events}/>
      <InformationField {...{position: {...position, x: position.x + 4}, meta, spec}}
                        information={`${signal.signalState[0].value} ${signal.meta.measure}`} events={events}/>
    </>
  )
}

export default DoubleInformationField;