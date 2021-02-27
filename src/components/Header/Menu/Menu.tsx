import style from "../Header.module.css";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const Menu: React.FC<{}> = () => {
  const [menuMode, setMenuMod] = useState(false);
  const expandMenu = (): void => setMenuMod(true);
  const removeMenu = (): void => setMenuMod(false);
  const menuClassName: string = `${style.menu} + ${menuMode ? style.expandMenu : null}`;

  return (
    <>
      <div className={menuClassName}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/workspace">WorkSpace</NavLink>
        <NavLink to="/development">Development</NavLink>
      </div>
      <div className={style.wrapperMenuBtn} onFocus={expandMenu} onBlur={removeMenu}>
        <button className={style.menuBtn}>
          MENU
        </button>
      </div>
    </>
  )
}

export default Menu