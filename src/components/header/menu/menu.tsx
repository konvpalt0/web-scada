import style from "../header.module.css";
import React, {useState} from "react";

const Menu: React.FC<{}> = () => {
  const [menuMode, setMenuMod] = useState(false);
  const expandMenu = (): void => setMenuMod(true);
  const removeMenu = (): void => setMenuMod(false);
  const menuClassName: string = `${style.menu} + ${menuMode ? style.expandMenu : null}`;

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