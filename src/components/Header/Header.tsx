import React from "react";
import style from "./Header.module.css";
import gStyle from "../../GlobalStyle.module.css";
import Menu from "./Menu/Menu";
import UserBar from "./UserBar/UserBar";
import composeClassNames from "../../utilities/commonFunctions/composeClassNames";

const Header: React.FC<{}> = () => {
  return (
    <div className={composeClassNames(style.body, gStyle.block)}>
      <Menu/>
      <UserBar/>
    </div>
  )
};

export default Header;


