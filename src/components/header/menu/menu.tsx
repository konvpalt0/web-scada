import style from "../header.module.css";
import React from "react";

type MenuPropsType = {
  menuClassName: string,
  expandMenu: (e: React.FocusEvent) => void,
  removeMenu: (e: React.FocusEvent) => void,
}

const Menu: React.FC<MenuPropsType> = ({menuClassName, expandMenu, removeMenu}) => {
  return (
    <>
      <div className={menuClassName}>
        <div>LINK0</div>
        <div>LINK1</div>
        <div>LINK2</div>
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