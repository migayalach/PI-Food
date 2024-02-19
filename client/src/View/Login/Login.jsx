// HOOK'S
import React from "react";
import { useHistory } from "react-router-dom";

// COMPONENTS
import Button from "../../Components/Button";
import { QqOutlined } from "@ant-design/icons";

// LIBRARY

// REDUX

// CSS
import "./login.css";

// IMAGE
const image = require("../../Image/fondo-menu.jpg");

// JAVASCRIP

function Login() {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/home");
  };

  return (
    <div className="conteiner-login">
      <img src={image} alt="imagen de fondo" className="image" />
      <button className="button" onClick={handleLogin}>
        Login
        <QqOutlined className="logo" />
      </button>
    </div>
  );
}

export default Login;
