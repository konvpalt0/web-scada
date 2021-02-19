import React, {useState} from "react";
import style from "./header.module.css"
import Menu from "./menu/menu";
import UserBar from "./userBar/userBar";

const Header: React.FC<{}> = () => {
  const [menuMode, setMenuMod] = useState(false);
  const expandMenu = (): void => setMenuMod(true);
  const removeMenu = (): void => setMenuMod(false);
  const menuClassName: string = `${style.menu} + ${menuMode ? style.expandMenu : null}`;

  return (
    <div className={style.body}>
      <Menu expandMenu={expandMenu} removeMenu={removeMenu} menuClassName={menuClassName}/>
      <UserBar/>
    </div>
  )
};

export default Header;


