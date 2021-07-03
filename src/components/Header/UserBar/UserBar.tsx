import React from "react";
import { NavLink } from "react-router-dom";
import gStyle from "../../../GlobalStyle.module.css";

const UserBar: React.FC<{}> = () => {
  return (

    <div className={gStyle.menu} style={{display: "grid"}}>
      <NavLink to={"/userprofile"}><div>Administrator</div></NavLink>
    </div>
  )
}

export default UserBar