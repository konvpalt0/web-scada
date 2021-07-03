import React from "react";
import {NavLink} from "react-router-dom";
import gStyle from "../../../GlobalStyle.module.css";
import style from "../WorkSpace.module.css";
import composeClassNames from "../../../utilities/commonFunctions/composeClassNames";

type OwnProps = {
  menuItems: Array<{to: string, name: string}>,
  selectedItem: string,
};
type Props = OwnProps;

const Menu: React.FC<Props> = ({menuItems, selectedItem}) => {
  return (
    <div className={composeClassNames(gStyle.menu, gStyle.block, style.menu)}>
      {menuItems.map(it => {return (<NavLink key={it.name} to={it.to} className={it.name.toLowerCase() === selectedItem.toLowerCase() ? gStyle.selected : ""}><div>{it.name}</div></NavLink>);})}
    </div>
  )
}

export default Menu;