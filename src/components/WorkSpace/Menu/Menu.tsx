import React from "react";
import {NavLink} from "react-router-dom";

type OwnProps = {};
type Props = OwnProps;

const Menu: React.FC<Props> = () => {
  return (
    <div>
      <NavLink to="/workspace/main">Main</NavLink>
      <NavLink to="/workspace/trends">Trends</NavLink>
      <NavLink to="/workspace/alarms">Alarms</NavLink>
    </div>
  )
}

export default Menu;