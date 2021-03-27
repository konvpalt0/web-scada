import React from "react";
import {NavLink} from "react-router-dom";
import gStyle from "../../../GlobalStyle.module.css";
import style from "../WorkSpace.module.css";
import composeClassNames from "../../../utilities/commonFunctions/composeClassNames";

type OwnProps = {};
type Props = OwnProps;

const Menu: React.FC<Props> = () => {
  return (
    <div className={composeClassNames(gStyle.menu, gStyle.block, style.menu)}>
      <NavLink to="/workspace/main"><div>Main</div></NavLink>
      <NavLink to="/workspace/trends"><div>Trends</div></NavLink>
      <NavLink to="/workspace/alarms"><div>Alarms</div></NavLink>
    </div>
  )
}

export default Menu;