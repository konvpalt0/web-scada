import gStyle from "../../../GlobalStyle.module.css";
import style from "../Header.module.css";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import composeClassNames from "../../../utilities/commonFunctions/composeClassNames";

const Menu: React.FC<{}> = () => {
  const [menuMode, setMenuMod] = useState(false);
  const expandMenu = (): void => setMenuMod(true);
  const removeMenu = (): void => {setTimeout(() => setMenuMod(false), 100)};
  const menuClassName = composeClassNames(gStyle.menu, style.menu, menuMode ? style.expandMenu : "");

  return (
    <>
      <div className={menuClassName}>
        <NavLink to="/home"><div>Home</div></NavLink>
        <NavLink to="/workspace/main"><div>WorkSpace</div></NavLink>
        <NavLink to="/development"><div>Development</div></NavLink>
      </div>
      <div className={composeClassNames(gStyle.menu, style.wrapperMenuBtn)} onFocus={expandMenu} onBlur={removeMenu}>
        <button>
          <div>Menu</div>
        </button>
      </div>
    </>
  )
}

export default Menu