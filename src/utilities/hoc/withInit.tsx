import React, {useEffect} from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/store";
import {select} from "../../redux/selectors/redux-selectors";
import {initialisation} from "../../redux/reducers/system-reducer/system-reducer";

const withInit = (Component: React.FC<any>): React.FC<any> => {
  interface StateProps {
    isInit: boolean,
  }
  interface DispatchProps {
    initialisation: () => void,
  }
  type OwnProps = {

  };
  type Props = StateProps & DispatchProps & OwnProps;

  const NewComponent: React.FC<Props> = ({isInit, initialisation, ...props}) => {
    useEffect(() => {
      initialisation();
    }, [initialisation])
    if (isInit) {
      return (
        <Component {...props}/>
      )
    }
    return (
      <div>Loading</div>
    )

  }

  const mstp = (state: RootState): StateProps => ({
    isInit: select.getIsSystemInit(state),
  })

  return connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
    initialisation,
  })(NewComponent);
}

export default withInit;