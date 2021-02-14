import React, {useState} from "react";
import style from "./header.module.css"

const Header = () => {
  const [menuMode, setMenuMod] = useState(false);
  const handleMenuMod = () => {
    setMenuMod(!menuMode);
  }
  const menuClassName = `${style.navBar} + ${menuMode ? style.menuMod : null}`;

  return (
    <div className={style.body}>
      <div className={menuClassName} onPointerLeave={handleMenuMod}>
        <div>LINK0233333333333</div>
        <div>LINK1</div>
        <div>LINK2</div>
      </div>
      <div className={style.wrapperMenuBtn} onClick={handleMenuMod}>
        <div className={style.menuBtn}>
          MENU
        </div>
      </div>
      <div>
        USER PROFILE
      </div>
    </div>
  )
};

export default Header;


