import React from "react";
import style from "./Header.module.css"
import Menu from "./Menu/Menu";
import UserBar from "./UserBar/UserBar";

const Header: React.FC<{}> = () => {
  return (
    <div className={style.body}>
      <Menu/>
      <UserBar/>
    </div>
  )
};

export default Header;


