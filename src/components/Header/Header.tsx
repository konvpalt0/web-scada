import React from "react";
import style from "./Header.module.css";
import gStyle from "../../GlobalStyle.module.css";
import Menu from "./Menu/Menu";
import UserBar from "./UserBar/UserBar";
import composeClassNames from "../../utilities/commonFunctions/composeClassNames";
import {RouteComponentProps} from "react-router";

type Match = {
  section: string,
};

type Props = RouteComponentProps<Match>;

const Header: React.FC<Props> = ({...props}) => {
  const section = props.match.params.section;
  return (
    <div className={composeClassNames(style.body, gStyle.block)}>
      <Menu section={section}/>
      <UserBar/>
    </div>
  )
};

export default Header;


