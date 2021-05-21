import React from "react";
import LoginForm from "./LoginForm";
import gStyle from "../../GlobalStyle.module.css";
import composeClassNames from "../../utilities/commonFunctions/composeClassNames";

const Login: React.FC<{}> = () => {
  return (
    <div className={gStyle.fullSizeBlock}>
      <div className={composeClassNames(gStyle.centered)}>
        <LoginForm/>
      </div>
    </div>
  )
};

export default Login;