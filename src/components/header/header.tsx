import React from "react";
import style from "./header.module.css"
import Menu from "./menu/menu";
import UserBar from "./userBar/userBar";

const Header: React.FC<{}> = () => {
  return (
    <div className={style.body}>
      <Menu/>
      <UserBar/>
    </div>
  )
};

export default Header;


